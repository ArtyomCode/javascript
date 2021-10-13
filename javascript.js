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

    var top = 0;
      $("button.top").click(function(){
        $("div.two").css('top', ++top);
      });

      $("button.center").click(function(){
        $("div.two").css('top', '0px');
        top=0;
      });

      $("img.menubutt").click(function(){
        $("div.menu").animate({'padding-left': 0}, 3000);
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
    var name = document.getElementById("name");
    var last = document.getElementById("lastname");
    var year = document.getElementById("year");

    if(document.getElementById("name").value.length !== 0 && 
    document.getElementById("lastname").value.length && 
    document.getElementById("year").value.length)
  {
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
    document.getElementById("name").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("year").value = "";
  }else{
    alert("Fill the form completely, please!");
  }
}
