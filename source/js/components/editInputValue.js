let dataFormParent = document.querySelectorAll('[data-form-parent]');

dataFormParent.forEach(function(parent){
  let editBtn = parent.querySelectorAll('[data-edit]');
  let editLabels = parent.querySelectorAll('[data-form-label]');
  let editBtns = parent?.querySelector('[data-edit-btns]');

  for ( const btn of editBtn) {
    btn.addEventListener('click', function(e){
      e.preventDefault();
      parent.classList.toggle('parent-blur');

      editLabels.forEach(function( item ){
        item.classList.toggle('label-disable');
      })

      editBtns && editBtns.classList.toggle('show');
    })
  };
});







