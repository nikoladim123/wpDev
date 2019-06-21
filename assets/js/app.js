var numberSpan = document.getElementById('numberSpanOne');
var numberSpanTwo = document.getElementById('numberSpanTwo');
var numberSpanThree = document.getElementById('numberSpanThree');
var purpScreenDiv = document.getElementsByClassName('purpScreenDiv')[0];
var purpTabletDiv = document.getElementsByClassName('purpTabletDiv')[0];
var purpleScreen = document.getElementsByClassName('purpScreen')[0];
var addNum = document.getElementsByClassName('addNum');



// number roller
function runNumInterval(){
	if (addNum[0].getClientRects()[0].top < window.innerHeight / 100 * 90 &&  numRoller < 1) {
		addNumbersFun();
	}
}

var numRoller = 0;
function addNumbersFun() {
  if (numRoller <= 9) {
    addNum[0].innerText = '0' + numRoller;
  }
  if (numRoller <=128) {
    addNum[1].innerText = numRoller;
  }
  if (numRoller <=311) {
    addNum[2].innerText = numRoller;
  }
  numRoller++;
  if(numRoller < 320){
    setTimeout(function () {
      addNumbersFun()
    }, 15);
  };
}




// screen
function purpleScreens(){
	if (purpleScreen.getClientRects()[0].top < window.innerHeight / 100 * 50) {
		purpScreenDiv.style.transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)"
		purpTabletDiv.style.transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)"
	}
}

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


// window events
// window events
// window events

window.addEventListener('scroll',()=>{
  purpleScreens();
  runNumInterval();
})
