import { isGameOver } from "./endturn.js";
import { endgame } from "./end.js";
import { state } from "./C4script.js";

export function fill(i){
  state.col[i].index--;
  console.log("Filling #button" + (state.col[i].index+1) + (i+1));
  const buttons =  document.querySelector("#button" + (state.col[i].index+1) + (i+1)); 
  
  buttons.style.backgroundColor = state.user[state.k].color;
  state.board[state.col[i].index][i] = state.k;
  state.bcount++;
  if(isGameOver())
  endgame();
  else
  changeturn();
}

export function changeturn(){
  state.k=(state.k+1)%2; 
  state.msgbutton.innerText= `${state.user[state.k].Name}'s turn. Click a column.`;
}