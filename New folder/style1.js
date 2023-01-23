function Portfolio3D( element ) {
	//define a Portfolio3D object
	this.element = element;
	this.navigation = this.element.children('.cd-3d-portfolio-navigation');
	this.rowsWrapper = this.element.children('.projects');
	this.rows = this.rowsWrapper.children('.row');
	this.visibleFace = 'front';
	this.visibleRowIndex = 0;
	this.rotationValue = 0;
	//animating variables
	this.animating = false;
	this.scrolling = false;
	// bind portfolio events
	this.bindEvents();
}

if( $('.cd-3d-portfolio').length > 0 ) {
	var portfolios3D = [];
	$('.cd-3d-portfolio').each(function(){
		//create a Portfolio3D object for each .cd-3d-portfolio
		portfolios3D.push(new Portfolio3D($(this)));
	});
}
Portfolio3D.prototype.bindEvents = function() {
	var self = this;

	this.navigation.on('click', 'a:not(.selected)', function(event){
		//update visible projects when clicking on the filter
		event.preventDefault();
		if( !self.animating ) {
			self.animating = true;
			var index = $(this).parent('li').index();

			//show new projects
			self.showNewContent(index);

			//update filter selected element
			//..
		}
	});

	//...
};

Portfolio3D.prototype.showNewContent = function(index) {
	var self = this,
		direction = ( index > self.visibleRowIndex ) ? 'rightToLeft' : 'leftToRight',
		rotationParams = this.getRotationPrameters( direction ),
		newVisibleFace = rotationParams[0],
		rotationY = rotationParams[1],
		translateZ = $(window).width()/2;

	//rotate the parallelepiped
	this.setTransform(rotationY, translateZ);

	//update .row > li classes
	//...

	//update Portfolio3D properties
	//..
};