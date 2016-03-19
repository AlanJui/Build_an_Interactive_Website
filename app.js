import {bootstrap} from './lib/bootstrap.js';

$(document).ready(function () {
  // alert('Document Loaded!!');

  $('.js-like').on('click', function(event) {
    // console.log('.js-like is click');
    
    event.preventDefault();
    
    // $(this)
    //   .text('Liked!')
    //   .addClass('is-liked');
    
    $(this)
      .text('Liked')  
      .closest('.news-item')
      .addClass('is-liked');
  });

  $('.js-add-link').on('click', function(event) {
    event.preventDefault();
    
    $('.js-form').toggleClass('is-visible');
  });
});


