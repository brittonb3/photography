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

   let navHam = document.getElementById('nav-ham');
   let navCol = document.getElementById('nav-collapsed');
   navHam.addEventListener('click', function(e) {
     this.classList.toggle('close');
     navCol.classList.toggle('open');
   })


   window.addEventListener("resize", function(event) {
         if(window.innerWidth > 768 ) {
           navCol.classList.remove('collapsed');
         } else if (window.innerWidth < 768) {
           navCol.classList.add('collapsed');
         }
     });

});
