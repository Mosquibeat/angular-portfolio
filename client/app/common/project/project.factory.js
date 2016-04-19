let ProjectFactory = function () {
	var factory = {};

	var projectList =[
		{"id" : 1, "title" : "Portfolio Project", "image" : "http://lorempicsum.com/up/627/300/1", "short_description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, itaque nesciunt!."},
		{"id" : 2, "title" : "Lorem", "image" : "http://lorempicsum.com/up/627/300/2", "short_description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, itaque nesciunt!."},
		{"id" : 3, "title" : "Ipsum", "image" : "http://lorempicsum.com/up/627/300/3", "short_description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, itaque nesciunt!."},
		{"id" : 4, "title" : "Dolor", "image" : "http://lorempicsum.com/up/627/300/4", "short_description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, itaque nesciunt!."},
		{"id" : 5, "title" : "Si Amet", "image" : "http://lorempicsum.com/up/627/300/5", "short_description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, itaque nesciunt!."},
		{"id" : 6, "title" : "Tebaibi", "image" : "http://lorempicsum.com/up/627/300/6", "short_description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, itaque nesciunt!."}
	] ;

	factory.getList = () => {
		return projectList;
	};

  return factory;
};

export default ProjectFactory;