const graphics = document.querySelector('.graphics');

function addStar(leftPct, topPct) {
  const newStarEl = document.createElement('div');
  newStarEl.classList.add('star');

  let scale = Math.random();
  if (scale < 0.2) {
    scale = 0.2;
  }

  newStarEl.setAttribute('style',
    `top:${topPct}vh;
   left:${leftPct}vw;
   transform:scale(${scale}, ${scale})`);
  graphics.prepend(newStarEl);
}

// adding stars
graphics.addEventListener('click', event => {
  const leftPct = event.clientX / window.innerWidth * 100;
  const topPct = event.clientY / window.innerHeight * 100;
  addStar(leftPct, topPct);
});

Array(100).fill(0).forEach(() => {
  const leftPct = Math.random() * 100;
  const topPct = Math.random() * 100;
  addStar(leftPct, topPct);
});

// random star fall
(function starFall() {
  const unfallenStars = Array.from(document.querySelectorAll('.star:not(.fallen)'));
  const randomIndex = Math.round(Math.random() * unfallenStars.length);
  const randomStar = unfallenStars[randomIndex];

  randomStar.classList.add('fallen');

  window.setTimeout(starFall, Math.round(Math.random() * 15000));
})();
