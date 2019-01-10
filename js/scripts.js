$(document).ready(function () {
	//initialize smooth scroll
	var scroll = new SmoothScroll('a[href*="#"]', { offset: 120});
	mainBoxClick()
	anchors.add('h2');
	populateAnchors()
	sideBarClick ();
});


// a function which controls the animation on the three main boxes on the homepage
function mainBoxClick() {
	$("#boxesrow").on("click", ".mainbox", function (){
		//var = box is open
		var hasExpanded = $(this).data("expanded") == "true";
		//if open
		if (hasExpanded) {
			//close it
			$(this).addClass("closed");
			$(this).data("expanded", "false");
			//if closed
		} else {
			//open it
			$(this).removeClass("closed");
			$(this).data("expanded", "true");
		}
	});
}

//a function to loop over all anchor elements and create a dropdown menu from them
function populateAnchors() {
	//remove all previous anchoritems populated in the box
	$(".anchoritem").remove();
	//find all h3 titles on the page
	var anchorlinks = document.getElementsByTagName("h2");
	var anchorlist = $('.anchorlist ul');
	//if there are no anchrolinks, hide the box. Visibility is used instead of display so not to conflict with the scrollToFixed plugin.
	if (anchorlinks.length == 0) {
		$('.anchorlist').css('visibility', 'hidden');
		//if there are anchorlinks, display the box
	} else {
		$('.anchorlist').css('visibility', 'visible');
		//for each link found, append an item to the anchor list. The data-scroll attribute is used in the smooth-scroll plugin.
		$.each(anchorlinks, function () {
			$(anchorlist).append('<li><a class="anchoritem" data-scroll href="#' + $(this).attr("id") + '">' + $(this).text() + '</a></li>');
		});
	};
};

function sideBarClick () {
	$("#defaultsidebar").on("click", ".canOpen", function (){
		var hasExpanded = $(this).data("expanded") == "true";
		var nextGetsOpened = $(this).next(".getsOpened");
		var childCanOpen = nextGetsOpened.find(".canOpen");
		if (hasExpanded) {
			$(this).removeClass("activeitem");
			childCanOpen.removeClass("activeitem");
			$(this).data("expanded", "false");
			nextGetsOpened.slideUp(500);
			nextGetsOpened.find(".getsOpened").slideUp(500);
			childCanOpen.data("expanded", "false");
		} else {
			$(".itemdetails").removeClass("activeitem");
			$(this).addClass("activeitem")
			$(this).data("expanded", "true");
			$(this).next(".getsOpened").slideDown(500);
	};
	return false;
});
};

//on scroll
$(window).scroll(function() {
	//check the window's position and account for the header
    var position = $(this).scrollTop() + 120;
		var titles = document.getElementsByTagName('h2');
		//for each h2 in the article
    $.each(titles, function() {
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
				 current = current.addClass("active");
		 } else if (position == 120) {
			 $('.anchorlist > ul > li > a').removeClass('active');
			 $('.anchorlist > ul > #jumptotop > a').addClass('active');
		 }
    });
});
