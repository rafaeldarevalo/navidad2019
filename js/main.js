$( document ).ready(function() {
    $(".js-text-intro").addClass("section-current");
    $(".js-comenzar").on("click", function(e){

        e.preventDefault ();
       
        $("section").removeClass("section-current");
    });
});