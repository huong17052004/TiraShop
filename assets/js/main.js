/*=============== SHOW MENU ===============*/

/*===== Menu Show =====*/
/* Validate if constant exists */

/*===== Hide Show =====*/
/* Validate if constant exists */

/*=============== IMAGE GALLERY ===============*/

/*=============== SWIPER CATEGORIES ===============*/

//navigation
//thể hiện một đối tượng của biến Swiper
//chỉ định phần tử mà Swiper sẽ được áp dụng
var swiperCategories = new Swiper(".categories__container", {
    spaceBetween: 24,
    //lặp lại vô hạn lần
    loop: true,
    navigation: {
      //điều hướng cho Swiper
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //thiết lập số lượng slide
  breakpoints: {
    640: {
      //Số lượng slide hiển thị trên mỗi lần cuộn.
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});


/*=============== SWIPER PRODUCTS ===============*/
var swiperProducts = new Swiper(".new__container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},

//responsive breakpoint
breakpoints: {
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  1400: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
},
});

/*=============== PRODUCTS TABS ===============*/
//lấy tất cả phần tử có thuộc tính được query
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[content]');

  //duyệt qua mỗi tab và thêm một event listener
tabs.forEach((tab) => {

  //Mỗi khi một tab được click, một hàm callback được gọi.
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabContent) => {

      //Duyệt qua tất cả các tab content và loại bỏ lớp 'active-tab' khỏi chúng.
      tabContent.classList.remove('active-tab');
    });

    //Thêm lớp 'active-tab' vào tab content mà tab được click chỉ đến.
    target.classList.add('active-tab');

    tabs.forEach((tab) => {
      tab.classList.remove('active-tab');
    });

    tab.classList.add('active-tab');
  });
});
