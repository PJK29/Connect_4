import { state } from "./C4script.js";

export function endgame(){
  console.log("FIN");
  for (let i = 0; i < state.col.length; i++) {
    state.col[i].c.onclick = null;  // This removes the onclick event handler
  }
  state.playbutton.style.display = "inline";
  state.playbutton.innerText = "Game ended. Click to restart.";
  state.playbutton.style.fontWeight = "bold";
  if(state.bcount>41){
    state.msgbutton.innerText = `Tied Game`;
  }
  else{
  state.msgbutton.innerText = `${state.user[state.k].Name} Won !!!`;
  }
  state.playbutton.onclick = () => location.reload();  // Restart the game on click
}

