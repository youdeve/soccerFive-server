require('materialize-css');
require('../sass/app.sass');

const imagesContext = require.context('../images', true, /\.(png|jpg|jpeg|gif|ico|svg|webp)$/);
imagesContext.keys().forEach(imagesContext);

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded...');
  M.Collapsible.init(document.querySelectorAll('.collapsible'));
  M.Sidenav.init(document.querySelectorAll('.sidenav'));
  M.FormSelect.init(document.querySelectorAll('select'));
  M.Modal.init(document.querySelectorAll('.modal'));
  M.Tooltip.init(document.querySelectorAll('.tooltipped'));
  M.Parallax.init(document.querySelectorAll('.parallax'));
});
