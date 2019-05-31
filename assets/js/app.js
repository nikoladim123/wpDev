var numberSpan = document.getElementById('numberSpanOne');
var numberSpanTwo = document.getElementById('numberSpanTwo');
var numberSpanThree = document.getElementById('numberSpanThree');

var numberForSpan = 0;
var numberForSpanTwo = 0;
var numberForSpanThree = 0;

var interv = setInterval(()=>{
  changeSpanNum();
  changeSpanNumTwo();
  changeSpanNumThree();
},1);

function changeSpanNum() {
  if (numberForSpan <= 965) {
    numberForSpan +=1;
  }
  numberSpan.innerText = numberForSpan + ',';
}

function changeSpanNumTwo(){
  if (numberForSpanTwo <= 230) {
    numberForSpanTwo +=1;
  }
  numberSpanTwo.innerText = numberForSpanTwo + ',';
}


function changeSpanNumThree(){
  if (numberForSpanThree <= 436) {
    numberForSpanThree +=1;
  }
  numberSpanThree.innerText = numberForSpanThree;
}
