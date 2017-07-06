document.addEventListener('DOMContentLoaded', function(){

  var signIn = document.querySelector('.signin');
  var modalSite = document.querySelector('.modal');
  var closePage = document.querySelector('.close');
  var submitButton = document.querySelector('.submit');
  var inputArea = document.querySelectorAll('input');

  signIn.addEventListener('click', function(e) {
    modalSite.style.display = 'block';
  });

  closePage.addEventListener('click', function(e) {
    modalSite.style.display = 'none';
  });

  submitButton.addEventListener('click', function(e) {
    inputArea[0].className = 'error';
    inputArea[1].className = 'error';
  });

  inputArea[0].addEventListener('click', function(e) {
    this.className = null;
  });

  inputArea[1].addEventListener('click', function(e){
    this.className = null;
  });

  modalSite.addEventListener('click', function(e) {
    modalSite.style.display = 'none';
  })

});
