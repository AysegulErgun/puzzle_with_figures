var rows =3;
var columns = 3;


var currTile;
var otherTile;



window.onload = function(){
//initialize the 3x3 board
    for(let r=0; r<rows; r++){
        for(let c=0; c < columns; c++ ){
        //<img>
        let tile= document.createElement("img");
        tile.src="./images/blank.jpg";

        tile.addEventListener("dragstart", dragStart); //click on image to drag
        tile.addEventListener("dragover", dragOver); //drag an image
        tile.addEventListener("dragenter", dragEnter);//dragging an image to another one
        tile.addEventListener("dragleave", dragLeave);// dragging an image away from another one
        tile.addEventListener("drop", dragDrop);//drop an image onto another one
        tile.addEventListener("dragend", dragEnd);  //after you completed dragDrop

        document.getElementById("board").append(tile);
        }
    }
    //pieces
    let pieces = [];
    for(let i=1; i <= rows*columns; i++){
        pieces.push(i.toString());
    }
    pieces.reverse();
    for(let i = 0; i < pieces.length; i++ ){
        let j = Math.floor(Math.random() * pieces.length);

        //her defasında alttaki rakamların yeri değişmesi için
        let tmp = pieces[i];
        pieces[i]= pieces [j];
        pieces[j]=tmp ;
    }


    for(let i=0; i < pieces.length; i++){
        let tile = document.createElement("img");
        tile.src="./images/" + pieces[i] + ".jpg";
        //sürükleme için
        tile.addEventListener("dragstart", dragStart); //click on image to drag
        tile.addEventListener("dragover", dragOver); //drag an image
        tile.addEventListener("dragenter", dragEnter);//dragging an image to another one
        tile.addEventListener("dragleave", dragLeave);// dragging an image away from another one
        tile.addEventListener("drop", dragDrop);//drop an image onto another one
        tile.addEventListener("dragend", dragEnd);  //after you completed dragDrop      

        document.getElementById("pieces").append(tile);
    }
}

//drag tiles
function dragStart(){
    currTile=this; //this refers to image that was clicked on for dragging
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
}

function dragLeave(){

}

function dragDrop(){
    otherTile = this; //this refers to image that is being dropped on
}

function dragEnd(){
    if(currTile.src.includes("blank")){
        return;
    }
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

    turns += 1;
    document.getElementById("turns").innerText = turns;
}
