// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require_tree .


 $(document).on('turbolinks:load', function() {

      /////////// Navbar function /////////////
    let navbar = document.getElementById('nav');
    let navButton = document.getElementById('nav-ham');




    window.addEventListener("resize", function(){
      let wSize = window.innerWidth;
      if(wSize >= 768) {
        navbar.classList.remove('dropdown');
      } else if (wSize < 768  && navButton.className === 'navbar-toggle') {
        navbar.classList.add('dropdown');
      }
    });


    navButton.addEventListener("click", function(){

      navbar.classList.toggle('dropdown');
    });




    ///////////// portfolio function ///////////////
    let modalContent = document.getElementById("modal-content");
    let photoList = document.getElementsByClassName('port-row')[0];
    let mainModal = document.getElementById('modal-container');
    let nextButton = document.getElementById('port-next');
    let prevButton = document.getElementById('port-prev');
    let imageArray ;
    let currentImage = null;
    let lastImageIndex = null;


    photoList.addEventListener('click', function(event){
      currentImage = parseInt(event.target.dataset.number);
      currentClass = event.target.className;
      imageArray = document.getElementsByClassName(currentClass);


      if(event.target.parentElement.className === 'port-column') {
        modalContent.src = event.target.src;
        mainModal.style.visibility = 'visible';
      }
    });

    mainModal.addEventListener('click', function(event) {
      if(event.target.id === 'modal-container') {
        mainModal.style.visibility = 'hidden';
      }
    })


    let nextImage = function() {
      currentImage ++;

      for(let i = 0; i < imageArray.length; i++){
          if( currentImage >= imageArray.length ) {
            modalContent.src = imageArray[0].src;
            currentImage = 0;
            console.log(currentImage);
          } else if (imageArray[currentImage].dataset.number == currentImage) {
            modalContent.src = imageArray[currentImage].src;
          }
      }

    }

    let prevImage = function() {
      currentImage --;

      for(let i = 0; i < imageArray.length; i++){
        if( currentImage < 0 ) {
            modalContent.src = imageArray[imageArray.length - 1].src;
            currentImage = imageArray.length - 1;
          } else if (imageArray[currentImage].dataset.number == currentImage) {
            modalContent.src = imageArray[currentImage].src;
          }
      }
    }
    nextButton.addEventListener('click', nextImage);
    prevButton.addEventListener('click', prevImage);


///////////// Port link function /////////////////
let portLinks = document.getElementsByClassName('port-links');
let portPage = document.getElementsByClassName('port-page');
let realEstatePage = document.getElementsByClassName('real-estate-port')[0];
let headShotPage = document.getElementsByClassName('headshot-port')[0];
let landscapePage = document.getElementsByClassName('landscape-port')[0];
let cityscapePage = document.getElementsByClassName('cityscape-port')[0];

const handleClick = (e) => {
  e.preventDefault();
  const active = document.querySelector('.active');
  if(active){
    active.classList.remove('active');
  }

  switch (e.target.id) {
    case 'real-estate-link':
      realEstatePage.classList.add('active');
      break;
    case 'headshot-link':
      headShotPage.classList.add('active');
      break;
    case 'landscape-link':
      landscapePage.classList.add('active');
      break;
    case 'cityscape-link':
      cityscapePage.classList.add('active');
      break;
  }

}


for(let i = 0; i < portLinks.length; i++) {
  portLinks[i].addEventListener('click', handleClick);
}




});
