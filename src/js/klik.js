/* eslint-disable */

const slide = document.querySelector('.slide-group');
const left = document.querySelector('.button-left');
const right = document.querySelector('.button-right');

let isDown = false;
let startX;
let scrollLeft;

function scroll() {
  if (this === left) {
    console.log('left');
  } else {
    console.log('right');
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

slide.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slide.offsetLeft;
  const walk = (x - startX) * 3;
  slide.scrollLeft = scrollLeft - walk;
});

left.addEventListener('click', scroll);
right.addEventListener('click', scroll);
