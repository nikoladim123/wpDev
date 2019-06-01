var numberSpan = document.getElementById('numberSpanOne');
var numberSpanTwo = document.getElementById('numberSpanTwo');
var numberSpanThree = document.getElementById('numberSpanThree');

var numberForSpan = 0;
var numberForSpanTwo = 0;
var numberForSpanThree = 300;
var int = 10;

var interv = setInterval(()=>{
  // changeSpanNum();
  // changeSpanNumTwo();
  // changeSpanNumThree();
  int = Math.floor(Math.random() *1700);
},int);



function loop() {
  numberForSpanThree++;
  numberSpanThree.innerText = numberForSpanThree;
  window.setTimeout(loop, Math.floor(Math.random() *1700));
  // console.log(123);
}

loop();
