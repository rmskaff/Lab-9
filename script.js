// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "125px";
//     document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
// }
//
// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementById("main").style.marginLeft= "0";
//     document.body.style.backgroundColor = "white";
// }

$(document).ready(function(){


$('ul li').css('border', 'solid', '2px').css('font-size', '30px').css('padding', '10px').css('margin', '10px').css('text-align', 'center').css('font-weight', 'bold').css('border-radius','50%');

$('ul li a').css('text-decoration', 'none').css('color', 'black');

$( "ul li" ).on('click', function() {
    $(this).text('Clicked!').css('background-color', '#F2F2FC');
  });

$('ul li').mouseenter(function(){
  $(this).fadeTo('slow', 0.25);
});

$('ul li').mouseleave(function(){
  $(this).fadeTo('5000', 1.0);
});



});
