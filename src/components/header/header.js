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

	$('.header__menu').on('click', function() {
		$(this).css('color','#000')
		$('.header').css('display','block').addClass('.responsive_menu')
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

$(window).scroll(function(){
	if($(document).scrollTop() > 90 && !$('.header').hasClass('.responsive_menu')) {

			$('.header').css('background-color','rgba(0,0,0,1)');
			$('.header__logo').removeClass('hidden').addClass('visible')
			$('.header__lang').addClass('hidden').removeClass('visible')
		} else {

			$('.header').css('background-color','rgba(0,0,0,0.7)');
			$('.header__logo').addClass('hidden').removeClass('visible')
			$('.header__lang').removeClass('hidden').addClass('visible')
		}
});