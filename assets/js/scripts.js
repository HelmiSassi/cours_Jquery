/* $(document).ready(function(){
    $("#but").click(
    function() {
        console.log("Hello World! ");
    });
});
*/
$(function(){
    $("#but","body").click(function(){
        console.log("Hello World!");
    });
});

$(function(){
    $("#but","body").click(function(){
        //$("#container").text("<p>Hello</p>");
        //$("#container").html("<p>Hello</p>");
        $("div#container").prepend("<h1>Hello</h1>");
        $("div#container").append("<h1>Bye!</h1>");
        //$("div p:nth-child(1)").prepend("<p>test</p>");
    });
});

 $(function(){
        $("#but","body").click(function(){
        $("div p:nth-child(1)").prepend("<p>test</p>");
 });
 });


//Utilisation de la méthode .attr(nomAttribut) qui permet de récupérer
// la valeur de l'attribut passé en paramètre
//Affiche "blue"

$(function(){
    
        console.log($("p").attr("class"));
    });

//Utilisation de la méthode .attr(nomAttribut) et de each qui permet de récupérer
// toutes les valeurs de l'attribut passé en paramètre
//Affiche "blue"

$(function(){
    $("p").each(function(){
        console.log($("p").attr("class"));
    });
});

//Utilisation de la méthode .length qui permet de déterminer
// le nombre d'éléments sélectionnés
//Affiche "3"

$(function(){
    
        console.log($("p").length);
    });

//Utilisation de la méthode .eq(i) qui permet de choisir
// l'élément ayant l'indice passé en paramètre
//Affiche "blue"

$(function(){
    //console.log($("p").eq(0));
    console.log($("p:eq(0)"));
});

//Opérations 
//p:lt(i) : parag < indice i
//p:gt(i) : parag > indice i
// p:even : parag d'indice pair et p:odd d'indice impair
// p:first : premier parag et p:last : dernier parag
// input:text : On récupère les inputs de type text

// $(function(){
//     $("#but","body").click(function(){
//         $("div p:nt-child(1)").prepend("<p>test</p>");
//     });
// });


//utilisation de la méthode removeAttr(nomAttribut)
//supprimant l'attribut passé en paramètre, ici "class"
//puis, de la méthide .attr(nomAttribut, nouvelleValeur)
//qui va permettre de modifier la valeur de 'attribut passé en paramètre
$(function(){
   // $("p").eq(0).removeAttr("class");
   // $("p").eq(0).attr("class","red");

    $("p").even().removeClass("blue").addClass("red");
});

//Utilisation de la méthode val() qui permet
//de récupérer la valeur de l'attribut value
$(function(){
    $("#but","body").click(function(){
        console.log($("#nom").val());
    });
});

//Utilisation de la méthode val() qui permet
//de remplacer la valeur de l'attribut value par
//la valeur passée en paramètre
$(function(){
    $("#but","body").click(function(){
        console.log($("#nom").val("John Wick"));
    });
});
// $("#nom").val("John Wick");

//Utilisation de la méthode .css(nomPrpriete) qui nous permet
//de recuperer la valeur de la propriété
//CSS passée en paramètre
$(function(){
    
        console.log($("p").eq(0).css("color"));
    });


//Utilisation de la méthode .css(nomPrpriete, nouvelleValeur) qui nous permet
//de modifier la valeur, puis de la méthode .css(nomPrpriete, nouvelleValeur)
//qui va permettre de modifier la valeur de la propriété passée en paramètre
$(function(){
    console.log($("p").eq(0).css("color","green"));
    $("p").eq(0).css({"color" : "green", "background-color" : "red"});
});

//Méthodes .xClass()
//.addClass() : Ajoute une classe
//.removeClass(): Supprime une classe
// .hasClass() : Teste l'existence d'une classe
// .toggleClass() : Retire ou ajoute une classe

$(function(){
    $("#red").removeClass("red").addClass("blue");
    $("#green").removeClass("green").addClass("red");
    $("#blue").removeClass("blue").addClass("green");
});

$(function(){
$("p").last().addClass("w3r_font_color");
});

//Utilisation de la methode wrap(baliseHtml)
//nous permettant d'entourer les elements selectionnes
//ici les balises p par les balises passés en parametres
//ici <div>
//     <p>Bonjour</p>
//     <p>Bonsoir</p>
//     </div>

$(function () {
    $("#but").click(function () {
        $("#p p").wrapAll("<div></div>");
    });
});