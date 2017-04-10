function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

$('.cube').on('mouseenter', function(){
  $(this).addClass('active');
});

$('.cube').on('mouseleave', function(){
  setTimeout(() => {
    $(this).removeClass('active');
  }, getRandomArbitrary(50, 3000));
});