var black=["pawn1-black","pawn2-black","pawn3-black","pawn4-black","pawn5-black","pawn6-black","pawn7-black","pawn8-black","rook-black","rook2-black","knight-black","knight2-black","bishop-black","bishop2-black","queen-black","king-black"];
var white=["pawn1-white","pawn2-white","pawn3-white","pawn4-white","pawn5-white","pawn6-white","pawn7-white","pawn8-white","rook-white","rook2-white","knight-white","knight2-white","bishop-white","bishop2-white","queen-white","king-white"];


var dragPawn1W = document.getElementById("pawn1.w");
var dropPawn1W = document.getElementById("main-div");
console.log(dragPawn1W);
$(function () {
    var s=$("#pawn1.w").parent("#div-7-1");
    var d=$(".chess-div").children(white);
    console.log(s);
    dragPawn1W.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
        console.log("jndkcn");
        document.getElementById("div-6-1").style.backgroundColor = "blue";
        document.getElementById("div-5-1").style.backgroundColor = "blue";

    };

    dragPawn1W.ondragend = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
        $("#pawn1.b").replaceChild(dragPawn1W,dragPawn1B);
        $("#pawn2.b").replaceChild(dragPawn1W,dragPawnB);
        $("#pawn3.b").replaceWith(dragPawn1W);
        $("#pawn4.b").replaceWith(dragPawn1W);
        $("#pawn5.b").replaceWith(dragPawn1W);
        $("#pawn6.b").replaceWith(dragPawn1W);
        $("#pawn7.b").replaceWith(dragPawn1W);
        $("#pawn8-b").replaceWith(dragPawn1W);
        $("#rook-b").replaceWith(dragPawn1W);
        $("#rook2.b").replaceWith(dragPawn1W);
        $("#knight.b").replaceWith(dragPawn1W);
        $("#knight2.b").replaceWith(dragPawn1W);
        $("#bishop.b").replaceWith(dragPawn1W);
        $("#bishop2.b").replaceWith(dragPawn1W);
        $("#queen.b").replaceWith(dragPawn1W);
        $("#king.b").replaceWith(dragPawn1W);

        $("#pawn1.w").replaceChild(dragPawn2W,dragPawn2B);
        $("#pawn2-w").replaceChild(dragPawn2W,dragPawn1B);
        $("#pawn3-w").replaceWith(dragPawn2W);
        $("#pawn4-w").replaceWith(dragbishop2W);
        $("#pawn5-white").replaceWith(dragPawn2W);
        $("#pawn6-white").replaceWith(dragPawn2W);
        $("#pawn7-white").replaceWith(dragPawn2W);
        $("#pawn8-white").replaceWith(dragPawn2W);
        $("#rook-white").replaceWith(dragPawn2W);
        $("#rook2-white").replaceWith(dragPawn2W);
        $("#knight-white").replaceWith(dragPawn2W);
        $("#knight2-white").replaceWith(dragPawn2W);
        $("#bishop-white").replaceWith(dragPawn2W);
        $("#bishop2-white").replaceWith(dragPawn2W);
        $("#queen-white").replaceWith(dragPawn2W);
        $("#king-white").replaceWith(dragPawn2W);
        document.getElementById("div-6-1").style.backgroundColor = "";
        document.getElementById("div-5-1").style.backgroundColor = "";
    };

    dropPawn1W.ondragover = function(event) {
        event.preventDefault();


    };

    dropPawn1W.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));

        document.getElementById("div-6-1").style.backgroundColor = "";
        $("#div-6-1").css("background-color","white").remove().val(s);
        $("#div-5-1").css("background-color","white").val(s);
    };
});

