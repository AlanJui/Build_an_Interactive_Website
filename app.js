import {bootstrap} from './lib/bootstrap.js';

$(document).ready(function () {
  // alert('Document Loaded!!');

  //------------------------------------------------
  // Like
  //------------------------------------------------
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

  //------------------------------------------------
  // Add Link
  //------------------------------------------------
  $('.js-add-link').on('click', function(event) {
    event.preventDefault();
    
    $('.js-form').toggleClass('is-visible');
  });
  
  //------------------------------------------------
  // Display Modal Dialog Box
  //------------------------------------------------
  $('.js-show-modal').on('click', function(event) {
    event.preventDefault();
    
    $('.js-modal').addClass('is-visible');
    $('.js-modal-overlay').addClass('is-visible');
  });
  
  $('.js-modal-overlay').on('click', function(event) {
    $('.js-modal').removeClass('is-visible');
    $('.js-modal-overlay').removeClass('is-visible');
  });
  
});


