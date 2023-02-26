// =============================== Modals =================================
$(document).ready(function(){
  $('.modal-view-btn').on('click', function(){
    var target = $(this).attr('data-target');
    $(target).addClass('visible');
  });

  $('.mask').on('click', function(){
    $('.modal-wrap').removeClass('visible');
  });

  var modalWidth = 656;
  var modalHeight;

  setDimensions();

  function setDimensions() {
    modalHeight = $(window).innerHeight() - 120;
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     modalWidth = $(window).innerWidth() - 30;
     modalHeight = $(window).innerHeight() - 30;
    }
    $('.modal').css('max-width', modalWidth);
    $('.modal').css('max-height', modalHeight);
  }
  $('.close-btn').on('click', function(){
    $('.modal-wrap').removeClass('visible');
  });

  $('.crossBtn').on('click', function(){
    $('.modal-wrap').removeClass('visible');
  });
});
// ============================== End of Modals ===================================