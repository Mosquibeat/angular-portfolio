let ProjectFactory = function () {
	var factory = {};

	var projectList =[
		{"id" : 1, "title" : "Portfolio Project", "thumbnail" : "http://lorempicsum.com/up/627/356/1", "image" : "http://lorempicsum.com/up/1920/1080/1", "short_description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, itaque nesciunt!.", "url" : "dat-real"},
		{"id" : 2, "title" : "Lorem", "thumbnail" : "http://lorempicsum.com/up/627/356/2", "image" : "http://lorempicsum.com/up/1920/1080/2", "short_description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, itaque nesciunt!.", "url" : "dat-dat"},
		{"id" : 3, "title" : "Ipsum", "thumbnail" : "http://lorempicsum.com/up/627/356/3", "image" : "http://lorempicsum.com/up/1920/1080/3", "short_description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, itaque nesciunt!.", "url" : "dat-lol"},
		{"id" : 4, "title" : "Dolor", "thumbnail" : "http://lorempicsum.com/up/627/356/4", "image" : "http://lorempicsum.com/up/1920/1080/4", "short_description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, itaque nesciunt!.", "url" : "dat-oui"},
		{"id" : 5, "title" : "Si Amet", "thumbnail" : "http://lorempicsum.com/up/627/356/5", "image" : "http://lorempicsum.com/up/1920/1080/5", "short_description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, itaque nesciunt!.", "url" : "dat-dada"},
		{"id" : 6, "title" : "Tebaibi", "thumbnail" : "http://lorempicsum.com/up/627/356/6", "image" : "http://lorempicsum.com/up/1920/1080/6", "short_description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, itaque nesciunt!.", "url" : "dat-tebaibi"}
	] ;

	factory.getList = () => {
		return projectList;
	};

	factory.getItemByUrl = (url) => {
		var result = projectList.filter(function( obj ) {
		  return obj.url == url;
		});
		return result[0];
	}

  return factory;
};

export default ProjectFactory;