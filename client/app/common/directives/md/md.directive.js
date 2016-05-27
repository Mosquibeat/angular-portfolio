import markdown from 'markdown';


export default class mdDirective {
  constructor() {
    this.restrict = 'E';
    this.scope = {};
  }
    
  // Directive link function
  link(scope, element, attributes) {
    attributes.$observe('data', function(value){
      element.replaceWith(markdown.markdown.toHTML(value));
    });
  }
}