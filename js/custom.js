//Wow
var wow = new WOW(
  {
    boxClass:     'wow',      // анимированный элемент css class (default is wow)
    animateClass: 'animated', // анимация css класс (default is animated)
    offset:       150,          // расстояние до элемента при запуске анимации (default is 0)
    mobile:       false,       // триггерные анимации на мобильных устройствах (default is true)
    live:         true,       // воздействовать на асинхронно загруженный контент (default is true)
    scrollContainer: null // опциональный селектор контейнера прокрутки, в противном случае используйте окно
  }
);
wow.init();
