function snackBarFunc() {
  var snackbar = document.querySelector("#snackbar")
  snackbar.classList.add('show');

  setTimeout(function() {
snackbar.classList.remove('show');
  }, 3500);
}





