import $ from 'jquery';


let items = $('.news__item');
//Change opacity, when items more than 4
let slickTrack = $('.slick-track');
let active = $('.slick-active');

let $first = active[0];
let $second = active[1];
let $third = active[2];
let $fourth = active[3];

function slickify() {
	$('.news__list').slick({
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 992,
				settings: "unslick"
			}
        ]
	});
}

if ($(items).length > 4) {
	slickify();
	
	$(window).resize(function() {
		if ($(window).width() > 992) {
			slickify();
		}
	});
}

if($(items).length > 4) {
	$($first).css('opacity','0.5');
	$($fourth).css('opacity','0.5');
};

$('.slick-prev').on('click', function() {
	slickTrack = $('.slick-track');
	active = $('.slick-active');

	$first = active[0];
	$second = active[1];
	$third = active[2];
	$fourth = active[3];

	$($first).css('opacity','0.5');
	$($fourth).css('opacity','0.5');
	$($second).css('opacity','1');
	$($third).css('opacity','1');

});

$('.slick-next').on('click', function() {
	slickTrack = $('.slick-track');
	active = $('.slick-active');

	$first = active[0];
	$second = active[1];
	$third = active[2];
	$fourth = active[3];

	$($first).css('opacity','0.5');
	$($second).css('opacity','1');
	$($third).css('opacity','1');
	$($fourth).css('opacity','0.5');
});


let buttonLoadMore = $('.news__button');

if ($(items).length > 4 && $(window).width() <= 992) {

	$(buttonLoadMore).css('display','block');

	$(function(){
		let lastItem = ($(items).length - 1);

		$(items).slice(0, 3).show();

		$(buttonLoadMore).on('click', function(e) {
			e.preventDefault();

			$('.news__item:hidden').slice(0,lastItem).slideDown("linear");

			if ($('.news__item:hidden').length == 0) {
				$(this).fadeOut('slow');
			};
		});
	});
}
