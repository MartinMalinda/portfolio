const graphics = document.querySelector('.graphics');

const config = {
  starFallTimeMax: 15000,
  minStarScale: 0.15,
  initialStarAmount: 20
};

function addStar(leftPct, topPct) {
  const newStarEl = document.createElement('div');
  newStarEl.classList.add('star');

  let scale = Math.random();
  if (scale < config.minStarScale) {
    scale = config.minStarScale;
  }

  newStarEl.style.top = `${topPct}vh`;
  newStarEl.style.left = `${leftPct}vw`;
  newStarEl.style.transform = `scale(${scale})`;
  graphics.prepend(newStarEl);
}

// adding stars
graphics.addEventListener('click', event => {
  const leftPct = event.clientX / window.innerWidth * 100;
  const topPct = event.clientY / window.innerHeight * 100;
  addStar(leftPct, topPct);
});

// initial stars
Array(config.initialStarAmount).fill(0).forEach(() => {
  const leftPct = Math.random() * 100;
  const topPct = Math.random() * 100;
  addStar(leftPct, topPct);
});

// grow trees
const trees = Array.from(document.querySelectorAll('.tree'));
trees.forEach(tree => {
  tree.addEventListener('click', event => {
    const triangle = document.createElement('span');
    tree.prepend(triangle);

    const previousTransform = tree.style.transform || "translateY(0px)";
    const extractNum = t => Number(t.split('translateY(')[1].split('px)')[0]);
    const previousTranslate = extractNum(previousTransform);
    tree.style.transform = `translateY(${previousTranslate - 7}px)`;

    event.stopPropagation();
  });
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

  window.setTimeout(starFall, Math.round(Math.random() * config.starFallTimeMax));

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
