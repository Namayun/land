const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const data = [{
    name: 'Бургеры',
    img: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/black_and_blue_burger_95881_16x9.jpg'
  },
  {
    name: 'pizzas',
    img: 'https://www.garciadepou.com/blog/wp-content/uploads/2016/08/pizza.jpg'
  },
  {
    name: 'drinks',
    img: 'https://c4.wallpaperflare.com/wallpaper/97/512/27/a-glass-of-beer-wallpaper-preview.jpg'
  },
  {
    name: 'COCKTAILS',
    img: 'https://www.tastingtable.com/img/gallery/11-cocktails-to-try-if-you-like-drinking-gin/l-intro-1659025591.jpg'
  }
]


const swiperFunc = (dataFood) => {
  const sliderWrap = document.querySelector('.swiper__mySwiper')
  dataFood.forEach(el => {
    const slide = document.createElement('div')
    slide.className = 'swiper-slide'
    slide.style.backgroundImage = `url('${el.img}')`
    sliderWrap.append(slide)


  })
}
swiperFunc(data)

const swiperCover = new Swiper(".swiper__cover", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false

  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const dataCover = [{
    img: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chan-walrus-941861.jpg&fm=jpg'
  },
  {
    img: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/142467830/original/1d3a089a3f8abbe617b52c05c4031dbb3a722f7d/create-high-quality-hotel-speciality-restaurant.jpg'
  },
  {
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80'
  },
  {
    img: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg'
  }
]

const swiperCoverFunc = (swiper) => {
  const slideCover = document.querySelector('.swiper__cover__wrapper')
  swiper.forEach(el => {
    const slide = document.createElement('div')
    slide.className = 'swiper-slide'
    slide.style.backgroundImage = `url('${el.img}')`
    slideCover.append(slide)
  })
}


swiperCoverFunc(dataCover)