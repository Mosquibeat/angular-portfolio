let ProjectFactory = function () {
	var factory = {};

	var projectList =[
		{"id" : 1, "name" : "Portfolio Project", "image" : "http://lorempicsum.com/nemo/350/200/1", "short_description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, itaque nesciunt!."},
		{"id" : 2, "name" : "Lorem", "image" : "http://lorempicsum.com/nemo/350/200/2", "short_description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, itaque nesciunt!."},
		{"id" : 3, "name" : "Ipsum", "image" : "http://lorempicsum.com/nemo/350/200/3", "short_description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, itaque nesciunt!."},
		{"id" : 4, "name" : "Dolor", "image" : "http://lorempicsum.com/nemo/350/200/4", "short_description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, itaque nesciunt!."},
		{"id" : 5, "name" : "Si Amet", "image" : "http://lorempicsum.com/nemo/350/200/5", "short_description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, itaque nesciunt!."},
		{"id" : 6, "name" : "Tebaibi", "image" : "http://lorempicsum.com/nemo/350/200/6", "short_description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, itaque nesciunt!."}
	] ;

	factory.getList = () => {
		return projectList;
	};

  return factory;
};

export default ProjectFactory;