let progressbar = document.querySelector('.progressbar__done');

if (progressbar) {
  progressbar.style.opacity = 1;
  progressbar.style.width = progressbar.getAttribute('data-progressbar-done') + '%';
}

