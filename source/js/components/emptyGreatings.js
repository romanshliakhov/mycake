const emptyGreatingsBg = document.querySelector('.empty');
const emptyGreatings = document.querySelector('.empty__content');
const emptyGreatingsDisableBtn = document.querySelector('.empty__close');

emptyGreatingsDisableBtn.addEventListener('click', function(btn) {
  console.log('click');

  emptyGreatings.style.display = 'none';
  emptyGreatingsBg.classList.add('hide');
})
