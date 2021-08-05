var searchData = [];
$(document).ready(function () {
	let url = window.location.href;
	sideBarClick();
	sideBarCollapse();
	//initialize smooth scroll
	var scroll = new SmoothScroll('a', { offset: 140 });
	mainBoxClick();
	anchors.add('h2, h3');
	populateAnchors();
	mobileHamburger();
	isExplorer();
	setTimeout(function () {
		agreeButton();
	}, 2000);
	capabilitiesSearch();
	searchFunction();
	if (url.includes('/data-reporting-reporting-metrics.html')) {
		$('#maincontent').addClass('page-no-right-sidebar');
		loadData();
	}
	$(document).ready(function () {
		scrollToHash(1000);
		if (checkCookie(window.cookieName) != window.cookieValue) {
			createDiv();
		}
	});
	if (url.indexOf('casey') > -1) {
		$('#defaultfooter').addClass('botfooter');
	}
});

function navigateContent(url) {
	console.log(url);
	//call ajax with the target url
	$.ajax(url)
		.done(function (content) {
			//grab the various parts of the target page
			var $newData = $(content);
			var $content = $('#defaultcontent');
			var $titlecontainer = $('.documenttitle');
			var $breadcrumbs = $('.breadcrumbs');
			var $botImage = $('.caseyPortrait');
			//exchange the content of those parts with the new parts loaded via ajax
			$breadcrumbs.html($newData.find('.breadcrumbs').html());
			$titlecontainer.html($newData.find('.documenttitle').html());
			$content.html($newData.find('#defaultcontent').html());
			$('.caseyPortrait').attr('src', 'img/closed-casey-header.svg');
			//add anchor links to all h3 titles. See respective functions below for what they do.
			if ($titlecontainer.html().indexOf('Welcome' == -1)) {
				$('#documenttitlecontainer').removeClass('documentHome');
				$('#defaultwrapper').removeClass('botwrapper');
				$('#maincontent').removeClass('mainHome');
				$('#defaultcontent').removeClass('homeContent');
			}
			anchors.add('h2, h3');
			// $('#mysidebar div.activeitem').removeClass('activeitem');
			sideBarCollapse();
			populateAnchors();
			capabilitiesSearch();
			searchFunction();
			replaceTitle();
			if (url.includes('/data-reporting-reporting-metrics.html')) {
				$('#maincontent').addClass('page-no-right-sidebar');
				loadData();
			}
			//call smoothscrolling on all anchors
			var scroll = new SmoothScroll('a', { offset: 140 });
			//jump to top when page loads if no hash
			if (!window.location.hash) {
				window.scrollTo(0, 0);
			}
			if (/Mobi|Android/i.test(navigator.userAgent) == true) {
				$('#defaultsidebar').slideUp(400);
				$('#defaultsidebar').data('expanded', 'false');
				$('#defaultcontent').removeClass('fadeout');
				var $hamburger = $('.hamburger');
				$hamburger.toggleClass('is-active');
			}
			if ($('#defaultfooter').hasClass('botfooter')) {
				$('#defaultfooter').removeClass('botfooter');
			} else {
				$('#defaultfooter').addClass('botfooter');
			}
			window.history.pushState(
				{
					url: url,
				},
				'',
				url
			);
		})
		.fail(function () {
			window.location = 'https://knowledge.liveperson.com/404.html';
		});
}

function loadData() {
	console.log('loading data');
	var staticUrl = '/data/reportbuilder.json';
	fetch(staticUrl)
		.then((response) => response.json())
		.then((metricData) => {
			searchData = [];
			metricData.map((metricitem) => {
				let { ELEMENT_NAME, ANALYSIS_TYPE, CHANNEL, DESCRIPTION, DASHBOARD, FILTERED_BY, FORMULA } = metricitem;
				jQuery('.metric-table').append(`
          <tr>
            <td class="metric"><div>${ELEMENT_NAME}</div></td>
            <td class="analysis"><div>${ANALYSIS_TYPE}</div></td>
            <td class="channel"><div>${CHANNEL}</div></td>
            <td class="description"><div>${DESCRIPTION}</div></td>
            <td class="dashboard"><div>${DASHBOARD}</div></td>
            <td class="filtered"><div>${FILTERED_BY}</div></td>
            <td class="formula"><div>${FORMULA}</div></td>
          </tr>
        `);

				if (searchData.indexOf(ELEMENT_NAME) < 0) {
					searchData.push(ELEMENT_NAME);
				}
				if (searchData.indexOf(DASHBOARD) < 0) {
					searchData.push(DASHBOARD);
				}
			});
		});
}

