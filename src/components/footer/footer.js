import $ from 'jquery';

let target = $('.footer__logo');
let targetPos = target.offset().top;
let winHeight = $(window).height();
let scrollToElem = targetPos - winHeight;
let windowWidth = $(window).width();
$(window).scroll(function(){
	let winScrollTop = $(this).scrollTop();
	if(winScrollTop > scrollToElem && windowWidth > 480) {
		target.empty();
		target.append('<img class="footer__gif" src="./images/oxwel_firework.gif" alt="Oxwel logo">')
	}
});