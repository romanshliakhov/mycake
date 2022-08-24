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

        const filterHandler = (filterName) => {
          filterCards.forEach(el => {
            let filterButtonElement = filterParr.querySelector(`[${btns}="${el.dataset.filterProduct}"]`);
            let isEnabled = filterButtonElement.classList.contains("active");

            if (isEnabled) {
              el.classList.add('active');
            } else {
              el.classList.remove('active');
            }
          });
        };
      });
    }}
  );
}

filterInit(filterParrents, filterBtn, filterCards);
