let replaceSettings = {
  beforebegin: 'beforebegin', // перед самим элементом targetElement
  afterbegin: 'afterbegin', // внутри элемента targetElement, перед его первым потомком
  beforeend: 'beforeend', //  внутри элемента targetElement, после его последнего потомка
  afterend: 'afterend', // после самого элемента targetElement
  mobile: 576,
  smallTablet: 768,
  tablet: 1024
}

let elementName = {
  sortingBtn : '.application__product-info',
  formParentBtn: '.application__product-image',
  mobileSiblingstBtn: '.application__filling',

  // -----------------------------
  sampleBtn: '.application__sample-info',
  sampleBtnDesktop: '.sample__product',
  sampleBtnMobile: '.sample__btns',

  // ---------------------------
  sampleTitle: '.sample__info-head',
  sampleDesctop: '.sample__product-image',
  sampleMobile: '.sample__filling',

  // ---------------------------
  pubtimeDate: '.application__pubtime',
  pubtimeDesctop: '.application__sample-info',
  pubtimeMobile: '.application__sample-product',

  // ---------------------------
  // applicationsSort: '.applications__search',
  // applicationsSortDesctop: '.applications__filling',
  // applicationsSortMobile: '.applications__add',

}

let items = [...document.querySelectorAll('.applications__list-item')];

const replaceElements = (elements, elementClass, desktopClass, mobileClass, mobileSetting, desktopSetting, breakpointSetting) => {
  let containerWidth = document.documentElement.clientWidth;

  elements.map(function (item) {
    const myElement = item.querySelector(elementClass);
    const myDesktop = item.querySelector(desktopClass);
    const myMobile = item.querySelector(mobileClass);

    (function() {
      if (myDesktop && myElement && myMobile) {
        containerWidth <= breakpointSetting ?
        myMobile.insertAdjacentElement(mobileSetting, myElement) :
        myDesktop.insertAdjacentElement(desktopSetting, myElement);
      }
    }());
  });
}

window.addEventListener('resize', () => {
  replaceElements(items, elementName.sortingBtn, elementName.formParentBtn, elementName.mobileSiblingstBtn, replaceSettings.afterbegin, replaceSettings.afterend, replaceSettings.mobile);
  replaceElements(items, elementName.sampleTitle, elementName.sampleDesctop, elementName.sampleMobile, replaceSettings.afterbegin, replaceSettings.afterend, replaceSettings.mobile);
  replaceElements(items, elementName.sampleBtn, elementName.sampleBtnDesktop, elementName.sampleBtnMobile, replaceSettings.afterbegin, replaceSettings.beforeend, replaceSettings.mobile);
  replaceElements(items, elementName.pubtimeDate, elementName.pubtimeDesctop, elementName.pubtimeMobile, replaceSettings.afterbegin, replaceSettings.afterbegin, replaceSettings.smallTablet);
});

window.addEventListener('DOMContentLoaded', () => {
  replaceElements(items, elementName.sortingBtn, elementName.formParentBtn, elementName.mobileSiblingstBtn, replaceSettings.afterbegin, replaceSettings.afterend, replaceSettings.mobile);
  replaceElements(items, elementName.sampleTitle, elementName.sampleDesctop, elementName.sampleMobile, replaceSettings.afterbegin, replaceSettings.afterend, replaceSettings.mobile);
  replaceElements(items, elementName.sampleBtn, elementName.sampleBtnDesktop, elementName.sampleBtnMobile, replaceSettings.afterbegin, replaceSettings.beforeend, replaceSettings.mobile);
  replaceElements(items, elementName.pubtimeDate, elementName.pubtimeDesctop, elementName.pubtimeMobile, replaceSettings.afterbegin, replaceSettings.afterbegin, replaceSettings.smallTablet);
});
