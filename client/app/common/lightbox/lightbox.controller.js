import PhotoSwipe from '../../../../node_modules/photoswipe/dist/photoswipe.min.js';
import PhotoSwipeUI_Default from '../../../../node_modules/photoswipe/dist/photoswipe-ui-default.min.js';

class LightboxController {
  constructor() {
    this.items = [
        {
          src: 'https://placekitten.com/600/400',
          w: 600,
          h: 400
        },
        {
          src: 'https://placekitten.com/1200/900',
          w: 1200,
          h: 900
        }
    ];

    // this.lightbox(this.items);
  }

  lightbox(items) {
    var pswpElement = document.querySelectorAll('.pswp')[0];
    // build items array

    // define options (if needed)
    var options = {
        // optionName: 'option value'
        // for example:
        index: 0 // start at first slide
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();  
  }
}

export default LightboxController;
