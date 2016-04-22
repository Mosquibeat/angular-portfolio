class DetailController {
  constructor(project, $stateParams) {
  	"ngInject";
    this.name = 'detail';
    this.project = project.getItemByUrl($stateParams.projectUrl);

    // Defining progressive load
   	this.progressiveLoad = function() {
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

		imgLarge.src = this.project.image; 
		imgLarge.onload = function () {
			imgLarge.classList.add('loaded');
		};

		placeholder.appendChild(imgLarge);
   	}

   	// Triggering progressive load image
   	this.progressiveLoad();
  }
}

export default DetailController;