let btn = document.getElementById("btn");
var p1score = 0;
var p2score = 0;
function roll(){
    let p1 = Math.floor(1 + 5*Math.random());
    let p2 = Math.floor(1 + 5*Math.random());
    console.log(p1 + " " + p2);
    changeDice(player1, p1);
    changeDice(player2, p2);
    if(p1 > p2){
        p1score++;
        changeScore(player1);
        highlight(player1);
    }
    else if(p2 > p1){
        p2score++;
        changeScore(player2);
        highlight(player2);
    }
}

btn.addEventListener("click", roll);



function changeScore(player){
    if(player == player1){
        let y = document.getElementById("pl1");
        y.innerHTML = p1score;
    }
    else if(player == player2){
        let y = document.getElementById("pl2");
        y.innerHTML = p2score;
    }
}


function highlight(player){
    if(player == player1){
        var x = document.getElementById("score1");
        var y = document.getElementById("score2");
        x.style.border="green solid 6px";
        y.style.border="#35353F solid 6px";
    }
    else if(player == player){
        var x = document.getElementById("score1");
        var y = document.getElementById("score2");
        x.style.border="#35353F solid 6px";
        y.style.border="green solid 6px"
    }
}


function changeDice(player, n){
    switch(n) {
        case 1:
          if(player == player1){
            dice1p1();
          }
          else{
              dice1p2();
          }
          break;

        case 2:
            if(player == player1){
                dice2p1();
              }
              else{
                  dice2p2();
              }
          break;

        case 3:
            if(player == player1){
                dice3p1();
              }
            else{
                dice3p2();
            }
          break;

        case 4:
            if(player == player1){
                dice4p1();
              }
            else{
                dice4p2();
            }
          break;
  
        case 5:
            if(player == player1){
                dice5p1();
              }
            else{
                dice5p2();
            }
          break;
            
        case 6:
            if(player == player1){
                dice6p1();
              }
            else{
                dice6p2();
            }
          break;
      }
}



function dice1p1(){
    let x = document.getElementById("player1");
    x.innerHTML='<img src="static/faces/one.png" alt="">';
}
function dice2p1(){
    let x = document.getElementById("player1");
    x.innerHTML='<img src="static/faces/two.png" alt="">';
}
function dice3p1(){
    let x = document.getElementById("player1");
    x.innerHTML='<img src="static/faces/three.png" alt="">';
}
function dice4p1(){
    let x = document.getElementById("player1");
    x.innerHTML='<img src="static/faces/four.png" alt="">';
}
function dice5p1(){
    let x = document.getElementById("player1");
    x.innerHTML='<img src="static/faces/five.png" alt="">';
}
function dice6p1(){
    let x = document.getElementById("player1");
    x.innerHTML='<img src="static/faces/six.png" alt="">';
}


function dice1p2(){
    let x = document.getElementById("player2");
    x.innerHTML='<img src="static/faces/one.png" alt="">';
}
function dice2p2(){
    let x = document.getElementById("player2");
    x.innerHTML='<img src="static/faces/two.png" alt="">';
}
function dice3p2(){
    let x = document.getElementById("player2");
    x.innerHTML='<img src="static/faces/three.png" alt="">';
}
function dice4p2(){
    let x = document.getElementById("player2");
    x.innerHTML='<img src="static/faces/four.png" alt="">';
}
function dice5p2(){
    let x = document.getElementById("player2");
    x.innerHTML='<img src="static/faces/five.png" alt="">';
}
function dice6p2(){
    let x = document.getElementById("player2");
    x.innerHTML='<img src="static/faces/six.png" alt="">';
}