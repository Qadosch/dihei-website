$(document).ready(function(){
    $(".burger").click(function(){
      $("header").toggle();
    });

    jQuery("#inserat-gallery").unitegallery({
      tiles_type:"justified"
    });
  });