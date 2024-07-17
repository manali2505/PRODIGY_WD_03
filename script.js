let boxes=document.querySelectorAll(".box");
let turn="X";
let isGameComp=false;
boxes.forEach(e=>{
    e.innerHTML=""
    e.addEventListener("click",()=>{
        if(!isGameComp && e.innerHTML===""){
            e.innerHTML=turn;
            checkwin();
            checkdraw();
            changeturn();
        }
    })
})

function changeturn(){
    if(turn==="X"){
        turn="O";
        document.querySelector(".bg").style.left="85px";
    }
    else{
        turn="X";
        document.querySelector(".bg").style.left="0";
    }
}

function checkwin(){
let win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
for(let i=0;i<win.length;i++)
{
    let r0=boxes[win[i][0]].innerHTML;
    let r1=boxes[win[i][1]].innerHTML;
    let r2=boxes[win[i][2]].innerHTML;
    if(r0!="" && r0===r1 &&  r0===r2)
    {
        
        isGameComp=true;
        document.querySelector("#results").innerHTML=turn + "  Wins!!";
        document.querySelector("#play-again").style.display="inline";
        for(j=0;j<3;j++)
        {
            boxes[win[i][j]].style.backgroundColor="#DAA520";
            boxes[win[i][j]].style.color="#000";
        }
    }
}
}

function checkdraw(){
    if(!isGameComp){
        let isDraw=true;
        boxes.forEach(e=>{
            if(e.innerHTML ==="") isDraw=false;
        })

        if(isDraw){
            isGameComp=true;
            document.querySelector("#results").innerHTML= "  Draw!!";
            document.querySelector("#play-again").style.display="inline";

        }
    }

}

document.querySelector("#play-again").addEventListener("click",()=>{
    isGameComp=false;
    turn="X";
    document.querySelector(".bg").style.left="0";
    document.querySelector("#results").innerHTML="";
    document.querySelector("#play-again").style.display="none";
    boxes.forEach(e=>{
        e.innerHTML="";
        e.style.removeProperty("background-color");
        e.style.color="#fff";
    })
})

