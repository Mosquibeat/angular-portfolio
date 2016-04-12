let ProjectFactory = function () {
	var projectList =[
	{"id" : 1, "name" : "Portfolio Project"},
	{"id" : 2, "name" : "Lorem"},
	{"id" : 3, "name" : "Ipsum"},
	{"id" : 4, "name" : "Dolor"},
	{"id" : 5, "name" : "Si Amet"},
	{"id" : 6, "name" : "Tebaibi"}
] ;
  let getList = () => {
    return projectList;
  };

  return ProjectFactory;
};

export default ProjectFactory;