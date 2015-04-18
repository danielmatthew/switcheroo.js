'use strict';

  // images nodelist
  var images = document.getElementsByTagName('img');

  var imagesLength = images.length;
  // loop through images

  setInterval(swapImages, 2000);

  function swapImages() {
    for (var i = 0; i < imagesLength; i++) {
      var image = images[i];
      console.log(image);


        // Going to swap immediately for time being
        // TODO: Add timer to each image that has attribute and swap sources
        // get reference to image source
        var source = image.getAttribute('src');

        // get reference to alternate image source
        var alt = image.getAttribute('data-switch');

        // swap source and replacement strings
        if (source && alt) {
          image.setAttribute('data-switch', source);
          image.setAttribute('src', alt);
        }
    }
  }
