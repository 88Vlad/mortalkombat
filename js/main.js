$(document).ready(function () {
  $('#app').vide({
    mp4: 'video/video.mp4',
    webm: 'video/video.webm',
    ogv: 'video/video.ogv',
    poster: 'img/cover-image'
  });

});


$(function () {
  // Инициализируем плагин fancymorph и переназначаем событие onclick
  $(".morphing").fancyMorph().off('click').on('click', function () {
    // Временный контент fancybox, можно заменить спиннером
    $("#morphing-content").html('...');
    // Запускаем fancymorph
    $(this).data('morphing').start();

    // Получаем данные AJAX запросом
    $.get('https://stackoverflow.getsandbox.com/hello', function (html) {
      $("#morphing-content").html('<div class="message"><h2>Информация</h2><p>' + html + '</p></div>');
    });
    return false;
  });
});