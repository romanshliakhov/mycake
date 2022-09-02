let sortingBtn = document.querySelector('.application__product-info');
let formParentBtn = document.querySelector('.application__product-image');
let mobileSiblingstBtn = document.querySelector('.application__filling');


let breakpointSorting = 576;


const replaceMobileMenu = (element,parentDesktop,parentMobile) => {
  let containerWidth = document.documentElement.clientWidth;
  if (containerWidth <= breakpointSorting) {
    // parentMobile.insertAdjacentElement('beforeend', element);
    parentMobile.insertAdjacentElement('afterbegin', element);
  };
  if (containerWidth > breakpointSorting) {
    parentDesktop.insertAdjacentElement('afterend', element);
  }
}

window.addEventListener('resize', () => {
  replaceMobileMenu(sortingBtn,formParentBtn,mobileSiblingstBtn);
});

window.addEventListener('DOMContentLoaded', () => {
  replaceMobileMenu(sortingBtn,formParentBtn,mobileSiblingstBtn);
});
