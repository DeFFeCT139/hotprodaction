$(document).on('click', '.one-block-foot', function () {
    $('.two-block-foot-last').removeClass('none-rit');
    $('.free-block-foot-last').removeClass('none-rit');
    $('.one-block-foot').addClass('her3');
    $('.one-block-foot-last').addClass('none-rit');
  });
  $(document).on('click', '.two-block-foot', function () {
    $('.two-block-foot-last').addClass('none-rit');
    $('.two-block-foot').addClass('her2');
    $('.free-block-foot-last').removeClass('none-rit');
    $('.one-block-foot-last').removeClass('none-rit');
  });
  $(document).on('click', '.free-block-foot', function () {
    $('.two-block-foot-last').removeClass('none-rit');
    $('.free-block-foot-last').addClass('none-rit');
    $('.free-block-foot').addClass('her1');
    $('.one-block-foot-last').removeClass('none-rit');
  });
  $(document).on('click', '.her1', function () {
    $('.free-block-foot-last').removeClass('none-rit');
    $('.free-block-foot').removeClass('her1');
  });
  $(document).on('click', '.her2', function () {
    $('.two-block-foot-last').removeClass('none-rit');
    $('.two-block-foot').removeClass('her2');
  });
  $(document).on('click', '.her3', function () {
    $('.one-block-foot-last').removeClass('none-rit');
    $('.one-block-foot').removeClass('her3');
  });