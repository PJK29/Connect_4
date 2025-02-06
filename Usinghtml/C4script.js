
const playbutton = document.querySelector("#playbutn");
const msgbutton = document.querySelector("#endscore");
playbutton.onclick = play;
let bcount = 0;
let wcount = 1;
const user = [{Name :"Player 1",color:"red"},{Name : "Player 2",color:"blue"}];
let k=1; //0 = p1; 1=p2 
const board =[[2,2,2,2,2,2,2],[2,2,2,2,2,2,2],[2,2,2,2,2,2,2],[2,2,2,2,2,2,2],[2,2,2,2,2,2,2],[2,2,2,2,2,2,2],[2,2,2,2,2,2,2]];
const col =[{c:document.querySelector("#col1"),index:6},
    {c:document.querySelector("#col2"),index:6},
    {c:document.querySelector("#col3"),index:6},
    {c:document.querySelector("#col4"),index:6},
    {c:document.querySelector("#col5"),index:6},
    {c:document.querySelector("#col6"),index:6},
    {c:document.querySelector("#col7"),index:6}];

const buttons = [
  [
          document.querySelector("#button11"),
          document.querySelector("#button12"),
          document.querySelector("#button13"),
          document.querySelector("#button14"),
          document.querySelector("#button15"),
          document.querySelector("#button16"),
          document.querySelector("#button17")
  ],[
          document.querySelector("#button21"),
          document.querySelector("#button22"),
          document.querySelector("#button23"),
          document.querySelector("#button24"),
          document.querySelector("#button25"),
          document.querySelector("#button26"),
          document.querySelector("#button27")
  ],[
          document.querySelector("#button31"),
          document.querySelector("#button32"),
          document.querySelector("#button33"),
          document.querySelector("#button34"),
          document.querySelector("#button35"),
          document.querySelector("#button36"),
          document.querySelector("#button37")
  ],[
          document.querySelector("#button41"),
          document.querySelector("#button42"),
          document.querySelector("#button43"),
          document.querySelector("#button44"),
          document.querySelector("#button45"),
          document.querySelector("#button46"),
          document.querySelector("#button47")
  ],[
          document.querySelector("#button51"),
          document.querySelector("#button52"),
          document.querySelector("#button53"),
          document.querySelector("#button54"),
          document.querySelector("#button55"),
          document.querySelector("#button56"),
          document.querySelector("#button57")
  ],[
          document.querySelector("#button61"),
          document.querySelector("#button62"),
          document.querySelector("#button63"),
          document.querySelector("#button64"),
          document.querySelector("#button65"),
          document.querySelector("#button66"),
          document.querySelector("#button67")
  ]
];
      
function changeturn(){
  k=(k+1)%2; 
  msgbutton.innerText= `${user[k].Name}'s turn. Click a column.`;
  console.log("Yipp"); 
}
function play(){
  playbutton.style.display = "none";
  console.log("Play function called!"); 
  changeturn();
  // for (let i = 0; i < 7; i++) {
  //     col[i].onclick = () => fill(col[i],i);  
  // }
  col[0].c.onclick = () => fill(col[0],0);  
  col[1].c.onclick = () => fill(col[1],1);  
  col[2].c.onclick = () => fill(col[2],2);  
  col[3].c.onclick = () => fill(col[3],3);  
  col[4].c.onclick = () => fill(col[4],4);  
  col[5].c.onclick = () => fill(col[5],5);  
  col[6].c.onclick = () => fill(col[6],6); 
  console.log("eeee");  
}
function fill(col,i){
    console.log("Phil"); 
    col.index--;
    buttons[col.index][i].style.backgroundColor = user[k].color;
    board[col.index][i] = k;
    bcount++;
    // if(col.index <= 0){
    //   col.c.onclick() = null;
    // }
    // k = (k+1)%2;
    // playbutton.innerText = `${user[k].Name}'s turn. Click a column.`
    if (isGameOver()) {
    endgame();
    }
    else{
    play();
    }
}

function isGameOver(){
  console.log("This game sucks.");
  if(bcount>41){
  return true;
  }
  if(bcount>6){
    for(let i=5;i>=0;i--){
      for(let j=6;j>=0;j--){
      if(board[i][j] == k){
        if(wincon(i,j,i,j)){
        return true;
        }
      }
      }
    }
  }
  return false;
}
function endgame(){
  console.log("FIN");
  for (let i = 0; i < col.length; i++) {
    col[i].c.onclick = null;  // This removes the onclick event handler
  }
  playbutton.style.display = "inline";
  playbutton.innerText = "Game ended. Click to restart.";
  if(bcount>41){
    msgbutton.innerText = `Tied Game`;
  }
  else{
  msgbutton.innerText = `${user[k].Name} Won !!!`;
  }
  playbutton.onclick = () => location.reload();  // Restart the game on click
}


function wincon(i,j,p,q){
  console.log("w? "+i+" "+j+":"+p+" "+q+" ,"+wcount);
  if(wcount>=4){
    console.log("Woohoo.");
    return true;
  }
  if(i==p){
      if(j+1<=6 && j+1!=q && board[i][j]==board[i][j+1]){
        wcount++;
        if(wincon(i,j+1,p,j)){
          return true;
        }
        wcount--;
      }
      if(j-1>=0 && j-1!=q && board[i][j]==board[i][j-1]){
        wcount++;
        if(wincon(i,j-1,p,j)){
          return true;
        }
        wcount--;
      }
  }
  if(j==q){
    if(i+1<=5 && i+1!=p && board[i][j]==board[i+1][j]){
      wcount++;
      if(wincon(i+1,j,i,q)){
        return true;
      }
      wcount--;
    }
    if(i-1>=0 && i-1!=p && board[i][j]==board[i-1][j]){
      wcount++;
      if(wincon(i-1,j,i,q)){
        return true;
      }
      wcount--;
    }
  }
  if(i-1>=0 && j-1>=0 && ((i==p && j==q) || (i + 1 == p && j+1==q)) && board[i][j]==board[i-1][j-1]){
    wcount++;
    if(wincon(i-1 ,j-1,i,j)){
      return true;
    }
    wcount--;
  }
  if(i-1>=0 && j+1<=6 && ((i==p && j==q) || (i + 1 == p && j-1==q)) && board[i][j]==board[i-1][j+1]){
    wcount++;
    if(wincon(i-1 ,j+1,i,j)){
      return true;
    }
    wcount--;
  }
  if(i+1<=5 && j-1>=0 && ((i==p && j==q) || (i - 1 == p && j+1==q)) && board[i][j]==board[i+1][j-1]){
    wcount++;
    if(wincon(i+1 ,j-1,i,j)){
      return true;
    }
    wcount--;
  }
  if(i+1<=5 && j+1<=6 && ((i==p && j==q) || (i - 1 == p && j-1==q)) && board[i][j]==board[i+1][j+1]){
    wcount++;
    if(wincon(i+1 ,j+1,i,j)){
      return true;
    }
    wcount--;
  }
  return false;
}