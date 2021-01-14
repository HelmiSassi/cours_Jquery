function enleverLiens() {  
$("#contenu a").remove("a");
}  

function enleverGras() {  
    $("#contenu .gras").css({"font-weight" : "initial"});
    
}  
function enleverItalique() { 
    $("#contenu .italique").css({"font-style" : "initial"}); 
}  
function enleverDecor() {  
    $("#contenu .souligne").css({"text-decoration" : "initial"}); 
}  
function viderBoutons() { 
    $("#contenu a").html("<button></button>");
}  
function voirCode() {  
    $("#contenu").text($("p").html());
}  
function liensEnBoutons() {  
    $("#contenu a").wrap("<button></button>").css({"text-decoration":"none","color":"black"});
}  
function dupliquerTexte() { 
    $("#contenu").clone(true).appendTo("body");
}  
function regrouperLiens() { 
    $("#contenu a").wrapAll("a");
}  
function mettreTitres() {  
    $("#contenu .titre1").wrap("<h1></h1>");
    $("#contenu .titre2").wrap("<h2></h2>");
}  
function regrouperTitres() {  
    $("#contenu .titre1").wrapAll("<h1></h1>");
    $("#contenu .titre2").wrapAll("<h2></h2>");
}  
function colorer() {  
}  
function semantique() {  
    $("#contenu .gras").css({"font-weight" : "bold"});
    $("#contenu .italique").css({"font-style" : "italic"});
    $("#contenu .souligne").css({"text-decoration" : "underline"});
}  

function colorer() {  
    $('#contenu .rouge').wrap('<span style="color:red"></span>');  
    $('#contenu .vert').wrap('<span style="color:green"></span>');  
    $('#contenu .orange').wrap('<span style="color:orange"></span>');  
    $('#contenu .bleu').wrap('<span style="color:blue"></span>');  
}