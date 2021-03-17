$(function () {
	/*FİXED HEADER*/
	let header = $('#header');
	let intro = $('#intro');
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	let nav = $('#nav');
	let navToggle = $('#navToggle');
	checkScroll(scrollPos, introH);
	$(window).on('scroll resize', function () {
		let introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();
		checkScroll(scrollPos, introH);
	});
	function checkScroll() {
		if (scrollPos > introH) {
			header.addClass('fixed');
		} else {
			header.removeClass('fixed');
		}
	}

	/*PLAVNİY SCROLL===========================================*/
	$('[data-scroll]').on('click', function (event) {
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;

		nav.removeClass('show');

		$('html, body').animate({
			scrollTop: elementOffset - 60
		}, 700);
	});


	/*navToggle=============================================*/


	navToggle.on('click', function (event) {
		event.preventDefault();

		nav.toggleClass('show');
	});

	/*TEST SLİDER   https://kenwheeler.github.io/slick/#go-get-it=====*/
	let slider = $('#testslider');
	slider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		dots: true
	});






});



/*______________POPUP_____________________*/

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelectorAll('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener('click', function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}


const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}


/*--------------Function Open POPUP--------------*/

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			//bodyLock();
		}

		curentPopup.classList.add('open');
		curentPopup.addEventListener('click', function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}
function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');


	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}



function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});


/*-----------SLİDER----------------*/
$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		easing: 'ease',
		infinite: true,
		autoplay: true,
		autoplaySpeed: 1500,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		waitForAnimate: false,
		centerMode: false,
		variableWidth: false,
		rows: 1,
		slidesPerRow: 1,
		vertical: false,
	});
});