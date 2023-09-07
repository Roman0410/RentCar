$(".hero-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  cssEase: "ease-in-out",
  pauseOnHover: false,
});
$(window).on("load resize", function () {
  if ($(window).width() < 650) {
    $(".cars-list").slick({
      slidesToShow: 1,
      prevArrow: $(".cars .arrows").find(".prev"),
      nextArrow: $(".cars .arrows").find(".next"),
    });
  } else {
    $(".cars-list").slick("unslick");
  }
});

$(".mini-galerry-slider").slick({
  slidesToShow: 1,
  dots: true,
  prevArrow: $(".mini-gallery").find(".prev"),
  nextArrow: $(".mini-gallery").find(".next"),
});
$(".about-gallery-list").slick({
  slidesToShow: 4,
  prevArrow: $(".about-gallery").find(".prev"),
  nextArrow: $(".about-gallery").find(".next"),
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
