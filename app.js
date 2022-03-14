//new method - slidetoggle
$(document).ready(function () {
  $(".hidden").hide();
});
//1
$(document).ready(function () {
  $(".click").click(function () {
    $(".show").slideToggle("fast");
    $(".normal").toggleClass("bold");
    if ($(".hidden").hasClass("show")) {
      $(".show2, .show3, .show4, .show5").hide();
      $(".normal2, .normal3, .normal4, .normal5").removeClass("bold");
    } else {
    }
  });
});
//2
$(document).ready(function () {
  $(".click2").click(function () {
    $(".show2").slideToggle("fast");
    $(".normal2").toggleClass("bold");
    if ($(".hidden").hasClass("show")) {
      $(".show, .show3,.show4,.show5").hide();
      $(".normal,.normal3, .normal4, .normal5").removeClass("bold");
    } else {
      
    }
  });
});
//3
$(document).ready(function () {
  $(".click3").click(function () {
    $(".show3").slideToggle("fast");
    $(".normal3").toggleClass("bold");
    $(".hidden").addClass("hideAgain");
    if ($(".hidden").hasClass("show")) {
      $(".show, .show2,.show4,.show5").hide();
      $(".normal,.normal2, .normal4, .normal5").removeClass("bold")
    } else {
      
    }
  });
});
//4
$(document).ready(function () {
  $(".click4").click(function () {
    $(".show4").slideToggle("fast");
    $(".normal4").toggleClass("bold");
    $(".hidden").addClass("hideAgain");
    if ($(".hidden").hasClass("show")) {
      $(".show, .show3,.show2,.show5").hide();
      $(".normal,.normal3, .normal2, .normal5").removeClass("bold")
    } else {
      
    }
  });
});
//5
$(document).ready(function () {
  $(".click5").click(function () {
    $(".show5").slideToggle("fast");
    $(".normal5").toggleClass("bold");
    $(".hidden").addClass("hideAgain");
    if ($(".hidden").hasClass("show")) {
      $(".show, .show3,.show4,.show2").hide();
      $(".normal,.normal3, .normal4, .normal2").removeClass("bold")
    } else {
      
    }
  });
});
