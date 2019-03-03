var windowKit = new windowKit({
	account: 89307955
	//skillId: 12341234 - optional skill ID
});

windowKit.connect();

windowKit.onAgentTextEvent(function(text) {
	$('#caseyContainer').append('<div class="caseyText">' + text + '</div>');
	var botTexts = document.getElementsByClassName('caseyText');
	var latestText = botTexts[botTexts.length - 1]
	$('body, html').animate({ scrollTop: $(latestText).offset().top }, 1000);
	console.log('Agent: ' + text);
});

windowKit.onAgentRichContentEvent(function(content) {
  var structuredText = JsonPollock.render(content);
	$('#caseyContainer').append(structuredText);
	var botTextsSC = document.getElementsByClassName('lp-json-pollock');
	var latestSC = botTextsSC[botTextsSC.length - 1];
	$('body, html').animate({ scrollTop: $(latestSC).offset().top }, 1000);
	console.log('Agent: ', structuredText);
	$('.lp-json-pollock-element-button').on('click', function () {
		var scText = $(this).text();
		windowKit.sendMessage(scText);
		$('#caseyContainer').append('<div class="consumerText">' + scText + '</div>');
		var consumerTexts = document.getElementsByClassName('consumerText');
		var latestConsumerText = consumerTexts[consumerTexts.length - 1];
		$('body, html').animate({ scrollTop: $(latestConsumerText).offset().top }, 1000);
	});
});
