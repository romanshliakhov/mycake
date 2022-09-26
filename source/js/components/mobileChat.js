const chat = document.querySelectorAll('.authorization__btn');
// let pageWidth = document.documentElement.scrollWidth;
let pageWidth = document.documentElement.clientWidth;

// let replaceSettings = {
//   smallTablet: 768
// }

const replaceChat = (breakpointSetting) => {
  let pageWidth = document.documentElement.scrollWidth;

  chat.forEach(function (btn) {
    btn.addEventListener('click', (e) => {
      if (pageWidth >= '768px') {
        e.preventDefault();

        console.log('mobile');
      } else {
        e.preventDefault();
        console.log('desctop');
      }
    })
  })
}

replaceChat();

//   (function() {
//     if (chat) {
//       pageWidth <= breakpointSetting ?
//       myMobile.insertAdjacentElement(mobileSetting, myElement) :
//       myDesktop.insertAdjacentElement(desktopSetting, myElement);
//     }
//   }());
// }




// window.addEventListener('resize', () => {
//   replaceChat(replaceSettings.mobile);
// });

// window.addEventListener('DOMContentLoaded', () => {
//   replaceChat(replaceSettings.mobile);
// });
