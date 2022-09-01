// comments
const body = document.body;
const block = document.querySelector('.first__wrapper-right');

function setHeaderHeight() {
    let header = document.querySelector('.first__wrapper-left'),
        headerHeight = header && header.clientHeight + 'px';
    block && block.style.setProperty('--images-max-height', headerHeight)

    console.log(headerHeight);
}

window.addEventListener("DOMContentLoaded", () => {
    setHeaderHeight();
});

window.addEventListener("resize", () => {
    setHeaderHeight();
});
