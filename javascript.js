$(document).ready(function(){
    $("button.one").click(function(){
      $("div.one").toggle();
    });
    
    var width=$("div.two").width();
    $("button.width").click(function(){
        $("div.two").css('width', ++width);
      });

    var height=$("div.two").height();
    $("button.height").click(function(){
        $("div.two").css('height', ++height);
      });

    var top = $("div.two").position().top;
      $("button.top").click(function(){
        $("div.two").css('top', ++top);
      });

      $("button.center").click(function(){
        $("div.parent").css('width',0);
        $("div.parent").css('margin','auto');
        $("div.two").css('top', '160px');
        top=160;
      });

      $("img.menubutt").click(function(){
        $("div.menu").animate({left: '60%'}, "slow");
      });


      $("div.four").click(function(){

        function colorEle() {
            var symbols = '0123456789ABCDEF';
            var code = '#';
            for (var i = 0; i < 6; i++) {
                code += symbols[Math.floor(Math.random() * 16)];
            }
            return code;
          }
                    
        $("div.four").each(function() {
            $(this).css("background-color",colorEle());
        });
    });


  });
  
  var id = 0;

  function myFunction() {
    var table = document.getElementById("table");
    var name = document.getElementById("fname");
    var last = document.getElementById("lname");
    var year = document.getElementById("year");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(-1);
    var cell2 = row.insertCell(-1);
    var cell3 = row.insertCell(-1);
    var cell4 = row.insertCell(-1);
    id++;
    cell1.innerHTML = id;
    cell2.innerHTML = name.value;
    cell3.innerHTML = last.value;
    cell4.innerHTML = year.value;
  }