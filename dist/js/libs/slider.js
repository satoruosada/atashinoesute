"use strict";

$('.slider').slick({
  autoplay: true,
  //自動的に動き出すか。初期値はfalse。
  infinite: true,
  //スライドをループさせるかどうか。初期値はtrue。
  speed: 500,
  //スライドのスピード。初期値は300。
  slidesToShow: 3,
  //スライドを画面に3枚見せる
  slidesToScroll: 1,
  //1回のスクロールで1枚の写真を移動して見せる
  autoplaySpeed: 1000,
  prevArrow: '<div class="slick-prev"></div>',
  //矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',
  //矢印部分NextのHTMLを変更
  centerMode: true,
  //要素を中央ぞろえにする
  variableWidth: true,
  //幅の違う画像の高さを揃えて表示
  dots: false,
  //下部ドットナビゲーションの表示
  responsive: [{
    breakpoint: 600,
    //モニターの横幅が769px以下の見せ方
    settings: {
      slidesToShow: 2,
      //スライドを画面に2枚見せる
      slidesToScroll: 1 //1回のスクロールで2枚の写真を移動して見せる

    }
  }]
});
//# sourceMappingURL=slider.js.map
