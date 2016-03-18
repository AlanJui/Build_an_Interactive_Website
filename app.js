import {bootstrap} from './lib/bootstrap.js';

$(document).ready(function () {
  alert('Document Loaded!!');

  $('.js-like').on('click', (event) => {
    event.preventDefault();
    $(this).text('Liked!');  
  });
});


