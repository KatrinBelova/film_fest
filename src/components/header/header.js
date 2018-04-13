import $ from 'jquery';

$(document).ready(function() {
	//Clickble NAV
	$('a[href*="#"]').on('click', function (e) {
	e.preventDefault();

	let position = $($(this).attr('href')).offset().top-90;

	$('html, body').animate({
		scrollTop: position
	}, 1500);
	});

	//Hamburger menu

	$('.header__menu').on('click', function() {
		$(this).css('color','#000')
		$('.header').css({'display': 'block', 'position': 'fixed', 'z-index': '99'}).addClass('.responsive_menu')
		$('.header').animate({left: '0'})
	});
	$('.header__exit').on('click', function() {
		$('.header__menu').css('color','#fff')
		$('.header').css('display','none')
		$('.header').animate({left: '100%'})
	});
	$('.header__item a').on('click', function() {
		if($('.header').hasClass('.responsive_menu')){
			$('.header__menu').css('color','#fff')
			$('.header').css('display','none')
			$('.header').animate({left: '100%'})
		}
		
	});

	
});

let controlPoint = $('.home__sponsor');
let pointPosition = controlPoint.offset().top;


$(window).scroll(function(){

	if($(document).scrollTop() > 200 && !$('.header').hasClass('.responsive_menu')) {

		$('.header').addClass('header_top');
	} else {

		$('.header').removeClass('header_top');
	};

	if($(document).scrollTop() > pointPosition && !$('.header').hasClass('.responsive_menu')){

		$('.header').addClass('fixed_header');
		$('.header__logo').removeClass('hidden').addClass('visible')
		$('.header__lang').addClass('hidden').removeClass('visible')
	} else {

		$('.header').removeClass('fixed_header');
		$('.header__logo').addClass('hidden').removeClass('visible')
		$('.header__lang').removeClass('hidden').addClass('visible')
	};

	if($(document).scrollTop() > pointPosition) {

		$('.header__menu').css('opacity', '0.5')
	} else {

		$('.header__menu').css('opacity', '1')
	}
});