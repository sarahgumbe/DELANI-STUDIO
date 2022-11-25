//what do we do functionalities/responces
$(document).ready(function(){
$("#design-icon").click(function(){
$("#design-icon").slideDown('1500').hide('1000');
$("#design").show("1500");
});
$("#design").click(function(){
$("#design").slideUp('1500')
$("#design-icon").slideDown("1500");
});
});
//development icon
$(document).ready(function(){
$("#dev_icon").click(function(){
$("#dev_icon").slideDown('1500').hide('1000');
$("#development").show("1500");
});
$("#development").click(function(){
$("#development").slideUp('1500')
$("#dev_icon").slideDown("1500");
});
});
//product management
$(document).ready(function(){
$("#product_icon").click(function(){
$("#product_icon").slideDown('1500').hide('1000');
$("#product").show("1500");
});
$("#product").click(function(){
$("#product").slideUp('1500')
$("#product_icon").slideDown("1500");
});
});
//portfolio functionalities
//overlay2
$(document).ready(function(){
$("#work1").mouseover(function(){
$("#overlay2").show();
})
.mouseout(function(){
$("#overlay2").hide();
});
});
//overlay4
$(document).ready(function(){
$("#work4").mouseover(function(){
$("#overlay4").show();
})
.mouseout(function(){
$("#overlay4").hide();
});
});
//overlay3
$(document).ready(function(){
$("#work3").mouseover(function(){
$("#overlay3").show();
})
.mouseout(function(){
$("#overlay3").hide();
});
});
//overlay1
$(document).ready(function(){
$("#workk4").mouseover(function(){
$("#overlay1").show();
})
.mouseout(function(){
$("#overlay1").hide();
});
});
//overlay5
$(document).ready(function(){
$("#work5").mouseover(function(){
$("#overlay5").show();
})
.mouseout(function(){
$("#overlay5").hide();
});
});
//overlay6
$(document).ready(function(){
$("#work6").mouseover(function(){
$("#overlay6").show();
})
.mouseout(function(){
$("#overlay6").hide();
});
});
//overlay7
$(document).ready(function(){
$("#work7").mouseover(function(){
$("#overlay7").show();
})
.mouseout(function(){
$("#overlay7").hide();
});
});
//overlay8
$(document).ready(function(){
$("#work8").mouseover(function(){
$("#overlay8").show();
})
.mouseout(function(){
$("#overlay8").hide();
});
});
//form functionality
$(document).ready(function(){
    $("form#form").submit(function(event){
      // event.preventDefault();
      var name = $("input#MERGE1").val();
      var email = $("input#MERGE0").val();
      var message = $("textarea#comment").val();
      if ($("input#MERGE1").val() && $("input#MERGE0").val()){
        alert (name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and email!");
      }
      
    });
  
  });