//a function to control a click on internal links
function linkclick(event, that) {
	if (event.isTrigger) {
		console.log('nontrigger');
		return false;
	} else if (!event.isTrigger) {
		// console.log('clickrun');
		//prevent the link from actually navigating to the url
		event.preventDefault();
		//grab the url to which the link is pointing
		let url = $(that).attr('href');
		// call the navigateContent function and pass that url to it
		navigateContent(url);
		window.history.pushState(
			{
				url: url,
			},
			'',
			url
		);
		// $(".pageitem a").removeClass("activeitem");
		// $(that).addClass("activeitem");
	}
}
//handle back/forward and refresh events
$(window).on('popstate', function (e) {
	var state = e.originalEvent.state;
	if (state && state.url) {
		navigateContent(state.url);
	}
});

function linkload() {
	//grab the url for the page
	var url = window.location.href;
	//make sure the window recognizes this and adds it to the history queue for back and refresh actions
	window.history.pushState(
		{
			url: url,
		},
		'',
		url
	);
}
//handle back/forward and refresh events
$(window).on('popstate', function (e) {
	var state = e.originalEvent.state;
	if (state && state.url) {
		navigateContent(state.url);
	}
});

// a function which controls the animation on the three main boxes on the homepage
function mainBoxClick() {
	$('#boxesrow').on('click', '.mainbox', function () {
		//var = box is open
		var hasExpanded = $(this).data('expanded') == 'true';
		//if open
		if (hasExpanded) {
			//close it
			$(this).addClass('closed');
			$(this).data('expanded', 'false');
			if (window.navigator.userAgent.indexOf('Edge') > -1) {
				$(this).removeClass('edgeBox');
			}
			//if closed
		} else {
			//open it
			$(this).removeClass('closed');
			$(this).data('expanded', 'true');
			if (window.navigator.userAgent.indexOf('Edge') > -1) {
				$(this).addClass('edgeBox');
			}
		}
	});
}

//a function to loop over all anchor elements and create a dropdown menu from them
function populateAnchors() {
	//remove all previous anchoritems populated in the box
	$('.anchoritem').remove();
	//find all h2 titles on the page
	var anchorlinks = document.getElementsByTagName('h2');
	var lowerlinks = document.getElementsByTagName('h3');
	var lowestlinks = document.getElementsByTagName('h4');
	var anchorlist = $('.anchorlist ul');
	//if there are no anchrolinks, hide the box. Visibility is used instead of display so not to conflict with the scrollToFixed plugin.
	if (anchorlinks.length == 0) {
		$('.anchorlist').css('visibility', 'hidden');
		//if there are anchorlinks, display the box
	} else {
		$('.anchorlist').css('visibility', 'visible');
		//for each link found, append an item to the anchor list. The data-scroll attribute is used in the smooth-scroll plugin.
		$.each(anchorlinks, function () {
			$(anchorlist).append(
				'<li><a class="anchoritem" data-scroll href="#' +
					$(this).attr('id') +
					'">' +
					$(this).text() +
					'</a></li>'
			);
		});
	}
}

function sideBarClick() {
	$('#defaultsidebar').on('click', '.canOpen', function (event) {
		var hasExpanded = $(this).data('expanded') == 'true';
		var nextGetsOpened = $(this).nextAll('.getsOpened');
		var childCanOpen = nextGetsOpened.find('.canOpen');
		var childOfSubcategory = $(this).parent().hasClass('.subcategoryitem');
		if (event.originalEvent === undefined) {
			$(this).nextAll('.getsOpened').show();
			$(this).addClass('activeitem');
			$(this).data('expanded', 'true');
		} else {
			if (hasExpanded) {
				if (!childOfSubcategory) {
					$(this).removeClass('activeitem');
				}
				childCanOpen.removeClass('activeitem');
				$(this).data('expanded', 'false');
				nextGetsOpened.slideUp(500);
				nextGetsOpened.find('.getsOpened').slideUp(500);
				childCanOpen.data('expanded', 'false');
			} else {
				if ($(this).hasClass('itemdetails')) {
					$('.itemdetails').removeClass('activeitem');
					$('.sidebarbuttoncontainer').removeClass('activeitem');
					$('.subcategoryfolder').slideUp(500);
					$('.categorylist').slideUp(500);
					$('.canOpen').data('expanded', 'false');
				}
				$(this).addClass('activeitem');
				$(this).data('expanded', 'true');
				$(this).nextAll('.getsOpened').slideDown(500);
			}
		}
		return false;
	});
	$('#defaultsidebar').on('click', 'a', function () {
		if ($(this).hasClass('activeitem')) {
			$(this).removeClass('activeitem');
		} else {
			$('.categoryfolder a').removeClass('activeitem');
			$(this).addClass('activeitem');
		}
		if ($('.mobileheader').css('display') == 'flex') {
			$('.hamburger').trigger('click');
		}
	});
}

