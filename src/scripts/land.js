const graphics = document.querySelector('.graphics');

function addStar(leftPct, topPct) {
  const newStarEl = document.createElement('div');
  newStarEl.classList.add('star');

  let scale = Math.random();
  if (scale < 0.2) {
    scale = 0.2;
  }

  newStarEl.style.top = `${topPct}vh`;
  newStarEl.style.left = `${leftPct}vw`;
  graphics.prepend(newStarEl);
}

// adding stars
graphics.addEventListener('click', event => {
  const leftPct = event.clientX / window.innerWidth * 100;
  const topPct = event.clientY / window.innerHeight * 100;
  addStar(leftPct, topPct);
});

Array(10).fill(0).forEach(() => {
  const leftPct = Math.random() * 100;
  const topPct = Math.random() * 100;
  addStar(leftPct, topPct);
});

function getLiveStars() {
  return Array.from(document.querySelectorAll('.star:not(.fallen)'));
}

// random star fall
(function starFall() {
  const liveStars = getLiveStars();
  const randomIndex = Math.round(Math.random() * liveStars.length);
  const randomStar = liveStars[randomIndex];

  if (randomStar) {
    randomStar.classList.add('fallen');
  }

  window.setTimeout(starFall, Math.round(Math.random() * 300));

})();

function getCoordinates(star) {
  return star.getBoundingClientRect();
}

function getDelta(star1, star2) {
  const { left: x1, top: y1 } = getCoordinates(star1);
  const { left: x2, top: y2 } = getCoordinates(star2);

  return { top: y2 - y1, left: x2 - x1 };
}

function moveStar(star, top, left) {
  const coordinates = getCoordinates(star);
  star.setAttribute('style', `
    left: ${coordinates.x + left}px;
    top: ${coordinates.y + top}px;
  `);
}
