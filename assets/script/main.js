// ハンバーガーメニュー
$(function () {
	var hamburger = $('.hamburger-menu');
	var hamburgerButton = $('.hamburger-menu__button');
	var menuLinks = $('.hamburger-menu a');

	hamburgerButton.on('click', function () {
		hamburger.toggleClass('hamburger-menu-active');
	});

	menuLinks.on('click', function () {
		hamburger.removeClass('hamburger-menu-active');
	});

	$(window).on('resize', function () {
		hamburger.removeClass('hamburger-menu-active');
	});
});

// スムーズスクロール
$(function () {

	$('a[href^="#"]').click(function () {
		let adjust = 0;
		let speed = 1000;
		let href = $(this).attr("href");
		let target = $(href == "#" || href == "" ? 'html' : href);
		let position = target.offset().top + adjust;
		$('body, html').animate({ scrollTop: position }, speed, 'swing');
		return false;
	});
});


// タブ
document.querySelectorAll('.course__tab-link').forEach(function (tabButton) {
	tabButton.addEventListener('click', function () {
		document.querySelectorAll('.course__tab-link').forEach(function (btn) {
			btn.classList.remove('active');
		});
		tabButton.classList.add('active');

		const targetTab = tabButton.getAttribute('data-target');
		document.querySelectorAll('.course__tab-pane').forEach(function (pane) {
			pane.classList.remove('active');
		});
		document.querySelector('.' + targetTab).classList.add('active');
	});
});


