// const progressbar = document.querySelector('.progressbar');
let progressbar = document.querySelector('.progressbar__done');
// let progressbarWidth = document.querySelector('[data-progressbar]');

progressbar.style.opacity = 1;
progressbar.style.width = progressbar.getAttribute('data-progressbar-done') + '%';
