(function () {
  "use strict";

  var mobileMenu = function () {
    // Nav mobile
    $("#humburgerBtn").click(function () {
      $("#mobileNav").toggle(200);
    });
    $(".mobileCloser").click(function () {
      $(this).parent().hide(200);
    });
  };

  var heroSlider = function () {
    $("#hero-area > .slick-area").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      autoplay: true,
    });
  };

  var goToTop = function () {
    $(".js-gotop").on("click", function (event) {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $("html").offset().top,
        },
        500,
        "easeInOutExpo"
      );

      return false;
    });

    $(window).scroll(function () {
      var $win = $(window);
      if ($win.scrollTop() > 200) {
        $(".js-top").addClass("active");
      } else {
        $(".js-top").removeClass("active");
      }
    });
  };

  // Loading page
  var loaderPage = function () {
    $(".fh5co-loader").fadeOut("slow");
  };

  $(function () {
    mobileMenu();
    heroSlider();
    goToTop();
    loaderPage();
  });
})();
