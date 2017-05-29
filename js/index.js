$(document).ready(function() {
  var current = 0;
  $("input[type=text]").hide();
  $("#txtbx").keyup(function(event){
     if(event.keyCode == 13){
        $("#btnSearch").click();
    }
});
  $(".fa-search").click(function(event) {
    event.preventDefault();
    var colors = [
      "#78909C",
      "#8D6E63",
      "#FFA726",
      "#FFEE58",
      "#9CCC65",
      "#26A69A",
      "#29B6F6",
      "#5C6BC0",
      "#AB47BC",
      "#EF5350"
    ];
    var rand1 = Math.floor(Math.random() * colors.length);
    var rand2 = Math.floor(Math.random() * colors.length);
    if (rand1 != rand2) {
      $("body").css("background", colors[rand1]);
      $(".fa").css("color", colors[rand2]);
    }
    $("input[type=text]").animate({
      width: "toggle"
    });
    $(".wrapper").css("margin-top", "1cm");
    var srch = $("input:text").val();
    $.ajax({
    url:"https://en.wikipedia.org/w/api.php?action=opensearch&search="+srch+"&limit=10&namespace=0&format=json",
    dataType: "jsonp",
    success: function(parsed_json){
      if(current == 1){
        $(".head").html('<h1>Showing results for "'+parsed_json[0]+'" :-</h1>');
        for(var i = 0;i<parsed_json[1].length;i++){
          $(".srch-res").append('<a href="'+parsed_json[3][i]+'" target="_blank"><div class="jumbotron"><h2>'+parsed_json[1][i]+'</h2>                     <p>'+parsed_json[2][i]+'</p></div></a>');  
        }
        current = 0;
      }else{
        current = 1;
        $(".srch-res").html('');
      }
    }                             
  });
    
  });
         
 });