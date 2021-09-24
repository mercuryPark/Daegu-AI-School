let btnModal = document.querySelector('.btn-modal');
let modal = document.querySelector('.modal');
let btnClose = document.querySelector('.modal .btn-close');

btnModal.addEventListener('click', function(){
  modal.classList.add('active');
})

btnClose.addEventListener('click', function() {
  modal.classList.remove('active');
})

modal.addEventListener('click', function(e) {
  let target = e.target;
  let isLayer = target.classList.contains('modal-layer');

  if(isLayer) {
    modal.classList.remove('active');
  }
})







