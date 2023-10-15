const canvas = document.querySelector('.canvas');

const observer = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    canvas.classList.add('animate');
  } else {
    canvas.classList.remove('animate');
  }
});

observer.observe(canvas);
