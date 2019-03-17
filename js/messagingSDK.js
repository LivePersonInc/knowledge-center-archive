//initializing the messagingSDK
var windowKit = new windowKit({
	account: 89307955
	//skillId: 12341234 - optional skill ID
});
//declaring variables
var userinput = '<div class="inputcontainer"><input type="text" id="messageInput" placeholder="Type your query here"/><div class="magGlass"><i class="fas fa-search"></i></div></div>'
let isScrolling;
let agentFirstText;

//connecting to a conversation, the JWT is created here
windowKit.connect();

//when the conversation has been loaded and is ready (displayed), call the scrollBottom function
windowKit.onReady( function () {
	console.log("ready");

});

//when an agent (the bot) sends a text
windowKit.onAgentTextEvent(function(text) {
	//apnend the text's contents to the conversation
	$('#caseyContainer').append('<div class="caseyTextContainer"><img class="caseyAvatar" src="img/fill-avatar.png"/><div class="caseyText">' + text + '</div></div>');
	//a rule to check if the user asked for a search and if so, show the input field
	if (text.indexOf("whatever you'd like to search for") > -1) {
		displayInput();
	}
	console.log('Agent: ' + text);
	//a rule to get rid of the loader, but only one the first agent text sent to prevent errors
	if (!agentFirstText) {
		agentFirstText = true;
		$("#botLoader").css('display', 'none');
	}
});

//when a user sends a text
windowKit.onVisitorTextEvent(function(text) {
	//grab that text's contents and append it to the conversation
	$('#caseyContainer').append('<div class="consumerText">' + text + '</div>');
	console.log('visitortext');
});

//when an agent (the bot) sends a rich content message
windowKit.onAgentRichContentEvent(function(content) {
	//grab the content of the message, render them using LP's Pollock tool and set them as a variable
  var structuredText = JsonPollock.render(content);
	//append that variable to the conversation
	$('#caseyContainer').append(structuredText);
	var scTexts = document.getElementsByClassName('lp-json-pollock');
	var latestScText = scTexts[scTexts.length - 1];
	$(latestScText).append('<img class="caseyAvatar" src="img/fill-avatar.png"/>')
	//when you print the text, print the rich content as an object not a string
	console.log('Agent: ', structuredText);
	//Pollock code used to navigate to the links the bot sends, effectively registering the buttons to be links to them
	JsonPollock.registerAction('link', function (linkObject) {
		//grab the link passed with the object
		var rawLink = linkObject.actionData.uri;
		//open the link in a new tab
		window.open(rawLink, "_blank");
		console.log(linkObject);
	});
	//when a user click on a strucuted content button
	$('.lp-json-pollock-element-button').on('click', function () {
		//grab the text of the button
		var scText = $(this).text();
		//if it's not a view result button which instead navigates to a link as above
		if (scText.indexOf("View result") == -1) {
		//send it to the conversation, it will get appended in onVisitorTextEvent
		windowKit.sendMessage(scText);
		var buttons = $('.lp-json-pollock-layout').children('.lp-json-pollock-element-button');
		}
		$.each (buttons, function() {
			$(this).css('display','none');
		})
		//if the user wants to search, show the input field
		if (scText == "Search for something else") {
			displayInput();
		}
	});
});

function displayInput () {
	//timeout needed to make sure the input gets displayed after the response message
	setTimeout (function () {
	//find the last child, which will always be the response message, and append the input beneath it
	$('#caseyContainer:last').append(userinput);
	//a listener to recognize whether enter was pressed on the search input
	 $('#messageInput').keydown(function (e) {
		 if (e.which == 13) {
			 //when enter was pressed, grab the text from the input field
			 var messageText = messageInput.value;
			 //send that text to the conversation, where it will get appended
			 windowKit.sendMessage(messageText);
			 console.log('enter');
			 console.log(messageText);
			 //change the id of the input field used to make sure it doesn't get picked up when this function runs again - there can only be one!
			 $(this).attr('id', 'messageInputUsed');
		 }
	 });
}, 2000);
};

//a function to scroll to the bottom of the conversation
function scrollBottom () {
	//only scroll if we haven't scrolled before
	if (!isScrolling) {
		//change the var so this doesn't repeat
		isScrolling = true;
		//find the bottom of the conversation window by adding the top attribute and the height of the div
	var bottom = $('#caseyContainer').position().top + $('#caseyContainer').outerHeight(true);
	//now that we have bottom, animate the body and html to simulate a scroll
		$('body, html').animate({ scrollTop: bottom, complete: function() { isScrolling = false; } }, 1000);
	}
	setTimeout (function () {
		//allow other scrolls in the future, like those which happen when a new text is sent
		isScrolling = false;
	}, 2000);
};

$(document).ready(function () {
	//when the reset button is clicked
	$('#resetcontainer').click(function() {
		//clear localStorage, killing the JWT
		window.localStorage.clear();
		//refresh the page. Since there's no JWT stored, a new conversation will be created
    window.location.reload(true);
});
})
