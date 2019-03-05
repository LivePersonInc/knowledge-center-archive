var windowKit = new windowKit({
	account: 89307955
	//skillId: 12341234 - optional skill ID
});
var userinput = '<input type="text" id="messageInput"/>'

windowKit.connect();

windowKit.onAgentTextEvent(function(text) {
	$('#caseyContainer').append('<div class="caseyText">' + text + '</div>');
	if (text.indexOf("search") > -1) {
		displayInput();
	}
	console.log('Agent: ' + text);
});

windowKit.onVisitorTextEvent(function(text) {
	$('#caseyContainer').append('<div class="consumerText">' + text + '</div>');
	var consumerTexts = document.getElementsByClassName('consumerText');
	var latestConsumerText = consumerTexts[consumerTexts.length - 1];
	$('body, html').animate({ scrollTop: $(latestConsumerText).offset().top }, 1000);
	console.log('visitortext');
});

windowKit.onAgentRichContentEvent(function(content) {
  var structuredText = JsonPollock.render(content);
	$('#caseyContainer').append(structuredText);
	var scTexts = document.getElementsByClassName('lp-json-pollock');
	var latestScText = scTexts[scTexts.length - 1];
	$('body, html').animate({ scrollTop: $(latestScText).offset().top }, 1000);
	console.log('Agent: ', structuredText);
	JsonPollock.registerAction('link', function (linkObject) {
		var rawLink = linkObject.actionData.uri;
		var cleanLink = rawLink.replace('s.bcbot.io/r', 'knowledge.liveperson.com');
		window.open(cleanLink, "_blank");
		console.log(linkObject);
	});
	$('.lp-json-pollock-element-button').on('click', function () {
		var scText = $(this).text();
		if (scText.indexOf("View result") == -1) {
		windowKit.sendMessage(scText);
		}
		if (scText == "Something else") {
			displayInput();
		}
	});
});

windowKit.onMessageSent(function(text) {
	console.log('Visitor: ', text);
	$('#caseyContainer').append('<div class="consumerText">' + text + '</div>');
	var consumerTexts = document.getElementsByClassName('consumerText');
	var latestConsumerText = consumerTexts[consumerTexts.length - 1];
	$('body, html').animate({ scrollTop: $(latestConsumerText).offset().top }, 1000);
});

function displayInput () {
	setTimeout (function () {
	$('#caseyContainer:last').append(userinput);
	var messageInput = document.getElementById('messageInput');
	 $('#messageInput').keydown(function (e) {
		 if (e.which == 13) {
			 var messageText = messageInput.value;
			 windowKit.sendMessage(messageText);
			 console.log('enter');
			 console.log(messageText);
			 $(this).attr('id', 'messageInputUsed');
		 }
	 });
}, 2000);
}
