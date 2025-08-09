import { changeturn,fill } from "./turn.js"

export const state={

playbutton : document.querySelector("#playbutn"),

msgbutton : document.querySelector("#endscore"),

//bcount counts number of filled tiles
bcount : 0,

maxcount : 41,//max count without line being made leading to draw

//user array and their colour
user :  [{Name :"Player 1",color:"red"},{Name : "Player 2",color:"blue"}],

//k is index for user array
k:1,

//col array so player can interact with the col to stack up coins instead of only interacting with bottommost unfilled one
//index filling starts from 6 and decrements to fill from bottom
col : [{c:document.querySelector("#col1"),index:6},
    {c:document.querySelector("#col2"),index:6},
    {c:document.querySelector("#col3"),index:6},
    {c:document.querySelector("#col4"),index:6},
    {c:document.querySelector("#col5"),index:6},
    {c:document.querySelector("#col6"),index:6},
    {c:document.querySelector("#col7"),index:6}],

//board array used to mark block coloured by user K and find winning path.
board : [[2,2,2,2,2,2,2],[2,2,2,2,2,2,2],[2,2,2,2,2,2,2],[2,2,2,2,2,2,2],[2,2,2,2,2,2,2],[2,2,2,2,2,2,2],[2,2,2,2,2,2,2]],
};

//boolean value to decide to end(1) or continue(0) game
let game = false;   

state.playbutton.onclick = play;
//console.log(playbutton); 
    
function play(){
  //col to detect which col was chosen, k to detect which index user is playing,
  //msgbutton to show particular player's turn
  state.playbutton.style.display = "none";
  console.log("Play function called!"); 
  changeturn();
  state.col[0].c.onclick = () => {game = fill(0)};  
  state.col[1].c.onclick = () => {game = fill(1)};  
  state.col[2].c.onclick = () => {game = fill(2)};  
  state.col[3].c.onclick = () => {game = fill(3)};  
  state.col[4].c.onclick = () => {game = fill(4)};  
  state.col[5].c.onclick = () => {game = fill(5)};  
  state.col[6].c.onclick = () => {game = fill(6)}; 

}

