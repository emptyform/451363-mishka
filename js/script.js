//menu
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('main-nav__toggle--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.remove('main-nav__toggle--closed');
    navToggle.classList.add('main-nav__toggle--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.add('main-nav__toggle--closed');
    navToggle.classList.remove('main-nav__toggle--opened');
  }
});

//modal
var btn__order = document.querySelectorAll(".btn__order");
var popup = document.querySelector(".modal__order");
var overlay = document.querySelector(".modal__overlay");

for (var i = 0; i < btn__order.length; i++) {
  btn__order[i].addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal__order--show");
    overlay.classList.add("modal__overlay--show");
  });

  overlay.addEventListener("click", function (event) {
    popup.classList.remove("modal__order--show");
    overlay.classList.remove("modal__overlay--show");
  });

  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("modal__order--show")) {
        popup.classList.remove("modal__order--show");
        overlay.classList.remove("modal__overlay--show");
      }
    }
  });
}

//map
ymaps.ready(function () {
    var myMap = new ymaps.Map("map", {
            center: [59.93863106, 30.32305450],
            zoom: 16
        }, {
            searchControlProvider: "yandex#search"
        }),
        myPlacemark = new ymaps.Placemark([59.93863106, 30.32305450], {
            hintContent: "Mishka",
            balloonContent: "Mishka Shop"
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/icon-map-pin.svg',
            iconImageSize: [67, 100],
            iconImageOffset: [-40, -100]
        });
    myMap.geoObjects.add(myPlacemark);
});
