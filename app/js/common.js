$(function() {

    $('button.hamburger').click(function(){
		$(this).toggleClass("is-active");
	});

    $('.carousel-home').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		nav: false,
		autoHeight: true,
		dots: true,
	});

	$('.on-top').click(function(){
    	$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
 	 });

});
