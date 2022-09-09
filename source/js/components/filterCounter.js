let filterCounter = document.querySelector('.sort__filter-counter');

if (filterCounter) {
  filterCounter.innerText = document.querySelectorAll('.sort__input:checked').length;

  document.addEventListener('click', function(e){
    filterCounter.innerText= document.querySelectorAll('.sort__input:checked').length;
  });
}




