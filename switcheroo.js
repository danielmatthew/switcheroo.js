'use strict';

function Switcheroo(options) {
  // options
  this._optionsAttr = options.attr || 'data-switcheroo';
  this._optionsInterval = options.interval || 1000;

  // images nodelist
  this._images = document.getElementsByTagName('img');

  // call to create
  document.addEventListener('DOMContentLoaded', this._create.bind(this), false);
}

Switcheroo.prototype._create = function() {

}

Switcheroo.prototype._destroy = function() {

}

Switcheroo.prototype._update = function () {
  // cache image nodelist length
  var imagesLength = this._images.length;

  // loop through images
  for (var i = 0; i < imagesLength; i++) {
    var image = this._images[i];

    if (image.hasAttribute(this._imgAttr) || image.hasAttribute(this._optionsAttr)) {
      // Add timer to each image that has attribute and swap sources
    }
}

Switcheroo.prototype._swap = function(imageNode) {
  // get image source
  var source = imageNode.getAttribute(this._imgAttr) || imageNode.getAttribute(this._optionsAttr);

  // swap source and replacement strings
  if (source) {
    imageNode.setAttribute('src', source);
  }
}
