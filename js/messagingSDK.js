var windowKit = new windowKit({
	account: 89307955
	//skillId: 12341234 - optional skill ID
});

windowKit.connect();

windowKit.onAgentTextEvent(function(text) {
	$('#caseyContainer').append('<div class="caseyText">' + text + '</div>');
	console.log('Agent: ' + text);
});

windowKit.onAgentRichContentEvent(function(content) {
  var structuredText = JsonPollock.render(content);
	$('#caseyContainer').append(structuredText);
	console.log('Agent: ', structuredText);
});

windowKit.onVisitorTextEvent(function(text){
    $('#caseyContainer').append('<div class="consumerText">' + text + '</div>');
    console.log('Consumer');
});

$(document).ready(function () {
  // var currentMessages = document.getElementByClassName
  var messageInput = document.getElementById('messageInput');
  $('#messageInput').keydown(function (e) {
    if (e.which == 13) {
      var messageText = messageInput.value;
      windowKit.sendMessage(messageText);
      console.log('enter');
      console.log(messageText);
    }
  });
});
