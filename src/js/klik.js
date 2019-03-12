/* eslint-disable */

const slide = document.querySelector('.slide-group');
const left = document.querySelector('.button-left');
const right = document.querySelector('.button-right');

slide.style.overflow = 'hidden';
left.innerHTML = "<";
right.innerHTML = ">";

let isDown = false;
let startX;
let scrollLeft;

function scroll(e) {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slide.offsetLeft;
  const walk = (x - startX) * 3;
  const result = scrollLeft - walk;
  slide.scrollLeft = result;
}

//! scroll on click and keep scrolling if the mouse is down
// buttons to scroll
function clickScroll() {
  if (this === left) {
    slide.scrollLeft += 100;
  } else {
    slide.scrollLeft -= 100;
  }
}

slide.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - slide.offsetLeft;
  scrollLeft = slide.scrollLeft;
});

slide.addEventListener('mouseleave', () => {
  isDown = false;
});

slide.addEventListener('mouseup', () => {
  isDown = false;
});

slide.addEventListener('mousemove', scroll);


left.addEventListener('click', clickScroll);
right.addEventListener('click', clickScroll);
