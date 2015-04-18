'use strict';


function Switcheroo(options) {
  // options
  this._optionsAttr = options.attr || 'data-switcheroo';
  this._optionsInterval = options.interval || 1000;
  this._optionsCallback = options.callback || null;

  // images nodelist
  this._images = document.getElementsByTagName('img');

  // call to create
  document.addEventListener('DOMContentLoaded', this._create.bind(this), false);
}

Switcheroo.prototype._create = function() {
  console.log('Hello');
  requestAnimationFrame(this._update.bind(this));
};

Switcheroo.prototype._destroy = function() {

};

Switcheroo.prototype._update = function () {
  // cache image nodelist length
  var imagesLength = this._images.length;

  // loop through images
  for (var i = 0; i < imagesLength; i++) {
    var image = this._images[i];

    // check if image has attribute
    if (image.hasAttribute(this._imgAttr) || image.hasAttribute(this._optionsAttr)) {
      // Going to swap immediately for time being
      // TODO: Add timer to each image that has attribute and swap sources
      this._swap(image);
    }
  }
};

Switcheroo.prototype._swap = function(imageNode) {
  // get image source
  // var source = imageNode.getAttribute(this._imgAttr) || imageNode.getAttribute(this._optionsAttr);


  // get reference to image source
  var source = imageNode.getAttribute('src');

  // get reference to alternate image source
  var alt = imageNode.getAttribute('data-switch');

  // swap source and replacement strings
  if (source && alt) {
    imageNode.setAttribute('data-switch', source);
    imageNode.setAttribute('src', alt);

    if (typeof this._optionsCallback === 'function') {
      this._optionsCallback.call(imageNode);
    }
  }
};
