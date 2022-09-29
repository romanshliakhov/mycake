let dataFormParent = document.querySelectorAll('[data-form-edit]');

dataFormParent.forEach(function(parent){
  let editBtn = parent.querySelectorAll('[data-edit]');
  let editLabels = parent.querySelectorAll('[data-form-label]');

  let editInput = parent?.querySelector('[data-edit-input]');

  for ( const btn of editBtn) {
    btn.addEventListener('click', function(e){
      e.preventDefault();

      editLabels.forEach(function( item ){
        item.classList.toggle('label-disable');
      })

      editInput && editInput.classList.toggle('hide');
    })
  };
});







