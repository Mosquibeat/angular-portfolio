class ListController {
  constructor(project) {
	"ngInject";
    this.name = 'list';
    this.list = project.getList();
  }
}

export default ListController;
