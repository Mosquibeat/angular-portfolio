import $ from "jquery";
import swipebox from '../../../../node_modules/swipebox/src/js/jquery.swipebox';


class DetailController {
  constructor(project, $stateParams) {
  	"ngInject";
    this.name = 'detail';
    this.project = project.getItemByUrl($stateParams.projectUrl);
		this.progressiveLoad();
		this.lightbox(this.project.gallery);
  }

	// Defining progressive load
	progressiveLoad() {
		var placeholder = document.querySelector('.progressive-image'),
		small = placeholder.querySelector('.img-small')

		var img = new Image();
		img.src = this.project.thumbnail;
		img.onload = function () {
			var ratio = (this.height / this.width);
			var divWidth = placeholder.offsetWidth;
			placeholder.style.height = ((placeholder.offsetWidth * ratio) + "px");
			small.classList.add('loaded');
		};

		var imgLarge = new Image();

		imgLarge.src = this.project.gallery[0].href; 
		imgLarge.onload = function () {
			imgLarge.classList.add('loaded');
		};

		placeholder.appendChild(imgLarge);
	}

	// Lightbox generator
	lightbox(gallery) {
		$( '#gallery' ).click( function( e ) {
			e.preventDefault();
			$.swipebox(
				gallery,
				{
					useSVG : false
				}
			);
		});
	}
}

export default DetailController;