const deleteItems = [...document?.querySelectorAll('[data-delete-item]')];
const deleteItemsAlert = document.querySelector('[data-delete-alert]');


deleteItems.map(function(item){
  item.querySelector('[data-delete-btn]').addEventListener('click', function() {
    item.remove();

    deleteItemsAlert.classList.add('show');
  })
});
