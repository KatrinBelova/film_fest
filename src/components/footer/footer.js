import $ from 'jquery';

let target = $('.footer__img');
let targetPosition = target.offset().top;
let windowWidth = $(window).width();

$(window).scroll(function(){

	if($(document).scrollTop() > targetPosition && windowWidth > 480) {

		target.replaceWith('<img class="footer__gif" src="./images/oxwel_firework.gif" alt="Oxwel logo">');
	}
});