var dragPawn2W = document.getElementById("pawn2-white");
var dropPawn2W = document.getElementById("main-div");
$(function () {
    dragPawn2W.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    dropPawn2W.ondragover = function(event) {
        event.preventDefault();
    };

    dropPawn2W.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var dragPawn3W = document.getElementById("pawn3-white");
var dropPawn3W = document.getElementById("main-div");
$(function () {
    dragPawn3W.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    dropPawn3W.ondragover = function(event) {
        event.preventDefault();
    };

    dropPawn3W.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var dragPawn4W = document.getElementById("pawn4-white");
var dropPawn4W = document.getElementById("main-div");
$(function () {
    dragPawn4W.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    dropPawn4W.ondragover = function(event) {
        event.preventDefault();
    };

    dropPawn4W.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var dragPawn5W = document.getElementById("pawn5-white");
var dropPawn5W = document.getElementById("main-div");
$(function () {
    dragPawn5W.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    dropPawn5W.ondragover = function(event) {
        event.preventDefault();
    };

    dropPawn5W.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var dragPawn6W = document.getElementById("pawn6-white");
var dropPawn6W = document.getElementById("main-div");
$(function () {
    dragPawn6W.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    dropPawn6W.ondragover = function(event) {
        event.preventDefault();
    };

    dropPawn6W.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var dragPawn7W = document.getElementById("pawn7-white");
var dropPawn7W = document.getElementById("main-div");
$(function () {
    dragPawn7W.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    dropPawn7W.ondragover = function(event) {
        event.preventDefault();
    };

    dropPawn7W.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var dragPawn8W = document.getElementById("pawn8-white");
var dropPawn8W = document.getElementById("main-div");
$(function () {
    dragPawn8W.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    dropPawn8W.ondragover = function(event) {
        event.preventDefault();
    };

    dropPawn8W.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});


var dragRook1W = document.getElementById("rook-white");
var dropRook1W = document.getElementById("main-div");
$(function () {
    dragRook1W.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    dropRook1W.ondragover = function(event) {
        event.preventDefault();
    };

    dropRook1W.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var dragRook2W = document.getElementById("rook2-white");
var dropRook2W = document.getElementById("main-div");
$(function () {
    dragRook2W.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    dropRook2W.ondragover = function(event) {
        event.preventDefault();
    };

    dropRook2W.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});


var dragKnight1W = document.getElementById("knight-white");
var dropKnight1W = document.getElementById("main-div");
$(function () {
    dragKnight1W.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    dropKnight1W.ondragover = function(event) {
        event.preventDefault();
    };

    dropKnight1W.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var dragKnight2W = document.getElementById("knight2-white");
var dropKnight2W = document.getElementById("main-div");
$(function () {
    dragKnight2W.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    dropKnight2W.ondragover = function(event) {
        event.preventDefault();
    };

    dropKnight2W.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});


var dragbishop1W = document.getElementById("bishop-white");
var dropbishop1W = document.getElementById("main-div");
$(function () {
    dragbishop1W.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    dropbishop1W.ondragover = function(event) {
        event.preventDefault();
    };

    dropbishop1W.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var dragbishop2W = document.getElementById("bishop2-white");
var dropbishop2W = document.getElementById("main-div");
$(function () {
    dragbishop2W.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    dropbishop2W.ondragover = function(event) {
        event.preventDefault();
    };

    dropbishop2W.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});


var dragQueenW = document.getElementById("queen-white");
var dropQueenW = document.getElementById("main-div");
$(function () {
    dragQueenW.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    dropQueenW.ondragover = function(event) {
        event.preventDefault();
    };

    dropQueenW.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});


var dragKingW = document.getElementById("king-white");
var dropKingW = document.getElementById("main-div");
$(function () {
    dragKingW.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    dropKingW.ondragover = function(event) {
        event.preventDefault();
    };

    dropKingW.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});










var dragPawn1B = document.getElementById("pawn1-black");
var dropPawn1B = document.getElementById("main-div");
$(function () {
    dragPawn1B.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    dropPawn1B.ondragover = function(event) {
        event.preventDefault();
    };

    dropPawn1B.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var dragPawn2B = document.getElementById("pawn2-black");
var dropPawn2B = document.getElementById("main-div");
$(function () {
    dragPawn2B.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    dropPawn2B.ondragover = function(event) {
        event.preventDefault();
    };

    dropPawn2B.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var dragPawn3B = document.getElementById("pawn3-black");
var dropPawn3B = document.getElementById("main-div");
$(function () {
    dragPawn3B.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    dropPawn3B.ondragover = function(event) {
        event.preventDefault();
    };

    dropPawn3B.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var dragPawn4B = document.getElementById("pawn4-black");
var dropPawn4B = document.getElementById("main-div");
$(function () {
    dragPawn4B.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    dropPawn4B.ondragover = function(event) {
        event.preventDefault();
    };

    dropPawn4B.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var dragPawn5B = document.getElementById("pawn5-black");
var dropPawn5B = document.getElementById("main-div");
$(function () {
    dragPawn5B.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    dropPawn5B.ondragover = function(event) {
        event.preventDefault();
    };

    dropPawn5B.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var dragPawn6B = document.getElementById("pawn6-black");
var dropPawn6B = document.getElementById("main-div");
$(function () {
    dragPawn6B.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    dropPawn6B.ondragover = function(event) {
        event.preventDefault();
    };

    dropPawn6B.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var dragPawn7B = document.getElementById("pawn7-black");
var dropPawn7B = document.getElementById("main-div");
$(function () {
    dragPawn7B.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    dropPawn7B.ondragover = function(event) {
        event.preventDefault();
    };

    dropPawn7B.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var dragPawn8B = document.getElementById("pawn8-black");
var dropPawn8B = document.getElementById("main-div");
$(function () {
    dragPawn8B.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    dropPawn8B.ondragover = function(event) {
        event.preventDefault();
    };

    dropPawn8B.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});


var dragRook1B = document.getElementById("rook-black");
var dropRook1B = document.getElementById("main-div");
$(function () {
    dragRook1B.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    dropRook1B.ondragover = function(event) {
        event.preventDefault();
    };

    dropRook1B.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var dragRook2B = document.getElementById("rook2-black");
var dropRook2B = document.getElementById("main-div");
$(function () {
    dragRook2B.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    dropRook2B.ondragover = function(event) {
        event.preventDefault();
    };

    dropRook2B.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});


var dragKnight1B = document.getElementById("knight-black");
var dropKnight1B = document.getElementById("main-div");
$(function () {
    dragKnight1B.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    dropKnight1B.ondragover = function(event) {
        event.preventDefault();
    };

    dropKnight1B.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var dragKnight2B = document.getElementById("knight2-black");
var dropKnight2B = document.getElementById("main-div");
$(function () {
    dragKnight2B.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    dropKnight2B.ondragover = function(event) {
        event.preventDefault();
    };

    dropKnight2B.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});


var dragbishop1B = document.getElementById("bishop-black");
var dropbishop1B = document.getElementById("main-div");
$(function () {
    dragbishop1B.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    dropbishop1B.ondragover = function(event) {
        event.preventDefault();
    };

    dropbishop1B.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var dragbishop2B = document.getElementById("bishop2-black");
var dropbishop2B = document.getElementById("main-div");
$(function () {
    dragbishop2B.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    dropbishop2B.ondragover = function(event) {
        event.preventDefault();
    };

    dropbishop2B.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});


var dragQueenB = document.getElementById("queen-black");
var dropQueenB = document.getElementById("main-div");
$(function () {
    dragQueenB.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    dropQueenB.ondragover = function(event) {
        event.preventDefault();
    };

    dropQueenB.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});


var dragKingB = document.getElementById("king-black");
var dropKingB = document.getElementById("main-div");
$(function () {
    dragKingB.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    dropKingB.ondragover = function(event) {
        event.preventDefault();
    };

    dropKingB.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});



