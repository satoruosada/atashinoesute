"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var navPos = jQuery("#global-nav").offset().top; // グローバルメニューの位置

var navHeight = jQuery("#global-nav").outerHeight(); // グローバルメニューの高さ

jQuery(window).on("scroll", function () {
  if (jQuery(this).scrollTop() > navPos) {
    jQuery("body").css("padding-top", navHeight);
    jQuery("#global-nav").addClass("m_fixed");
  } else {
    jQuery("body").css("padding-top", 0);
    jQuery("#global-nav").removeClass("m_fixed");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  var main = new Main();
});

var Main = /*#__PURE__*/function () {
  function Main() {
    _classCallCheck(this, Main);

    this._init();
  }

  _createClass(Main, [{
    key: "_init",
    value: function _init() {
      new MobileMenu();
    }
  }, {
    key: "_scrollInit",
    value: function _scrollInit() {
      this.observers = new ScrollObserver(".cover-slide", this._inviewAnimation);
    }
  }]);

  return Main;
}(); // スクロール


var pagetopBtn = $(".footer__scroll");
pagetopBtn.hide();
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    pagetopBtn.fadeIn();
  } else {
    pagetopBtn.fadeOut();
  }
});
$(window).scroll(function () {
  var height = $(document).height();
  var position = $(window).height() + $(window).scrollTop();
  var footer = $("footer").outerHeight();

  if (height - position < footer) {
    pagetopBtn.css({
      bottom: 250
    });
  } else {
    pagetopBtn.css({
      position: "fixed",
      bottom: 10
    });
  }
});
pagetopBtn.click(function () {
  $("body,html").animate({
    scrollTop: 0
  }, 500);
  return false;
}); //アコーディオンをクリックした時の動作

$(".title").on("click", function () {
  //タイトル要素をクリックしたら
  var findElm = $(this).next(".box"); //直後のアコーディオンを行うエリアを取得し

  $(findElm).slideToggle(); //アコーディオンの上下動作

  if ($(this).hasClass("close")) {
    //タイトル要素にクラス名closeがあれば
    $(this).removeClass("close"); //クラス名を除去し
  } else {
    //それ以外は
    $(this).addClass("close"); //クラス名closeを付与
  }
}); //ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除

$(window).on("load", function () {
  $(".accordion-area li:first-of-type section").addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加

  $(".open").each(function (index, element) {
    //openクラスを取得
    var Title = $(element).children(".title"); //openクラスの子要素のtitleクラスを取得

    $(Title).addClass("close"); //タイトルにクラス名closeを付与し

    var Box = $(element).children(".box"); //openクラスの子要素boxクラスを取得

    $(Box).slideDown(500); //アコーディオンを開く
  });
}); // aタグスクロール

jQuery(function () {
  jQuery('a[href^="#"]').click(function () {
    var speed = 500;
    var href = jQuery(this).attr("href");
    var target = jQuery(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    jQuery("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});
//# sourceMappingURL=main.js.map
