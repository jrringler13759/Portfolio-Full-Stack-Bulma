
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
//     document.getElementById("header").style.height = "10%";
//     document.getElementById("brandName").style.marginTop = "10px";
//     document.getElementById("header").style.marginTop = "-10px";

//   } else {
//     document.getElementById("header").style.margin = "0 auto";

//   }
// }



function myFunction() {
    var x = document.getElementById("navItems");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }




  function loadImade (id, targetID) {
    var el = document.getElementById(id);
    var targetEl = targetID ? document.getElementById(targetID) : el;
    var imageToLoad;

    if (el.dataset.image) {
        imageToLoad = el.dataset.image;
    } else if (typeof el.currentSrc === 'undefined') {
        imagetTOLoad = el.scroll;
    } else {
        imageToLoad = currentSrc;
    }

    if (imageToLoad) {
        var img = new Image();
        img.src = imageToLoad;
        img.onload = function() {
            targetEl.classList.add('is-loaded');
        }
    }

}


document.addEventListener('DOMContentLoaded', function() { 
    loadImage('wallpaper');
    loadImage('pictureImage', 'picture');
});