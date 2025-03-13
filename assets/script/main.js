// ハンバーガーメニュー
$(function () {
  var hamburger = $('.hamburger_menu');
  var hamburgerButton = $('.hamburger_button');
  var menuLinks = $('.hamburger_menu a');

  // ハンバーガーボタンのクリックでメニューの表示/非表示を切り替え
  hamburgerButton.on('click', function () {
    hamburger.toggleClass('hamburger_menu-active');
  });

  // リンクをクリックしたらメニューを閉じる
  menuLinks.on('click', function () {
    hamburger.removeClass('hamburger_menu-active');
  });

  // ウィンドウサイズ変更時にメニューを閉じる
  $(window).on('resize', function () {
    hamburger.removeClass('hamburger_menu-active');
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
// タブの切り替え
document.querySelectorAll('.nav-link').forEach(function (tabButton) {
  tabButton.addEventListener('click', function () {
    // アクティブなタブリンクを変更
    document.querySelectorAll('.nav-link').forEach(function (btn) {
      btn.classList.remove('active');
    });
    tabButton.classList.add('active');

    // 対応するタブのコンテンツを表示
    const targetTab = tabButton.getAttribute('data-target');
    document.querySelectorAll('.tab-pane').forEach(function (pane) {
      pane.classList.remove('active');
    });
    document.querySelector('.' + targetTab).classList.add('active');
  });
});


