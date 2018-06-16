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

    window.addEventListener("scroll", function(){
       let st = window.pageYOffset || document.documentElement.scrollTop;
       if (st > 20){
           navbar.style.backgroundColor = "rgba(0,0,0, 0.8)";
       } else if (st < 20) {
          navbar.style.backgroundColor = "transparent";
       }
    }, false);

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





});
