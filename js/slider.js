$('.program__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    centerMode: true,
    speed: 300,
    variableWidth: false,
    responsive:[
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
         }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
         }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            centerMode: false,
         }
        }
    ]
  });