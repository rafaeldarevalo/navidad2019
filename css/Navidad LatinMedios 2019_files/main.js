$( document ).ready(function() {
    let data;
    let data2;
    $(".js-text-intro").addClass("section-current");
    $(".js-hide").hide();

    $(".js-empezar").on("click", function(e){
        e.preventDefault ();
        $(".js-text-intro").removeClass("section-current");
        $(".js-text-intro").addClass("section-down");
        $(".js-customize-tree ").addClass("section-current"); 
    });
    
  
    $(".js-tree-selection").on("click", function(e){
        
        e.preventDefault ();
        $(".js-tree-base ").hide();
        data = $(this).attr("data-id");
        $("." + data).show();
        console.log(data);
        
        
    });
    $(".js-gift-selection").on("click", function(e){
        e.preventDefault ();
        $(".js-gift").hide();
       data2 = $(this).attr("data-id");
        $("." + data2).show();
        
    });
    $(".js-continuar").on("click", function(e){
         console.log(data);
         $("." + data).show();
         $("." + data2).show();
         e.preventDefault ();
            $(".js-customize-tree").removeClass("section-current");
            $(".js-customize-tree").addClass("section-down");
            $(".js-mensaje ").addClass("section-current"); 
    })

    
});
