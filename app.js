//default visibility
$(document).ready(function () {
  $(".hidden").hide();
});

//toggle first
$(document).ready(function () {
  $(".click").click(function () {
    $(".show").slideToggle("fast");
    $(".normal").toggleClass("bold");
    if ($(".hidden").hasClass("show")) {
      $(".show2, .show3, .show4, .show5").hide();
      $(".normal2, .normal3, .normal4, .normal5").removeClass("bold");
    }
  });
});

//toggle second
$(document).ready(function () {
  $(".click2").click(function () {
    $(".show2").slideToggle("fast");
    $(".normal2").toggleClass("bold");
    if ($(".hidden").hasClass("show")) {
      $(".show, .show3, .show4, .show5").hide();
      $(".normal, .normal3, .normal4, .normal5").removeClass("bold");
    }
  });
});

//toggle third
$(document).ready(function () {
  $(".click3").click(function () {
    $(".show3").slideToggle("fast");
    $(".normal3").toggleClass("bold");
    $(".hidden").addClass("hideAgain");
    if ($(".hidden").hasClass("show")) {
      $(".show, .show2, .show4, .show5").hide();
      $(".normal, .normal2, .normal4, .normal5").removeClass("bold")
    }
  });
});

//toggle fourth
$(document).ready(function () {
  $(".click4").click(function () {
    $(".show4").slideToggle("fast");
    $(".normal4").toggleClass("bold");
    $(".hidden").addClass("hideAgain");
    if ($(".hidden").hasClass("show")) {
      $(".show, .show2, .show3, .show5").hide();
      $(".normal, .normal2, .normal3, .normal5").removeClass("bold")
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
      $(".show, .show2, .show3, .show4 ").hide();
      $(".normal, .normal2, .normal3, .normal4").removeClass("bold")
    }
  });
});
