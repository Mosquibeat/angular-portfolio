Simple portfolio based on ['https://github.com/AngularClass/NG6-starter'](AngularClass/NG6-starter)

### Usage
- Clone or fork this repository
- Make sure you have [node.js](https://nodejs.org/) installed
- run `npm install -g gulp karma karma-cli webpack` to install global dependencies
- run `npm install` to install dependencies
- run `gulp` to fire up dev server
- open browser to [`http://localhost:3000`](http://localhost:3000)
- run `gulp webpack` to build

## File Structure
```
client
⋅⋅app/
⋅⋅⋅⋅app.js * app entry file
⋅⋅⋅⋅app.html * app template
⋅⋅⋅⋅common/ * functionality pertinent to several components propagate into this directory
⋅⋅⋅⋅components/ * where components live
⋅⋅⋅⋅⋅⋅components.js * components entry file
⋅⋅⋅⋅⋅⋅home/ * home component
⋅⋅⋅⋅⋅⋅⋅⋅home.js * home entry file (routes, configurations, and declarations occur here)
⋅⋅⋅⋅⋅⋅⋅⋅home.component.js * home "directive"
⋅⋅⋅⋅⋅⋅⋅⋅home.controller.js * home controller
⋅⋅⋅⋅⋅⋅⋅⋅home.styl * home styles
⋅⋅⋅⋅⋅⋅⋅⋅home.html * home template
⋅⋅⋅⋅⋅⋅⋅⋅home.spec.js * home specs (for entry, component, and controller)
```