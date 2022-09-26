const chat = document.querySelectorAll(".authorization__btn");

const replaceChat = () => {
  chat.forEach(function (btn) {
    btn.removeAttribute('data-path');

    btn.addEventListener("click", function (e) {
      let pageWidth = document.documentElement.clientWidth;

      if (pageWidth <= 768) {
        e.preventDefault();
        this.setAttribute('data-path', 'chat');
      }
    });
  });
};


window.addEventListener("resize", () => {
  replaceChat();
});

window.addEventListener("DOMContentLoaded", () => {
  replaceChat();
});
