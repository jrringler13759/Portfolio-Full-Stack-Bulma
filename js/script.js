

$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
});







//   function loadImade (id, targetID) {
//     var el = document.getElementById(id);
//     var targetEl = targetID ? document.getElementById(targetID) : el;
//     var imageToLoad;

//     if (el.dataset.image) {
//         imageToLoad = el.dataset.image;
//     } else if (typeof el.currentSrc === 'undefined') {
//         imagetTOLoad = el.scroll;
//     } else {
//         imageToLoad = currentSrc;
//     }

//     if (imageToLoad) {
//         var img = new Image();
//         img.src = imageToLoad;
//         img.onload = function() {
//             targetEl.classList.add('is-loaded');
//         }
//     }

// }


document.addEventListener('DOMContentLoaded', function() { 
    loadImage('wallpaper');
    loadImage('pictureImage', 'picture');
});