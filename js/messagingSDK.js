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
	$('.lp-json-pollock-element-button').on('click', function () {
		var scText = $(this).text();
		windowKit.sendMessage(scText);
	});
});

windowKit.onVisitorTextEvent(function(text){
    $('#caseyContainer').append('<div class="consumerText">' + text + '</div>');
    console.log('Consumer');
});

$(document).ready(function () {

});
