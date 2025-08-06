//wcount counts same coloured buttons inline
let wcount = 1;
let winlinelength = 4;
let maxcount = 41;//max count without line being made leading to draw
import { state } from "./C4script.js";
export function isGameOver(){
  //console.log("This game sucks.");
  if(state.bcount>maxcount){
  return true;
  }
  if(state.bcount>6){
    for(let i=5;i>=0;i--){
      for(let j=6;j>=0;j--){
      if(state.board[i][j] == state.k){
        if(wincon(i,j,i,j)){
        return true;
        }
      }
      }
    }
  }
  return false;
}

//winning condtion - dfs backtracking approach to check if line is made
//[i,j] show current cell and [p,q] show source from where search has been started
//if a match is found wcount is incremented and next button in same direction is checked by calling function again
//else function is returned back to source button and wcount increment is negated.
function wincon(i,j,p,q){
 // console.log("w? "+i+" "+j+":"+p+" "+q+" ,"+wcount);
  if(wcount>=winlinelength){
    console.log("Woohoo Line made.");
    return true;
  }
  //check for vertical line formed
  if(i==p){
      if(j+1<=6 && j+1!=q && state.board[i][j]==state.board[i][j+1]){
        wcount++;
        if(wincon(i,j+1,p,j)){
          return true;
        }
        wcount--;
      }
      if(j-1>=0 && j-1!=q && state.board[i][j]==state.board[i][j-1]){
        wcount++;
        if(wincon(i,j-1,p,j)){
          return true;
        }
        wcount--;
      }
  }
  //check for horizontal line formed
  if(j==q){
    if(i+1<=5 && i+1!=p && state.board[i][j]==state.board[i+1][j]){
      wcount++;
      if(wincon(i+1,j,i,q)){
        return true;
      }
      wcount--;
    }
    if(i-1>=0 && i-1!=p && state.board[i][j]==state.board[i-1][j]){
      wcount++;
      if(wincon(i-1,j,i,q)){
        return true;
      }
      wcount--;
    }
  }
  //check for slant line formed
  if(i-1>=0 && j-1>=0 && ((i==p && j==q) || (i + 1 == p && j+1==q)) && state.board[i][j]==state.board[i-1][j-1]){
    wcount++;
    if(wincon(i-1 ,j-1,i,j)){
      return true;
    }
    wcount--;
  }
  if(i-1>=0 && j+1<=6 && ((i==p && j==q) || (i + 1 == p && j-1==q)) && state.board[i][j]==state.board[i-1][j+1]){
    wcount++;
    if(wincon(i-1 ,j+1,i,j)){
      return true;
    }
    wcount--;
  }
  if(i+1<=5 && j-1>=0 && ((i==p && j==q) || (i - 1 == p && j+1==q)) && state.board[i][j]==state.board[i+1][j-1]){
    wcount++;
    if(wincon(i+1 ,j-1,i,j)){
      return true;
    }
    wcount--;
  }
  if(i+1<=5 && j+1<=6 && ((i==p && j==q) || (i - 1 == p && j-1==q)) && state.board[i][j]==state.board[i+1][j+1]){
    wcount++;
    if(wincon(i+1 ,j+1,i,j)){
      return true;
    }
    wcount--;
  }
  return false;
}