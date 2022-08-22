const filterParrents = [...document.querySelectorAll('.filter')];

let filterBtn = 'data-filter', // btn dataset
    filterCards = 'data-filter-product'; // product card

function filterInit(filterParrentItem, btns, cards) {
  filterParrentItem.map(function(filterParr) {
    if (filterParr) {
      document.addEventListener('DOMContentLoaded', () => {
        const filterBtn = filterParr.querySelectorAll(`[${btns}]`);
        const filterCards = filterParr.querySelectorAll(`[${cards}]`);

        for (const button of filterBtn) {
          button.addEventListener('click', function () {
            const filtersPath = this.getAttribute(`${btns}`);

            filterParr.querySelector(`[${btns}="${filtersPath}"]`).classList.toggle('active');
            filterHandler(filtersPath);
          });
        }

        const filterHandler = (path) => {
          filterCards.forEach(el => {el.classList.toggle('active')});
          filterParr.querySelector(`[${cards}="${path}"]`).classList.add('active');
        };
      });
    }}
  );
}

filterInit(filterParrents, filterBtn, filterCards);
