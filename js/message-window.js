/* minifyOnSave, filenamePattern: ../dist/$1.min.$2 */

/*
 * LivePerson Messaging Window JavaScript SDK.
 *
 * Version: 1.0.-
 *
 * Use this SDK to build a custom messaging window in a web application or website.
 *
 */

function windowKit(options) {

    this.callBacks = [
        'onConnect',
        'onReady',
        'onMessageEvent',
        'onSkillChange',
        'onAgentTextEvent',
        'onAgentRichContentEvent',
        'onAgentChatState',
        'onMessageSent',
        'onVisitorTextEvent',
        'onVisitorMessage'
    ];

    this.readStates = {
        read: 'READ',
        accept: 'ACCEPT'
    };
    this.chatStates = {
        composing: 'COMPOSING',
        pause: 'PAUSE'
    };

    this.callBackStack = [];
    this.initStack = [];
    this.openConvs = {};
    this.lastSequence = 0;

    this.defaults = {
        apiRequestTypes: [
			'cqm.SubscribeExConversations',
			'ms.PublishEvent',
			'GetClock',
			'getUserProfile',
			'cm.ConsumerRequestConversation',
			'ms.SubscribeMessagingEvents',
			'InitConnection',
			'cm.UpdateConversationField',
			'cm.RequestConversationResponse'
		],
        debug: false
    };

    this.options = Object.assign(this.defaults, options);

    var _this = this;

    this.console = function(data, obj, type) {
        type = type || 'info';
        if (!_this.options.debug) return;
        obj = obj ? JSON.parse(JSON.stringify(obj)) : null;
        console[type](data, obj);
    };

    this.error = function(message, obj) {
        _this.console(message, obj, 'error');
    };

    this.warn = function(message, obj) {
        _this.console(message, obj, 'warn');
    };

    this.socket = {
        requests: {},
        subscriptions: [],
        ws: null,
        connect: function(url) {
            return new Promise(function (resolve, reject) {
				var ws = new WebSocket(url);
				_this.socket.ws = ws;
				ws.onopen = function () {
					return resolve(_this.socket);
				};
				ws.onmessage = function (msg) {
					return _this.socket.onmessage(msg);
				};
				ws.onclose = function (evt) {
					_this.socket.ws = null;
					reject(evt);
				};
			});
        },
        onmessage: function(msg) {
            var obj = JSON.parse(msg.data);
			if (obj.kind === "resp") {
				var id = obj.reqId;
				delete obj.reqId;
				delete obj.kind;
				_this.socket.requests[id].call(_this.socket, obj.type, obj.code, obj.body);
				delete _this.socket.requests[id];
			} else if (obj.kind === "notification") {
				_this.socket.subscriptions.forEach(function (sub) {
					if (sub.filter.call(_this.socket, obj)) {
						sub.cb.call(_this.socket, obj.body);
					}
				});
			}
        },
        registerRequests: function() {
            _this.options.apiRequestTypes.forEach(function (reqType) {
				_this.socket[_this.socket.toFuncName(reqType)] = function (body, headers) {
					return _this.socket.request(reqType, body, headers);
				};
				return _this.socket[_this.socket.toFuncName(reqType)];
			});
        },
        toFuncName: function(reqType) {
            var str = reqType.substr(1 + reqType.lastIndexOf('.'));
			return str.charAt(0).toLowerCase() + str.slice(1);
        },
        request: function(type, body, headers) {
            return new Promise(function (resolve, reject) {
				var obj = {
					"kind": "req",
					"type": type,
					"body": body || {},
					"id": Math.floor(Math.random() * 1e9).toString(),
					"headers": headers
				};
				if (type == 'GetClock') {
					obj = {
						"kind": "req",
						"type": type,
						"id": 1
					};
				}
				_this.socket.requests[obj.id] = function (type, code, body) {
					return resolve({
						type: type,
						code: code,
						body: body
					});
				};
				var str = JSON.stringify(obj);
				_this.socket.ws.send(str);
			});
        },
        onNotification: function(filterFunc, _onNotification) {
			_this.socket.subscriptions.push({
				filter: filterFunc,
				cb: _onNotification
			});
		},
        onNotificationType: function(type) {
        	return function(notif) {
        		return notif.type.includes(type);
        	};
        },
        subscriptionID: function(subscriptionID) {
            return function(notif) {
                return notif.body.subscriptionId === subscriptionID;
        	};
        }
    };

    this.lpUtils = {
        getDomain: function(service) {
            var domain = _this.options.account.toString().startsWith("le") ? "hc1n.dev.lprnd.net" : "adminlogin.liveperson.net";
            return new Promise(function (response, reject) {
				return _this.jsonp({
                    jsonp: 'cb',
                    jsonpCallback: 'domainCallback',
					url: "https://" + domain + "/csdr/account/" + _this.options.account + "/service/" + service + "/baseURI.lpCsds?version=1.0",
					success: function success(data) {
						return response(data.ResultSet.lpData[0].lpServer);
					},
					error: function error(e, text) {
						return reject(text);
					}
				});
			});
        },
        signup: function() {
			return new Promise(function (response, reject) {
				return _this.lpUtils.getDomain("idp").then(function (idpDomain) {
					return _this.jsonp({
						url: "https://" + idpDomain + "/api/account/" + _this.options.account + "/signup.jsonp",
						success: function success(idpResp) {
							return response(idpResp.jwt);
						}
					});
				});
			});
        },
        getJWT: function() {
            var localJWT = localStorage.getItem(_this.options.account + "-jwt");
			if (localJWT) {
				return Promise.resolve(localJWT);
			} else {
				if (window.preFillJWT !== undefined) {
					localStorage.setItem(_this.options.account + "-jwt", window.preFillJWT);
					return Promise.resolve(window.preFillJWT);
				} else {
					return _this.lpUtils.signup().then(function (newJWT) {
						localStorage.setItem(_this.options.account + "-jwt", newJWT);
						return Promise.resolve(newJWT);
					});
				}
			}
        },
        authJWT: function() {
            return new Promise(function (res, rej) {
				return _this.lpUtils.getJWT(_this.options.account).then(function (jwt) {
					return _this.lpUtils.getDomain(_this.options.account, "idp").then(function (idpDomain) {
						return $.ajax({
							url: "https://" + idpDomain + "/api/account/" + _this.options.account + "/authenticate",
							type: "POST",
							data: JSON.stringify({
								authCode: jwt
							}),
							dataType: "json",
							contentType: "application/json; charset=utf-8",
							success: function success(idpResp) {
								return res(idpResp.jwt);
							}
						});
					});
				});
			});
        }
    };

    this.ajax = function(options) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if (options.success) {
                    options.success(this.response);
                }
            } else {
                if(options.error) {
                    options.error(this.status, this.response);
                }
            }
        };
        request.open(options.type || 'GET', options.url, true);
        request.send();
    };

    this.jsonp = function(options) {
        var callbackName = options.jsonpCallback || 'jsonp_callback_' + Math.round(100000 * Math.random());
        var url = options.url;
        window[callbackName] = function(data) {
            delete window[callbackName];
            document.head.removeChild(script);
            options.success(data);
        };
        var script = document.createElement('script');
        script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + (options.jsonp || 'callback') + '=' + callbackName;
        document.head.appendChild(script);
    };

    this.connect = function() {
        var method = _this.options.authenticated ? 'authJWT' : 'getJWT';
		_this.lpUtils[method](_this.options.account).then(function(jwt) {
			_this.lpUtils.getDomain('asyncMessagingEnt').then(function(umsDomain) { //asyncMessagingEnt
				_this.socket.connect("wss://" + umsDomain + "/ws_api/account/" + _this.options.account + "/messaging/consumer?v=3").then(
					function(openedSocket) {
						_this.executeCallback('onConnect', _this);
                        _this.initWith({
            				"type": ".ams.headers.ConsumerAuthentication",
            				"jwt": jwt
            			});
                        _this.console('Connected to ' + _this.options.account);
                        _this.setParticipantId(jwt);
						return _this.socketOpened(openedSocket,jwt);
					},
					function(errorOpening) {
                        _this.executeCallback('onFailedConnection', _this, errorOpening);
                        _this.error('Failed to initiate connection.', errorOpening);
						throw errorOpening;
					}
				);
			});
		}, function(errorGettingJwt) {
			throw errorGettingJwt;
		});
    };

    this.initWith = function(initObject) {
        this.initStack.push(initObject || {});
    };

    this.socketOpened = function(socket) {
        socket.registerRequests(_this.options.apiRequestTypes);
        var convBody = _this.options.skillId ? {
			skillId: _this.options.skillId
		} : {};
        socket.initConnection({},this.initStack);
        setInterval(function() {
            socket.getClock();
        }, 10000);
        socket.onNotification(socket.onNotificationType('MessagingEvent'), function(body) {
			body.changes.forEach(function(change_detail) {
                var direction = change_detail.originatorId == _this.participantId ? 'sent' : 'received';
				_this.executeCallback('onMessageEvent', change_detail, direction);
                _this.lastSequence = change_detail.sequence;
                switch (direction) {
                    case 'received':
                        switch (change_detail.event.type) {
                            case 'ContentEvent':
                                _this.console('onAgentTextEvent', change_detail);
                                _this.executeCallback('onAgentTextEvent', change_detail.event.message, change_detail);
                                break;
                            case 'RichContentEvent':
                                _this.console('onAgentRichContentEvent', change_detail);
                                _this.executeCallback('onAgentRichContentEvent', change_detail.event.content, change_detail);
                                break;
                            case 'ChatStateEvent':
                                _this.console('onAgentChatState', change_detail);
                                _this.executeCallback('onAgentChatState', change_detail.event.chatState, change_detail);
                                break;
                            case 'AcceptStatusEvent':
                                _this.console('onAgentAcceptStatus', change_detail);
                                _this.executeCallback('onAgentAcceptStatus', change_detail.event.status, change_detail);
                                break;
                            default:
                                _this.console('onAgentMessage', change_detail);
                                _this.executeCallback('onAgentMessage', change_detail.event, direction, change_detail);
                                break;
                        }
                        break;
                    case 'sent':
                        switch (change_detail.event.type) {
                            case 'ContentEvent':
                                _this.console('onVisitorTextEvent', change_detail);
                                _this.executeCallback('onVisitorTextEvent', change_detail.event.message, change_detail);
                                break;
                            default:
                                _this.console('onVisitorMessage', change_detail);
                                _this.executeCallback('onVisitorMessage', change_detail.event, change_detail);
                                break;
                        }
                        break;
                }

			});
		});

        socket.subscribeExConversations({
			convState: ['OPEN']
		}).then(function(resp) {

            var convId;
			socket.onNotification(_this.socket.subscriptionID(resp.body.subscriptionId), function(notificationBody) {
				return _this.conversationNotification(socket,notificationBody);
			});

            setTimeout(function() {

                if (Object.keys(_this.openConvs)[0]) {
                    convId = Object.keys(_this.openConvs)[0];
                    _this.setInteractions(convId);
                    _this.console("Existing conversation",convId);
                } else {
                    socket.consumerRequestConversation(convBody).then(function(resp) {
                        convId = resp.body.conversationId;
                        _this.setInteractions(convId);
                        _this.console("New conversation",convId);
                    });
                }

            },1000);

        });
    };

    this.setInteractions = function(convId) {
        _this.console('Connection Ready.',convId);
        _this.executeCallback('onReady', convId);
        _this.sendMessage = function(message) {
            message = message.trim();

            _this.socket.publishEvent({
                dialogId: convId,
                event: {
                    type: 'ContentEvent',
                    contentType: 'text/plain',
                    message: message
                }
            })
            .then(function(resp) {
                _this.executeCallback('onMessageSent', message, resp);
            });
        };
        _this.sendReadState = function(state, ids) {
            ids = ids || [];
            _this.socket.publishEvent({
    			dialogId: convId,
    			event: {
    				type: 'AcceptStatusEvent',
    				status: state,
                    sequenceList: ids
    			}
    		});
        };
        _this.sendChatState = function(state) {
            _this.socket.publishEvent({
    			dialogId: convId,
    			event: {
    				type: 'ChatStateEvent',
    				chatState: state
    			}
    		});
        };
    };

    this.conversationNotification = function(socket, notificationBody) {
        notificationBody.changes.forEach(function(change) {
			if (change.type === 'UPSERT') {
				if (!_this.openConvs[change.result.convId]) {
					_this.openConvs[change.result.convId] = change.result;
					socket.subscribeMessagingEvents({
						fromSeq: 0,
						dialogId: change.result.convId
					});
				}

				if (change.result.conversationDetails.skillId != _this.options.skillId) {
					_this.options.skillId = change.result.conversationDetails.skillId;
					_this.executeCallback('onSkillChange', change.result.conversationDetails.skillId);
				}

			} else if (change.type === 'DELETE') {
				delete _this.openConvs[change.result.convId];
			}
		});
    };

    this.setParticipantId = function(jwt) {
        _this.participantId = JSON.parse(atob(jwt.split('.')[1])).sub;
    	return _this.participantId;
    };

    this.executeCallback = function(key) {
        var a = arguments;
        if (!_this.callBackStack[key]) return;
        _this.callBackStack[key].forEach(function(callback) {
            (callback)(a[1] || null, a[2] || null, a[3] || null);
        });
    };

    (function(instance) {
        instance.callBacks.forEach(function(item) {
            instance[item] = function(callBack) {
                instance.callBackStack[item] = instance.callBackStack[item] || [];
                instance.callBackStack[item].push(callBack);
            };
        });
    })(this);

}
