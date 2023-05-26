document.addEventListener('DOMContentLoaded', (e) => {
    document.getElementById('open-search-form').addEventListener('click', (e) => {
      document.getElementById('search-form').classList.add('search-form--open')
    });
    document.getElementById('search-form-close').addEventListener('click', (e) => {
      document.getElementById('search-form').classList.remove('search-form--open')
    });
    document.getElementById('search-form').addEventListener('submit', (e) => {
      e.preventDefault()
    })
})

document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
    new SimpleBar(dropdown, {
    autoHide: false,
    scrollbarMaxSize: 28,
  })
})
  
  
const btns = document.querySelectorAll(".header__item-btn");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";


btns.forEach(item => {
item.addEventListener("click", function() {
    let DropThis = this.parentElement.querySelector(".dropdown");

    dropdowns.forEach(el => {
    if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
    }
    });

    btns.forEach(el => {
    if (el != this) {
        el.classList.remove(activeClassbtns)
    }
    });

    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
    
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.header__item')) {
       dropdowns.forEach(el => {
        el.classList.remove(activeClassdropdowns)
    });

    btns.forEach(el => {
        el.classList.remove(activeClassbtns)
    }); 
      }
    })
})
})


const swiper = new Swiper('.swiper-1', {

    loop: true,
  
    autoplay: {
        delay: 6000,
        stopOnLastSlide: false
    }
     
});



const element = document.querySelector('.js-choice');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: ""
});

let ariaLabel = element.getAttribute('aria-label');
element.closest('.choices').setAttribute('aria-label', ariaLabel);



const slider = document.querySelector('.swiper-2');

let mySwiper = new Swiper(slider, {
  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      pagination: {
        clickable: true,
        
        el: '.swiper-pagination',
        type: 'fraction',
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
        },

        641: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 37,
        },
        
        1024: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 37,
        },
        
        1700: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50,
        }
      }
});


new Accordion('.accordion-container', {
    openOnInit: [0],
    collapse: false,
});


let tabsBtn = document.querySelectorAll('.tabs-menu__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
 
    tabsBtn.forEach(function(btn){ btn.classList.remove('tabs-menu__btn--active')});
    e.currentTarget.classList.add('tabs-menu__btn--active');
 
    tabsItem.forEach(function(element){ element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});


const sliderSecond = document.querySelector('.events__swiper-3');

let mySwiperSecond = new Swiper(sliderSecond, {
  
    Infinity: false,

    breakpoints: {
      320: {
        pagination: {
          el: '.events__swiper-pagination',
          type: 'bullets',
        },
        
        slidesPerView: 1,
      },

      768: {
        pagination: {
          el: '.events__swiper-pagination',
          type: 'bullets',
        },
        
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },

      1024: {
        pagination: {
          el: '.events__swiper-pagination',
          type: 'bullets',
        },
        
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 25,
      },

      1201: {
        navigation: {
          nextEl: '.events__next-svg',
          prevEl: '.events__svg',
        },
  
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 50,
      },
 
    },  
});

tippy('.tooltip-1', {
  content: 'Пример современных тенденций — современная методология разработки',
  trigger: 'click',
  hideOnClick: true,
  theme: 'tomato',
  maxWidth: 280,
});

tippy('.tooltip-2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  trigger: 'click',
  hideOnClick: true,
  theme: 'tomato',
  maxWidth: 270,
});

tippy('.tooltip-3', {
  content: 'В стремлении повысить качество',
  trigger: 'click',
  hideOnClick: true,
  theme: 'tomato',
  maxWidth: 270,
});

const sliderThree = document.querySelector('.swiper-4');

let mysliderThree = new Swiper(sliderThree, {
  
    Infinity: false,

    navigation: {
        nextEl: '.projects__btns-next',
        prevEl: '.projects__btns-perv',
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
        },

        640: {
          slidesPerView: 1,
        },

        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 35,
        },

        1024: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 50,
        },

        1400: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50,
        },
      },  
});


ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map-1", {
        center: [55.75, 37.60],
        zoom: 14,
        controls: ['zoomControl'], 
        autoFitToViewport: 'always'
    },
    
    {suppressMapOpenBlock: true});

var myPlacemark = new ymaps.Placemark([55.75, 37.60], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/Subtract.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-3, -42]
});



myMap.geoObjects.add(myPlacemark);

myMap.behaviors.disable('scrollZoom');

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  myMap.behaviors.disable('drag');
}
};

// modal-1//

document.getElementById("open-modal-1").addEventListener('click', function() {
  document.getElementById("modal-1").classList.add("open")
  document.body.classList.add("disable-scroll")
})

