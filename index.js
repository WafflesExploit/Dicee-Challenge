var dice1, dice2;
function getDicee(){
  dice1 = Math.floor((Math.random() * 6));
  dice2 = Math.floor((Math.random() * 6));
  if(dice1 === 0){
    dice1 = 1;
  }else if(dice2=== 0){
    dice2 = 1;
  }else if(dice1>6){
    dice1=6;
  }else if(dice2>6){
    dice2=6;
  }
}
function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}

function randomizedDice(){
  for(var i=1;i<8;i++){
    getDicee();
    document.querySelectorAll("img")[0].setAttribute("src","imgs/dice"+dice1+".png");
    document.querySelectorAll("img")[1].setAttribute("src","imgs/dice"+dice2+".png");
  }
}
