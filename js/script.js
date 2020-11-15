

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});







//   function loadImage (id, targetID) {
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


// document.addEventListener('DOMContentLoaded', function() { 
//     loadImage('wallpaper');
//     loadImage('pictureImage', 'picture');
// });