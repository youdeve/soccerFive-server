require('materialize-css');
require('../sass/app.sass');

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded...');
  M.Collapsible.init(document.querySelectorAll('.collapsible'));
  M.Sidenav.init(document.querySelectorAll('.sidenav'));
  M.FormSelect.init(document.querySelectorAll('select'));
  M.Modal.init(document.querySelectorAll('.modal'));
  M.Tooltip.init(document.querySelectorAll('.tooltipped'));
  M.Parallax.init(document.querySelectorAll('.parallax'));
});

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');
