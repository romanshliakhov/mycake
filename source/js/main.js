import './_vendor';
import './_components';

let btnLinkTab = document.querySelector('[tabs-btn="samples"]');
let btnLinkTabCurrent = document.querySelector('.applications__banner-btn--samples');


const triggerClick = function(targetClick, triggerClick){
  targetClick.addEventListener('click', () => {
    triggerClick.click();
  });
}

if (btnLinkTab && btnLinkTabCurrent) {
  triggerClick(btnLinkTabCurrent,btnLinkTab);
}








