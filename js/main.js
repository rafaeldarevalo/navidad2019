$(document).ready(function () {
    let data, data2, nameTree, nameGift;

    $(".js-text-intro").addClass("section-current");
    $(".js-hide").hide();

    $(".js-empezar").on("click", function (e) {
        e.preventDefault();
        $(".js-text-intro").removeClass("section-current");
        $(".js-text-intro").addClass("section-down");
        $(".js-customize-tree ").addClass("section-current");
    });


    $(".js-tree-selection").on("click", function (e) {
        e.preventDefault();
        $(".js-tree-base ").hide();
        data = $(this).attr("data-id");
        nameTree = $(this).attr("data-name");
        $("." + data).show();
        console.log("Selected " + nameTree);


    });
    $(".js-gift-selection").on("click", function (e) {
        e.preventDefault();
        $(".js-gift").hide();
        data2 = $(this).attr("data-id");
        nameGift = $(this).attr("data-name");
        $("." + data2).show();
        console.log("Selected " + nameGift);

    });
    $(".js-continuar").on("click", function (e) {
        console.log("Seleccionados " + nameTree + ", " + nameGift);
        $("." + data).show();
        $("." + data2).show();
        e.preventDefault();
        $(".js-customize-tree").removeClass("section-current");
        $(".js-customize-tree").addClass("section-down");
        $(".js-mensaje ").addClass("section-current");
    });
    $(".js-vermensaje").on("click", function (e) {

        e.preventDefault();
        let emailOne = $("#nameOne").val();
        let emailTwo = $("#emailTwo").val();
        let nameOne = $("#nameOne").val();
        let nameTwo = $("#nameTwo").val();
        let mssg = $("#mssg").val();
        if (
            emailOne.length == 0
            || emailTwo.length == 0
            || nameOne.length == 0
            || nameTwo.length == 0
            || mssg.length == 0) {
            console.log("llene todos campos");


        }
        else {
            console.log("bien hecho");
            var ref = new Firebase("https://christmas-2019-45b56.firebaseio.com/mssg");
            firebase.analytics();

            ref.push({
                mailOne: emailOne,
                mailTwo: emailTwo,
                nameOne: nameOne,
                nameTwo: nameTwo,
                mssg: mssg,
                tree: nameTree,
                gift: nameGift
            });

            $(".js-mensaje").removeClass("section-current");
            $(".js-mensaje").addClass("section-down");
            $(".js-preview ").addClass("section-current");

        }

        $(".js-enviar").on("click", function (e) {
           
           
            e.preventDefault();
            $(".js-preview").removeClass("section-current");
            $(".js-preview").addClass("section-down");
            $(".js-tpage ").addClass("section-current");
        });






    })

    $(".js-enviar").on("click", function (e) {
        console.log("Seleccionados " + nameTree + ", " + nameGift);
        $("." + data).show();
        $("." + data2).show();
        e.preventDefault();
        $(".js-customize-tree").removeClass("section-current");
        $(".js-customize-tree").addClass("section-down");
        $(".js-mensaje ").addClass("section-current");
    });
})

var key = "-LvgZE5NkJgHZ1Z1uOW2";
var ref = new Firebase("https://christmas-2019-45b56.firebaseio.com/mssg");
ref.on("child_added", function (snapshot) {
    //console.log("El juego actual es ", snapshot.val());
    // console.log("El id actual es ", snapshot.key());
    if (snapshot.key() == key) {
        //console.log("El juego actual es ", snapshot.val());
        var traeDatos = snapshot.val();
        var tree = document.querySelector(".js-showTree");
        var from = document.querySelector(".js-from");
        var to  = document.querySelector(".js-to");
        var mssg  = document.querySelector(".js-mssg");

        console.log("tree " + traeDatos.tree);
        tree.innerHTML = '<img class="tree-base" src="img/' + traeDatos.tree + '.png" alt=""> <img class="gift" src="img/' + traeDatos.gift + '.png" alt="">';
        from.innerHTML = "De: " + traeDatos.nameOne;
        to.innerHTML = "Para: " + traeDatos.nameTwo;
        mssg.innerHTML =  traeDatos.mssg;

    }


});