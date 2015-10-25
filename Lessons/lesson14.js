//Excercise 3
$(function(){
  $('h1').css('color', 'blue');
  $('body').css('background-color', 'red');
  $('#everything').css('font-size', '17px');
  $('.holder').css('border-style', 'groove', 'black');
  $('li','ul').css('font-weight','bolder');
  $(document).ready(function(){
    $("h1,p").siblings().css("color", "green");
});
  $('#secret').css('display', 'none');
  $('#secret').css('display', 'block');
  $('#change-me').text('Replaced jumbily').append(" appended and confused.").html("<p> This is the replaced <em> text </em>...</p>").append(' and this is the appended text, after a P tag.');
  $('#everything').append('<ol><li>One</li><li>Two</li><li>Three</li></ol>');

});
