
$(window).on("load", function(){
	//SLICK SMALL TOUR GALLERY
	$('.web-imgs').slick({
		autoplay: false,
	    arrows: true,
	    dots: false,
	    fade: true,
	    speed: 500,
		lazyLoad: 'ondemand',
		slidesToScroll: 1,
	    prevArrow:'<img class="previous-arrow" src="images/angle-left.svg">',
	    nextArrow:'<img class="next-arrow" src="images/angle-right.svg">',

	    responsive: [{ 
	        breakpoint: 400,
	        settings: {
	            autoplay: true,
	            dots: true
	       	} 
	    }]
	});
});



$(document).ready(function(){
	$('.header-text, .contentPage .slideUp, .arrow-holder').addClass("slideHidden");

	$(".hamburger-menu").on('click', function(e){
  		e.preventDefault();
  		if ($('.hamburger-menu').hasClass('change')){
	  		$('.hamburger-menu').removeClass('change');
	  		$('.headband').removeClass('headband-slide');
	  	} else {
			$('.hamburger-menu').addClass('change');
			$('.headband').addClass('headband-slide');
		}
	});

	$(".sub-pg h3 a").on('click', function(e){
		e.preventDefault();
		var x = $(this).attr('id');
		var y = '.'+ x;

		if ($(y).hasClass('active') ){
			$(y).removeClass('active');
			$('#'+ x).removeClass('weight300');
			$(y).hide('blind', 500);
			$('html, body').animate({scrollTop: '-=50px'}, 500);
		} else {
			$('.blurb').removeClass('active').css('display','none');
			$('h3 a').removeClass('weight300');
			$(y).addClass('active').show('blind', 500);
			$('#'+ x).addClass('weight300');
			$('.homePage main').css('height','auto');
			$('.homePage footer').css('visibility','visible');
			$('html, body').animate({scrollTop: '+=100px'}, 500);
		}
	});

	$(".down-arrow").on('click', function(){
		$('html, body').animate({scrollTop: $(".arrow-holder").offset().top +1}, 1000);
	});

	$(".web-subs h2").on('click', function(e){
		e.preventDefault();
		var x = $(this).attr('id');
		var y = '.'+ x;

		if ($(y).hasClass('web-enlarge') ){
			$('.hidden-web').removeClass('web-enlarge')
			$('.hover-background').css('visibility','hidden').css('transition','ease-in 0.5s');
			$('.close').css('opacity','0').css('transition','opacity 3s');
		} else {
			$(y).addClass('web-enlarge');
			$('.hover-background').css('visibility','visible');
			$('.close').css('opacity','1').css('transition','opacity 3s');
		}
	});

	$('.hover-background, .close').on('click', function(){
		$('.hidden-web').removeClass('web-enlarge');
		$('.hover-background').css('visibility','hidden').css('transition',' visibility ease-out 0.5s');
		$('.close').css('opacity','0').css('transition','opacity 3s');
		$('iframe').attr('src', 'https://www.youtube.com/embed/BmxLKrzoYt4?rel=0&amp;controls=0');
	});	

});

