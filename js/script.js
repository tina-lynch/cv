
$(document).ready(function(){

	// if (window.innerWidth >= 1367) {
	// 	// skrollr.init();
	// 	skrollr.init({
	// 	    beforerender: function(data) {
	// 	        return data.curTop > data.lastTop;
	// 	    }
	// 	});
	// }





});


$(window).on("load", function(){

	//SLICK HERO BANNER
	$('.header-banner').slick({
		autoplay: true,
		arrows: false,
	    dots: false,
	    autoplaySpeed: 4000,
	    fade: true,
	    lazyLoad: 'ondemand'
	});



});


$(document).ready(function(){
  $(".hamburger-menu").on('click', function(e){
  	e.preventDefault();
  	if ($('.hamburger-menu').hasClass('change')){
  		$('.hamburger-menu').removeClass('change');
  		$('.headband').removeClass('headband-slide');
  		$('.container, .footer-ABN').removeClass('container-slide');
  	} else {
		$('.hamburger-menu').addClass('change');
		$('.headband').addClass('headband-slide');
		$('.container, .footer-ABN').addClass('container-slide');
	}

	})
	$(".closebtn").on('click', function(e){
	  	e.preventDefault();
	  	$('.hamburger-menu').removeClass('change');
	  	$('.headband').removeClass('headband-slide');
	  	$('.container, .footer-ABN').removeClass('container-slide');
	})


	$('.contents-list li a').on('click', function(e){
  	e.preventDefault();

	if (window.innerWidth >= 1170) {
		var reduction = 30;
	} else {
		var reduction = 85;
	}

  	$('html, body').animate({
        scrollTop: $(".privacy #"+$(this).attr('data-anchor')).offset().top -reduction
    }, 'slow');


  });
});