document.getElementById("close-modal-1").addEventListener('click', function() {
  document.getElementById("modal-1").classList.remove("open")
  document.body.classList.remove("disable-scroll")
})


window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("modal-1").classList.remove("open")
      document.body.classList.remove("disable-scroll")
  }
});


document.querySelector("#modal-1 .modal__box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("modal-1").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
  document.body.classList.remove("disable-scroll");
});

// modal-2//

document.getElementById("open-modal-2").addEventListener('click', function() {
  document.getElementById("modal-2").classList.add("open")
  document.body.classList.add("disable-scroll")
})

document.getElementById("close-modal-2").addEventListener('click', function() {
  document.getElementById("modal-2").classList.remove("open")
  document.body.classList.remove("disable-scroll")
})


window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("modal-2").classList.remove("open")
      document.body.classList.remove("disable-scroll")
  }
});


document.querySelector("#modal-2 .modal__box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("modal-2").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
  document.body.classList.remove("disable-scroll");
});

// modal-3//

document.getElementById("open-modal-3").addEventListener('click', function() {
  document.getElementById("modal-3").classList.add("open")
  document.body.classList.add("disable-scroll")
})

document.getElementById("close-modal-3").addEventListener('click', function() {
  document.getElementById("modal-3").classList.remove("open")
  document.body.classList.remove("disable-scroll")
})


window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("modal-3").classList.remove("open")
      document.body.classList.remove("disable-scroll")
  }
});


document.querySelector("#modal-3 .modal__box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("modal-3").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
  document.body.classList.remove("disable-scroll");
});

// modal-4//

document.getElementById("open-modal-4").addEventListener('click', function() {
  document.getElementById("modal-4").classList.add("open")
  document.body.classList.add("disable-scroll")
})

document.getElementById("close-modal-4").addEventListener('click', function() {
  document.getElementById("modal-4").classList.remove("open")
  document.body.classList.remove("disable-scroll")
})


window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("modal-4").classList.remove("open")
      document.body.classList.remove("disable-scroll")
  }
});


document.querySelector("#modal-4 .modal__box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("modal-4").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
  document.body.classList.remove("disable-scroll");
});

// modal-5//

document.getElementById("open-modal-5").addEventListener('click', function() {
  document.getElementById("modal-5").classList.add("open")
  document.body.classList.add("disable-scroll")
})

document.getElementById("close-modal-5").addEventListener('click', function() {
  document.getElementById("modal-5").classList.remove("open")
  document.body.classList.add("disable-scroll")
})


window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("modal-5").classList.remove("open")
      document.body.classList.add("disable-scroll")
  }
});


document.querySelector("#modal-5 .modal__box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("modal-5").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
  document.body.classList.remove("disable-scroll");
});

// modal-6//

document.getElementById("open-modal-6").addEventListener('click', function() {
  document.getElementById("modal-6").classList.add("open")
  document.body.classList.add("disable-scroll")
})

document.getElementById("close-modal-6").addEventListener('click', function() {
  document.getElementById("modal-6").classList.remove("open")
  document.body.classList.add("disable-scroll")
})


window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("modal-6").classList.remove("open")
      document.body.classList.add("disable-scroll")
  }
});


document.querySelector("#modal-6 .modal__box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("modal-6").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
  document.body.classList.add("disable-scroll");
});


const form = document.querySelector('.form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);


const validation = new JustValidate('.form');

validation
  .addField('.form__username', [
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Минимальная длина имени 2 символа',
    },
    {
      rule: 'maxLength',
      value: 25,
      errorMessage: 'Максимальная длина имени 25 символов',
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введите имя'
    },
    {
      rule: 'customRegexp',
      value: /[а-яa-z]/gi,
      errorMessage: 'Недопустимый формат'
    },
  ])
  
  .addField('.form__tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введите телефон',
    },
    {
      rule: 'function',
      validator: function() {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Введите корректный телефон',
    },
  ]).onSuccess((event) => {
    console.log('Validation passes and form submitted', event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();
  });


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('burger').addEventListener('click', function() {
    document.querySelector('header').classList.toggle('open')
  })
});

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.querySelector('header').classList.remove('open')
  }
});

document.getElementById('burger').addEventListener('click', event => {
  event._isClickWithInMenu = true;
});

document.getElementById('burger-menu').addEventListener('click', event => {
  event._isClickWithInMenu = false;
});

document.addEventListener('click', event => {
  if (event._isClickWithInMenu) return;
  document.querySelector('header').classList.remove('open')
});