function sideBarCollapse() {
	var url = window.location.href;
	var modifiedURL = '/' + url.split('/').reverse()[0].replace(/\#.*/, '');
	var currentPage = $('a[href="' + modifiedURL + '"]');
	var currentPageOpener = currentPage.parents().children('.canOpen');
	$('.categoryfolder a').removeClass('activeitem');
	$(this).addClass('itemdetails');
	currentPage = currentPage.addClass('activeitem');
	currentPageOpener = currentPageOpener.trigger('click');
}

//a function to control a click on the mobile hamburger button
function mobileHamburger() {
	var sidebar = $('#defaultsidebar');
	var $hamburger = $('.hamburger');
	//on click, set data to control the toggle behavior.
	$hamburger.on('click', function (e) {
		$hamburger.toggleClass('is-active');
		var hasExpanded = $(sidebar).data('expanded') == 'true';
		if (hasExpanded) {
			//if clicked, slide up and set data to unclicked but then "slide down" in case the window gets resized.
			$(sidebar).data('expanded', 'false');
			$('#defaultcontent').removeClass('fadeout');
			$(sidebar).slideUp(400, function () {
				$(this).addClass('sidebarHidden');
				$(sidebar).slideDown(400);
			});
		} else {
			//if unclicked, slide down and set data to clicked.
			$(sidebar).removeClass('sidebarHidden');
			$(sidebar).slideDown(400, function () {
				$('#defaultcontent').addClass('fadeout');
			});
			$(sidebar).data('expanded', 'true');
		}
	});
}

//a function which creates and operates the search for the API Metrics and Report Builder Tables
function searchFunction() {
	var $title = $('.h1').text();
	var analytics = [];
	var channels = [];
	var dashBoards = [];
	var filter = '';

	//only run if on the relevant pages
	if ($title.indexOf('Reporting metrics') > -1) {
		// Declare variables
		var input, table, tr, td, i;

		input = document.getElementById('metricsSearch');
		td = document.getElementsByTagName('td');
		//fixing lack of commas and spaces on source data
		for (i = 0; i < td.length; i++) {
			td[i].innerText = td[i].innerText.replace(/,(?=[^\s])/g, ', ');
		}
		// Loop through all table rows, and hide those who don't match the search query (represented by the "filter" variable) on input. Both functions do the same thing but are called below on the separate pages.
		function reportDisplay() {
			var analyticsString = analytics.join().toLowerCase();
			var channelsString = channels.join();
			var dashBoardsString = dashBoards.join();

			table = document.getElementById('datametricstable');
			tr = table.getElementsByTagName('tr');
			for (i = 0; i < tr.length; i++) {
				tdMetric = tr[i].getElementsByTagName('td')[0];
				tdDashboard = tr[i].getElementsByTagName('td')[4];
				if (tdMetric || tdDashboard) {
					if (
						(filter == '' ||
							tdMetric.innerHTML.toUpperCase().indexOf(filter) > -1 ||
							tdDashboard.innerHTML.toUpperCase().indexOf(filter) > -1) &&
						(analyticsString == '' ||
							analyticsString.indexOf(
								$(tr[i])
									.find('.analysis')
									.text()
									.replace(/(?:\r\n|\r|\n)/g, '')
									.trim()
									.toLowerCase()
							) > -1) &&
						(channelsString == '' ||
							channels.indexOf('Any') > -1 ||
							findCommonElement(
								$(tr[i])
									.find('.channel')
									.text()
									.replace(/(?:\r\n|\r|\n)/g, '')
									.trim()
									.split(','),
								channels
							)) &&
						(dashBoardsString == '' ||
							dashBoards.indexOf('Any') > -1 ||
							findCommonElement(
								$(tr[i])
									.find('.dashboard')
									.text()
									.replace(/(?:\r\n|\r|\n)/g, '')
									.trim()
									.split(','),
								dashBoards
							))
					) {
						tr[i].style.display = '';
						$('td').highlight(filter.toString(), {
							className: 'metricHighlight',
						});
					} else {
						tr[i].style.display = 'none';
					}
				} else {
					tr[i].style.display = '';
				}
			}
		}
		function metricsDisplay() {
			//if this is the API metrics page
			table = document.getElementById('apimetricstable');
			tr = table.getElementsByTagName('tr');
			for (i = 0; i < tr.length; i++) {
				tdMetric = tr[i].getElementsByTagName('td')[0];
				tdApi = tr[i].getElementsByTagName('td')[2];
				if (tdMetric || tdApi) {
					if (
						tdMetric.innerHTML.toUpperCase().indexOf(filter) > -1 ||
						tdApi.innerHTML.toUpperCase().indexOf(filter) > -1
					) {
						tr[i].style.display = '';
						$('td').highlight(filter.toString(), {
							className: 'metricHighlight',
						});
					} else {
						tr[i].style.display = 'none';
					}
				}
			}
		}
		// $(input).on("input", function () {
		// //get rid of previous highligthing before we highlight anything new
		// $("td").unhighlight({
		// className: "metricHighlight",
		// });
		// filter = input.value.toUpperCase();
		// //if this is the report builder page
		// filtersRecords();
		// });

		function filtersRecords() {
			if ($('.metricstable').is('#datametricstable')) {
				//timeout is important because the table is so large and if it tries to load in parallel to the function, it stalls.
				setTimeout(reportDisplay, 1000);
			} else {
				metricsDisplay();
			}
		}
		// filters

		$('#Analysis-Type-filter').multiselect({
			onOptionClick: function (element, option) {
				if (!$(option).prop('checked')) {
					analytics.splice(analytics.indexOf($(option).val()), 1);
					filtersRecords();
				} else {
					analytics.push($(option).val());
					console.log(analytics);
					filtersRecords();
				}
			},
		});

		$('#Chat-filter').multiselect({
			onOptionClick: function (element, option) {
				if (!$(option).prop('checked')) {
					channels.splice(channels.indexOf($(option).val()), 1);
					filtersRecords();
				} else {
					channels.push($(option).val());
					filtersRecords();
				}
			},
		});
		$('#DashBoard-filter').multiselect({
			onOptionClick: function (element, option) {
				if (!$(option).prop('checked')) {
					dashBoards.splice(dashBoards.indexOf($(option).val()), 1);
					filtersRecords();
				} else {
					dashBoards.push($(option).val());
					filtersRecords();
				}
			},
		});
	}

	// Auto Complete
	if (document.getElementById('metricsSearch') != null) {
		autocomplete(document.getElementById('metricsSearch'));
	}

	function autocomplete(inp) {
		var currentFocus;
		inp.addEventListener('input', function (e) {
			var a,
				b,
				i,
				val = this.value;
			closeAllLists();
			if (!val) {
				filter = inp.value.toUpperCase();
				filtersRecords();

				return false;
			}
			currentFocus = -1;
			a = document.getElementById(this.id + 'autocomplete-list');
			for (i = 0; i < searchData.length; i++) {
				if (searchData[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
					b = document.createElement('DIV');
					b.innerHTML = '<strong>' + searchData[i].substr(0, val.length) + '</strong>';
					b.innerHTML += searchData[i].substr(val.length);
					b.innerHTML += "<input type='hidden' value='" + searchData[i] + "'>";
					b.addEventListener('click', function (e) {
						inp.value = this.getElementsByTagName('input')[0].value;
						closeAllLists();
						filter = inp.value.toUpperCase();
						filtersRecords();
					});
					a.appendChild(b);
				}
			}
		});
		inp.addEventListener('keydown', function (e) {
			var x = document.getElementById(this.id + 'autocomplete-list');
			if (x) x = x.getElementsByTagName('div');
			if (e.keyCode == 40) {
				currentFocus++;
				addActive(x);
			} else if (e.keyCode == 38) {
				//up
				currentFocus--;
				addActive(x);
			} else if (e.keyCode == 13) {
				closeAllLists();
				filter = inp.value.toUpperCase();
				filtersRecords();
			}
		});
		function addActive(x) {
			if (!x) return false;
			removeActive(x);
			if (currentFocus >= x.length) currentFocus = 0;
			if (currentFocus < 0) currentFocus = x.length - 1;
			x[currentFocus].classList.add('autocomplete-active');
		}
		function removeActive(x) {
			for (var i = 0; i < x.length; i++) {
				x[i].classList.remove('autocomplete-active');
			}
		}
		function closeAllLists(elmnt) {
			document.getElementById('metricsSearchautocomplete-list').innerHTML = '';
		}
		/*execute a function when someone clicks in the document:*/
		document.getElementById('metricsSearch').addEventListener('click', function (e) {
			closeAllLists(e.target);
		});
	}

	/*************** End *******************************/
}

function findCommonElement(array1, array2) {
	// Loop for array1
	for (let i = 0; i < array1.length; i++) {
		// Loop for array2
		for (let j = 0; j < array2.length; j++) {
			// Compare the element of each and
			// every element from both of the
			// arrays
			if (array1[i] === array2[j]) {
				// Return if common element found
				return true;
			}
		}
	}

	// Return if no common element exist
	return false;
}

//very similar to the search function above, just for the capabilities comparison table
function capabilitiesSearch() {
	var $title = $('.h1').text();
	// Declare variables
	if ($title.indexOf('Messaging channels capabilities comparison') > -1) {
		var input, filter, table, tr, categorytr, td, capabilityName, i;
		input = document.getElementById('capabilitiesSearch');
		table = document.getElementById('featurestable');
		tr = table.getElementsByTagName('tr');
		td = document.getElementsByTagName('td');
		$('input').on('input', function () {
			filter = input.value.toUpperCase();
			$('td').unhighlight({
				className: 'metricHighlight',
			});
			for (i = 0; i < tr.length; i++) {
				capabilityName = tr[i].getElementsByTagName('td')[0];
				if (capabilityName) {
					if (capabilityName.innerHTML.toUpperCase().indexOf(filter) > -1) {
						tr[i].style.display = '';
						$(capabilityName).highlight(filter.toString(), {
							className: 'metricHighlight',
						});
					} else {
						tr[i].style.display = 'none';
					}
				}
				//if the tr being looped over is one of the blue categoryrows
				if ($(tr[i]).hasClass('categoryrow')) {
					//hide it always
					$(tr[i]).css('display', 'none');
					//except when user has deleted the input
					if (input.value == '') {
						$(tr[i]).css('display', 'table-row');
					}
				}
			}
		});
	}
}

//on scroll
$(window).scroll(function () {
	//check the window's position and account for the header
	var position = $(this).scrollTop() + 150;
	var titles = document.getElementsByTagName('h2');
	//for each h2 in the article
	$.each(titles, function () {
		// get its position and id
		var target = $(this).offset().top;
		var id = $(this).attr('id');
		//if the position of the window is greater than the position of the title (that is, the title has scrolled out of view)
		if (position >= target) {
			//deactivate all other active links in the anchorlist
			$('.anchorlist > ul > li > a').removeClass('active');
			//find the matching link in the anchorlist
			var current = $('a[href="#' + id + '"]');
			//set it to active
			current = current.addClass('active');
		} else if (position == 140) {
			$('.anchorlist > ul > li > a').removeClass('active');
			$('.anchorlist > ul > #jumptotop > a').addClass('active');
		}
	});
	if ($(window).scrollTop() + $(window).height() == $(document).height()) {
		$('.anchorlist > ul > li > a').removeClass('active');
		$('.anchoritem').last().addClass('active');
	}
});

//a function to make sure the page's title is updated on load
function replaceTitle() {
	//grab the page's current title
	var originalTitle = document.title;
	var newDocument = document.getElementsByClassName('no-after');
	if (newDocument) {
		var newDocumentText = $(newDocument).text();
		//lay out the new title
		var newTitleText = newDocumentText + ' |';
		//then set it as the document's title so it shows up properly in the tab
		var newTitle = originalTitle.replace(/^.*\|/, newTitleText);
	} else {
		var newTitle = originalTitle.replace(/^.*\-.*\|/, 'Welcome! |');
	}
	document.title = newTitle;
}

function agreeButton() {
	var agreeButton = document.querySelector('w-div > a');
	$('w-div > a').on('click', function (event) {
		event.preventDefault();
		var banner = document.getElementsByTagName('w-div');
		$(banner).css('bottom', '-62px');
		console.log('I agree');
	});
}

function scrollToHash(delay) {
	setTimeout(function () {
		if (window.location.hash && window.location.hash != '#top') {
			var hash = window.location.hash;
			window.location.hash = '';
			window.location.hash = hash;
			var linkScroll = $(hash);
			var linkOffset = $(linkScroll).offset().top - 150;
			window.scrollTo(0, linkOffset);
			sideBarLinksClicked();
		}
	}, delay);
}

function isEdge() {
	var boxes = document.getElementsByClassName('mainbox');
	$.each(boxes, function () {
		$(this).addClass('edgeBox');
	});
}

//detect if explorer and then add a bunch of classes with its own CSS because it's oh so special
function isExplorer() {
	var ua = window.navigator.userAgent;
	var is_ie = /MSIE|Trident/.test(ua);

	if (is_ie) {
		var nav = document.getElementById('homenav');
		var header = document.getElementById('homeheader');
		var documenttitlecontainer = document.getElementById('hometitle');
		var boxes = document.getElementsByClassName('mainboxwrapper');
		var panel = document.getElementById('homepanel');
		var wrapper = document.getElementById('defaultwrapper');
		if (nav) {
			nav.classList.add('homenavexplorer');
			header.classList.add('homeheaderexplorer');
			documenttitlecontainer.classList.add('hometitleexplorer');
			panel.classList.add('homepanelexplorer');
		}
		if (wrapper) {
			wrapper.classList.add('defaultwrapperExplorer');
		}
		$.each(boxes, function () {
			$(this).addClass('mainboxwrapperExplorer');
		});
	}
}

// Creare's 'Implied Consent' EU Cookie Law Banner v:2.4.1
// Conceived by Robert Kent, James Bavington & Tom Foyster

var dropCookie = true; // false disables the Cookie, allowing you to style the banner
var cookieDuration = 14; // Number of days before the cookie expires, and the banner reappears
var cookieName = 'complianceCookie'; // Name of our cookie
var cookieValue = 'on'; // Value of cookie

function createDiv() {
	var bodytag = document.getElementsByTagName('body')[0];
	var div = document.createElement('div');
	div.setAttribute('id', 'cookie-law');
	div.innerHTML =
		'<p><span>This website uses cookies to ensure you get the best browsing experience. By continuing to use this website, you consent to our use of these cookies. This website contains proprietary content that belongs to LivePerson and that is intended for educational use by our customers and prospects.  Your use of this site is subject to our <a href="https://www.liveperson.com/policies/terms-of-use">Terms of Use</a>, which include restrictions on any use of our information for unauthorized purposes.</span><span><a class="close-cookie-banner" href="javascript:void(0);" onclick="removeMe();"><span>I agree</span></a><a class="close-cookie-banner-mobile" href="javascript:void(0);" onclick="removeMe();"><span>X</span></a></span></p>';
	// Be advised the Close Banner 'X' link requires jQuery

	bodytag.appendChild(div); // Adds the Cookie Law Banner just before the closing </body> tag
	// or
	// bodytag.insertAfter(div,bodytag.firstChild); // Adds the Cookie Law Banner just after the opening <body> tag

	document.getElementsByTagName('body')[0].className += ' cookiebanner'; //Adds a class tothe <body> tag when the banner is visible
}

function createCookie(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		var expires = '; expires=' + date.toGMTString();
	} else var expires = '';
	if (window.dropCookie) {
		document.cookie = name + '=' + value + expires + '; path=/';
	}
}

function checkCookie(name) {
	var nameEQ = name + '=';
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name, '', -1);
}

function removeMe() {
	// Create the cookie only if the user click on "Close"
	createCookie(window.cookieName, window.cookieValue, window.cookieDuration); // Create the cookie
	// then close the window/
	var element = document.getElementById('cookie-law');
	element.parentNode.removeChild(element);
}

if (/Mobi|Android/i.test(navigator.userAgent) == true) {
	setTimeout(function () {
		removeMe();
	}, 6000);
}

function sideBarLinksClicked() {
	$('a').click(() => {
		scrollToHash(0);
	});
}
