let btnref = document.querySelectorAll(".button-option");
let popupref = document.querySelector(".popup");
let newgamebtn = document.getElementById("new-game");
let restartbtn = document.getElementById("restart");
let msgref = document.getElementById("message");

let winningpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
];
// Player X plays first
let xturn = true;
let count = 0;
// Disabel all buttons
const disablebuttons = () =>{
    btnref.forEach((Element) => ( Element.disabled = true));
    //enable popups
    popupref.classList.remove("hide");
};
// Enable All buttons ( For a new Game And Restart)
const enablebuttons = () => {
    btnref.forEach((Element) => {
        Element.innerText = "";
        Element.disabled = false ;
    });
    // disable popup
    popupref.classList.add("hide");
};

// If Player Wins 
const winfunction = (letter) => {
    disablebuttons();
    if ( letter == "X"){
        msgref.innerHTML="&#x1F389; <br> 'X' Wins";
    }else{
        msgref.innerHTML="&#x1F389; <br> 'O' Wins";
    }
};
//Function for A Draw
const drawfunction= () => {
    disablebuttons();
    msgref.innerHTML = "&#x1F60E; <br> It's a Draw";
};
// New Game 
newgamebtn.addEventListener("click" , ()=> {
    count = 0;
    enablebuttons();
});
restartbtn.addEventListener("click", ()=> {
    count = 0;
    enablebuttons();
});

//WIn logic
const winchecker = () =>{
    // Loop throught all win patters
    for( let i of winningpattern) {
        let[Element1 , Element2 , Element3] = [
            btnref[i[0]].innerText,
            btnref[i[1]].innerText,
            btnref[i[2]].innerText,
        ];
        // check if elements are filled
        //if 3 elements are same and would give win as would
        if ((Element1 != "") && (Element2 != "") && (Element3 !="")){
            if(Element1 == Element2 && Element2 == Element3){
                winfunction(Element1);
            }
        }
    }
};
// Display X/O On Click
btnref.forEach((Element) => {
    Element.addEventListener("click" , ()=>{
        if(xturn){
            xturn = false;
            // Display X
            Element.innerText = "X";
            Element.disabled = true;
        }else{
            xturn = true;
            // Display Y
            Element.innerText ="O";
            Element.disabled = true;
        }
        count +=1 ;
        if(count == 9){
            drawfunction();
        }
        winchecker();
    });
});
window.onload = enablebuttons;