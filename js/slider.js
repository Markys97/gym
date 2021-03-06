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
            slidesToScroll: 2,
         }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
         }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
         }
        }
    ]
  });

  $('.community__slider').slick({
    infinite: true,
    slidesToShow:2,
    slidesToScroll: 3,
    centerMode: true,
    speed: 300,
    variableWidth: false,
    responsive:[
      {
        breakpoint: 981,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
       }
      },
      {
        breakpoint: 888,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
       }
      },
  ]

  });