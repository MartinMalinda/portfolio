$('.cube').on('mouseenter', function(){
  $(this).addClass('active');
});

$('.cube').on('mouseleave', function(){
  setTimeout(() => {
    $(this).removeClass('active');
  }, 2000);
});