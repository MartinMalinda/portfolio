function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const cubes = document.querySelectorAll('.cube');

cubes.forEach(cubeEl => {
  cubeEl.addEventListener('mouseenter', () => cubeEl.classList.add('active'));
  cubeEl.addEventListener('mouseleave', () => setTimeout(() => {
    cubeEl.classList.remove('active');
  }, getRandomArbitrary(50, 3000)));
});
