
//Popup boxes appear and disappear
function firstImage() {
  var popup1 = document.getElementById("ET");
  popup1.classList.toggle("show");
}

function secondImage() {
  var popup2 = document.getElementById("LToP");
  popup2.classList.toggle("show");
}

function thirdImage() {
  var popup3 = document.getElementById("SoL");
  popup3.classList.toggle("show");
}

function fourthImage() {
  var popup4 = document.getElementById("StMB");
  popup4.classList.toggle("show");
}

function fifthImage() {
  var popup5 = document.getElementById("CtR");
  popup5.classList.toggle("show");
}

function sixthImage() {
  var popup6 = document.getElementById("AdT");
  popup6.classList.toggle("show");
}

function seventhImage() {
  var popup7 = document.getElementById("BhP");
  popup7.classList.toggle("show");
}

function eighthImage() {
  var popup8 = document.getElementById("C");
  popup8.classList.toggle("show");
}

function ninthImage() {
  var popup9 = document.getElementById("GGB");
  popup9.classList.toggle("show");
}

function tenthImage() {
  var popup10 = document.getElementById("GWoC");
  popup10.classList.toggle("show");
}

function eleventhImage() {
  var popup11 = document.getElementById("MP");
  popup11.classList.toggle("show");
}

function twelfthImage() {
  var popup12 = document.getElementById("TMh");
  popup12.classList.toggle("show");
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
