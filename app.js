// $(".click").click(function () {
//   $(".show").toggleClass("unhide");
//   $(".normal").toggleClass("bold");
// });

// $(".click2").click(function () {
//   $(".show2").toggleClass("unhide");
//   $(".normal2").toggleClass("bold");
// });

// $(".click3").click(function () {
//   $(".show3").toggleClass("unhide");
//   $(".normal3").toggleClass("bold");
// });

// $(".click4").click(function () {
//   $(".show4").toggleClass("unhide");
//   $(".normal4").toggleClass("bold");
// });

// $(".click5").click(function () {
//   $(".show5").toggleClass("unhide");
//   $(".normal5").toggleClass("bold");
// });

//new method - slidetoggle
$(document).ready(function(){
  $('.hidden').hide();
});

$(document).ready(function(){
  $(".click").click(function(){
    $(".show").slideToggle("fast");
    $(".normal").toggleClass("bold");
  });
});

$(document).ready(function(){
  $(".click2").click(function(){
    $(".show2").slideToggle("fast");
    $(".normal2").toggleClass("bold");
  });
});

$(document).ready(function(){
  $(".click3").click(function(){
    $(".show3").slideToggle("fast");
    $(".normal3").toggleClass("bold");
  });
});

$(document).ready(function(){
  $(".click4").click(function(){
    $(".show4").slideToggle("fast");
    $(".normal4").toggleClass("bold");
  });
});

$(document).ready(function(){
  $(".click5").click(function(){
    $(".show5").slideToggle("fast");
    $(".normal5").toggleClass("bold");s
  });
});