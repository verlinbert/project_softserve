$(document).ready(function(){
  $('.slider').slick({
    dots: false,
    infinite: true,
      speed: 300,
    autoplay: true,
  autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: `<button class="slider_arr cust_prev">
                  <svg class="arrow-svg_2ub" viewBox="0 0 30 30"><defs><path d="M19.533 15l-9.1-9.45c-.577-.6-.577-1.5 0-2.1.578-.6 1.445-.6 2.023 0l10.11 10.5c.29.3.434.75.434 1.05 0 .45-.144.75-.433 1.05l-10.111 10.5c-.29.3-.578.45-1.012.45-.433 0-.722-.15-1.01-.45-.578-.6-.578-1.5 0-2.1l9.1-9.45z" id="a"></path></defs><use fill-rule="nonzero" opacity=".8" xlink:href="#a"></use></svg>
                </button>`,
    nextArrow: `<button class="slider_arr cust_next">
                  <svg class="arrow-svg_2ub" viewBox="0 0 30 30"><defs><path d="M19.533 15l-9.1-9.45c-.577-.6-.577-1.5 0-2.1.578-.6 1.445-.6 2.023 0l10.11 10.5c.29.3.434.75.434 1.05 0 .45-.144.75-.433 1.05l-10.111 10.5c-.29.3-.578.45-1.012.45-.433 0-.722-.15-1.01-.45-.578-.6-.578-1.5 0-2.1l9.1-9.45z" id="a"></path></defs><use fill-rule="nonzero" opacity=".8" xlink:href="#a"></use></svg>
                </button>`,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
