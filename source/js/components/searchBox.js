const search = document.querySelectorAll('.search');
const searchBtn = document.querySelectorAll('.search__btn');
const searchResult = document.querySelectorAll('.search__result');
const searchCancel = document.querySelectorAll('.search__result-cancel');

search.forEach((item) => {
  item.addEventListener('click', function (e) {
    e.stopPropagation();

    item.classList.add('active');

    if (item.classList.contains('active')) {
      searchBtn.forEach((searchClick) => {
        searchClick.addEventListener('click', function (e) {
          e.stopPropagation();

          console.log('here');

          searchResult.classList.add('active');
        })
      })
    }
  });
})




