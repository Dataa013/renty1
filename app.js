$('.pop__items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    vertical: false,
});

// questions

const questionItem = document.querySelectorAll('.question__item');


questionItem.forEach(function (question) {

    const btn = question.querySelector('.question-btn');

    btn.addEventListener('click', function () {
        questionItem.forEach(function (item) {
            if (item !== question) {
                item.classList.remove('show-text');
            }

        });
        question.classList.toggle('show-text');
    });
});


const Burger = document.querySelector('.header__burger');
const secondList = document.querySelector('.second__list');
const menuList = document.querySelector('.menu__list');
const Menu = document.querySelector('.menu');
const List = document.querySelector('.menu__list');
const sList = document.querySelector('.second__list');
const Logo = document.querySelector('.menu__logo');
const bg = document.querySelector('.menu-bg');
const body = document.querySelector('body');


Burger.addEventListener('click', function () {
    secondList.classList.toggle('active');
    menuList.classList.toggle('active');
    Menu.classList.toggle('active');
    List.classList.toggle('active');
    Logo.classList.toggle('active');
    sList.classList.toggle('active');
    bg.classList.toggle('active');
});


// const header = document.querySelector('.header');

// window.addEventListener('scroll', function () {
//     const scrollHeight = window.pageYOffset;
//     const headerHeight = header.getBoundingClientRect().height;

//     if (scrollHeight > headerHeight) {
//         header.classList.add('fixed');
//     } else {
//         header.classList.remove('fixed');
//     }

  
// });



let header = $('.header'),
    headerH = header.innerHeight(),
    scrollOffset = $(window).scrollTop();

// fixed header

checkScroll(scrollOffset)

$(window).on('scroll',function(){
    scrollOffset = $(window).scrollTop();
    checkScroll(scrollOffset)
});

function checkScroll(scrollOffset){
    if(scrollOffset >= headerH){
        header.addClass('fixed');
    } else {
        header.removeClass('fixed');
    }
}

$('.menu__link').click(function(event){
    event.preventDefault();

    $('.m-menu').removeClass('active');
    $('.header__burger').removeClass('active');
    $('body').removeClass('no-scroll');

    let $this = $(this),
        blockId = $this.data('scroll');
        blockOffset = $(blockId).offset().top - headerH;
    $('html, body').animate({
        scrollTop: blockOffset
    },0)
})

$('.header__burger').click(function(){
    $(this).toggleClass('active');
    $('.m-menu').toggleClass('active');
    $('body').toggleClass('no-scroll');
});

// numbers

const items = [...document.querySelectorAll('.intro_numbers-title')];

const updateCount = (el) => {
  const value = parseInt(el.dataset.value);
  const increment = Math.ceil(value / 1000);
  // const increment = 1;
  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;

    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }

    el.textContent = `${initialValue}+`;
  }, 15);
  // console.log(increaseCount);
};

items.forEach((item) => {
  updateCount(item);
});


