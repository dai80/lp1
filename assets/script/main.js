// ハンバーガーメニュー
$(function () {
  var hamburger = $('.hamburger-menu');
  var hamburgerButton = $('.hamburger-button');
  var menuLinks = $('.hamburger-menu a');

  // ハンバーガーボタンのクリックでメニューの表示/非表示を切り替え
  hamburgerButton.on('click', function () {
    hamburger.toggleClass('hamburger-menu-active');
  });

  // リンクをクリックしたらメニューを閉じる
  menuLinks.on('click', function () {
    hamburger.removeClass('hamburger-menu-active');
  });

  // ウィンドウサイズ変更時にメニューを閉じる
  $(window).on('resize', function () {
    hamburger.removeClass('hamburger-menu-active');
  });
});

// スムーズスクロール
$(function(){

  $('a[href^="#"]').click(function(){
    let adjust = 0;
    let speed = 1000;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top + adjust;
    $('body, html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});


// タブ
$('#smartTab').smartTab({
  enableUrlHash: false,
  autoAdjustHeight: false,
});

