const emptyGreatingsBg = document.querySelector('.empty');
const emptyGreatings = document.querySelector('.empty__content');
const emptyGreatingsDisableBtn = document.querySelector('.empty__close');


if(emptyGreatingsDisableBtn) {
  emptyGreatingsDisableBtn.addEventListener('click', function(btn) {
    emptyGreatings.style.display = 'none';
    emptyGreatingsBg.classList.add('hide');
  })
}

