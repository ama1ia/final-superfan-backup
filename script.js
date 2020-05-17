
//Popup boxes appear and disappear
function firstImage() {
  var p1 = document.getElementById("ET");
  p1.classList.toggle("show");
}

function secondImage() {
  var p2 = document.getElementById("LToP");
  p2.classList.toggle("show");
}

function thirdImage() {
  var p3 = document.getElementById("SoL");
  p3.classList.toggle("show");
}

function fourthImage() {
  var popup4 = document.getElementById("StMB");
  p4.classList.toggle("show");
}

function fifthImage() {
  var p5 = document.getElementById("CtR");
  p5.classList.toggle("show");
}

function sixthImage() {
  var p6 = document.getElementById("AdT");
  p6.classList.toggle("show");
}

function seventhImage() {
  var p7 = document.getElementById("BhP");
  p7.classList.toggle("show");
}

function eighthImage() {
  var p8 = document.getElementById("C");
  p8.classList.toggle("show");
}

function ninthImage() {
  var p9 = document.getElementById("GGB");
  p9.classList.toggle("show");
}

function tenthImage() {
  var p10 = document.getElementById("GWoC");
  p10.classList.toggle("show");
}

function eleventhImage() {
  var p11 = document.getElementById("MP");
  p11.classList.toggle("show");
}

function twelfthImage() {
  var p12 = document.getElementById("TMh");
  p12.classList.toggle("show");
}

//The amount of places the user has visited is counted at the top right of the screen
		
var a = document.getElementById("a")
var b = 0;

function checkButton(){
	if (b == 0){
		yellow.disabled = true;
		blue.disabled = false;
	}
}
		
console.log(b);		

function addOne(){
	b++;
	a.innerHTML = b + " out of 12 places visited";
	console.log(b);
	checkEquivalence();
	
}

function subtractOne(){
	checkButton();
	b--;
	a.innerHTML = b +  " out of 12 places visited";
	console.log(b);
	checkEquivalence();
	
}

function checkEquivalence(){
	if (b == 12){
		document.getElementById("body").classList.add("airplane");
		flyForward();
		//document.getElementById("body").classList.add("fly-forward");
		//document.getElementById("body").classList.innerHTML = "You're Done!";
		//document.getElementById("body").classList.add("center-vertical");
		//document.getElementById("body").classList.add("contain-image");
	}
}	

var blue = document.getElementById("yes");
var yellow = document.getElementById("no");

function disableYellow(){
	yellow.disabled = true;
	blue.disabled = false;
}

function disableBlue(){
	blue.disabled = true;
	yellow.disabled = false;
}
	

function flyForward(){
	document.getElementById("body").classList.add("fly-forward");
}
