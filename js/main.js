$(function() {
    
   $(window).resize( function() {

      // get the #container div's height and width
      var height = $("#container").outerHeight(true),
          width = $("#container").outerWidth(true);
   
      /*  To calculate the angle that the #triangle-background div needs to be rotated 
      /*  at ( for the diagonal line between the triangles to be adjusted responsively):
      /*  
      /*  Math.atan() function returns the arctangent (in radians) 
       *  of a number and 1 rad ~= 57.29577 deg 
       */
       var angle = (Math.atan(width/height) * 57.29577);
       var rotateProperty = "rotate(" + angle + "deg)";
     
       $('#triangle-background').css({
          "-webkit-transform": rotateProperty,
          "-moz-transform": rotateProperty,
          "-ms-transform": rotateProperty,
          "-o-transform": rotateProperty,
          "transform": rotateProperty
       });
      
   })
   .triggerHandler('resize');

   $("#showhide").click( function() 
   {
      if ($(this).data('val') == "1") 
      {
         $("#pwd").prop('type','text');
         $("#eye").attr("class","glyphicon glyphicon-eye-close");
         $(this).data('val','0');
      }
      else
      {
         $("#pwd").prop('type', 'password');
         $("#eye").attr("class","glyphicon glyphicon-eye-open");
         $(this).data('val','1');
      }
   });

});
