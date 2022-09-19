import { menuBtn, menu, disableScroll } from '../components/burger.js';

const mobileAccountNavBtns = [...document?.querySelectorAll('[data-mobile-tabs]')];

mobileAccountNavBtns.map(function(btn) {
  btn.addEventListener('click', function () {
    const tabsContent = [...document?.querySelectorAll('[tabs-content]')];
    tabsContent.map(function(i) {
      i.classList.remove('active');
    })

    let attrAccountBtn = this.getAttribute('data-mobile-tabs');
    document.querySelector(`[tabs-content="${attrAccountBtn}"]`).classList.add('active');
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
    disableScroll.classList.remove('body-scroll');
  })
})
