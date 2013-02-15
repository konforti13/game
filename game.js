$(document).ready(function() {

  var numOfCells = 9;
  var $curr = $(".firstblock");
     $curr.css("background-color", "red");
  
  var $blank = $(".firstblank");
     $blank.css("background", "white");

  $curr.click(function(){
      var white = getWhite();
      if (white == 'right') {
        
      } 
      else if (white == 'left') {
        
      }
      else if (white == 'top') {
        
      }
      else if (white == 'bottom') {
        
      }
       
      
      $("span").css("background", "blue");
      $(this).css("background", "white");
      $blank.css("background", "red");
      $curr = $curr.next();
  });
  
  function makeSwitch(self) {
      
  }
  
  function getWhite() {
      if ($curr.next().hasClass('white')) {
        return 'right';
      }
      
      return 'none';
  }
  $(".right").click(function(){
   $curr = $curr.next();
      $("span").css("background", "");
      $curr.css("background", "red");
  });     

  $(".left").click(function(){
    $curr = $curr.prev();
    $("span").css("background", "");
    $curr.css("background", "red");
  });
  
  $(".up").click(function(){
   $curr = $curr.prev().prev().prev();
      $("span").css("background", "");
      $curr.css("background", "red");
  });
  
  $(".down").click(function(){
   $curr = $curr.next().next().next();
      $("span").css("background", "");
      $curr.css("background", "red");
  });
});








