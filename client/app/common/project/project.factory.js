let ProjectFactory = function () {
	var factory = {};

	var projectList =[
		{"id" : 1, "title" : "Portfolio Project", "thumbnail" : "http://lorempicsum.com/up/338/192/1", "gallery" : [{"href" : "http://lorempicsum.com/up/1920/1080/1", "title" : "Test"}, {"href" : "http://lorempicsum.com/up/1920/1080/3", "title" : "Test"}, {"href" : "http://lorempicsum.com/up/1920/1080/4", "title" : "Test"}], "short_description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, itaque nesciunt!.", "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia facilis quibusdam itaque neque. Earum maiores cupiditate incidunt quibusdam, laboriosam facere. Debitis impedit ratione nihil nisi amet reprehenderit, dicta quam tempore.", "url" : "dat-real"},
		{"id" : 2, "title" : "Lorem", "thumbnail" : "http://lorempicsum.com/up/338/192/2", "gallery" : [{"href" : "http://lorempicsum.com/up/1920/1080/2", "title" : "Test"}, {"href" : "http://lorempicsum.com/up/1920/1080/3", "title" : "Test"}, {"href" : "http://lorempicsum.com/up/1920/1080/4", "title" : "Test"}], "short_description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, itaque nesciunt!.", "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, fuga. Sed rem numquam, pariatur voluptatem cumque reprehenderit necessitatibus quisquam, vitae nulla reiciendis a maxime placeat repellat beatae voluptatum fuga atque.", "url" : "dat-dat"},
		{"id" : 3, "title" : "Ipsum", "thumbnail" : "http://lorempicsum.com/up/338/192/3", "gallery" : [{"href" : "http://lorempicsum.com/up/1920/1080/3", "title" : "Test"}, {"href" : "http://lorempicsum.com/up/1920/1080/3", "title" : "Test"}, {"href" : "http://lorempicsum.com/up/1920/1080/4", "title" : "Test"}], "short_description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, itaque nesciunt!.", "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ducimus quod aliquam quaerat ut laudantium est tempora, accusamus. Optio perferendis cupiditate porro, expedita fugit nostrum eveniet nemo magnam voluptatum nisi.", "url" : "dat-lol"},
		{"id" : 4, "title" : "Dolor", "thumbnail" : "http://lorempicsum.com/up/338/192/4", "gallery" : [{"href" : "http://lorempicsum.com/up/1920/1080/4", "title" : "Test"}, {"href" : "http://lorempicsum.com/up/1920/1080/3", "title" : "Test"}, {"href" : "http://lorempicsum.com/up/1920/1080/4", "title" : "Test"}], "short_description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, itaque nesciunt!.", "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima earum, amet, totam mollitia ad nemo veritatis quibusdam architecto explicabo et tenetur maiores ipsum. Commodi aliquid molestias debitis officia repellat illum?", "url" : "dat-oui"},
		{"id" : 5, "title" : "Si Amet", "thumbnail" : "http://lorempicsum.com/up/338/192/5", "gallery" : [{"href" : "http://lorempicsum.com/up/1920/1080/5", "title" : "Test"}, {"href" : "http://lorempicsum.com/up/1920/1080/3", "title" : "Test"}, {"href" : "http://lorempicsum.com/up/1920/1080/4", "title" : "Test"}], "short_description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, itaque nesciunt!.", "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia illum fugit sequi ullam atque, necessitatibus quo numquam mollitia, nemo illo harum porro, saepe ad ipsam molestiae magni error sint nostrum!", "url" : "dat-dada"},
		{"id" : 6, "title" : "Tebaibi", "thumbnail" : "http://lorempicsum.com/up/338/192/6", "gallery" : [{"href" : "http://lorempicsum.com/up/1920/1080/6", "title" : "Test"}, {"href" : "http://lorempicsum.com/up/1920/1080/3", "title" : "Test"}, {"href" : "http://lorempicsum.com/up/1920/1080/4", "title" : "Test"}], "short_description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, itaque nesciunt!.", "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam pariatur, reprehenderit aliquid, odio perspiciatis quia incidunt asperiores nostrum quas commodi nisi aliquam soluta dolorum temporibus sunt minus sequi, iure, iusto!", "url" : "dat-tebaibi"}
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