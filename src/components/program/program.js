import $ from 'jquery';

let links = $('.program__title');
let linksArray = $.makeArray(links);
let allEvents = $('.program__event');

$(window).resize(function() {

	if ($(window).width() < 992) {

		for(let i = 0; i < (linksArray.length); i++){

			let link = linksArray[i];
			let isLinkEmpty = $(link).text().toString();
			let parent = $(link).parent();

			if(isLinkEmpty == ""){
				$(parent).fadeOut();
			}
		}	
	} else {
		$(allEvents).fadeIn();
	}
});

if ($(window).width() < 992) {

	for(let i = 0; i < (linksArray.length); i++){

		let link = linksArray[i];
		let isLinkEmpty = $(link).text().toString();
		let parent = $(link).parent();

		if(isLinkEmpty == ""){
			$(parent).fadeOut();
		}
	}	
} else {
	$(allEvents).fadeIn();
};
