//Popup boxes appear and disappear
  var p1 = document.getElementById("ET");
  var p2 = document.getElementById("LToP");
  var p3 = document.getElementById("SoL");
  var p4 = document.getElementById("StMB");
  var p5 = document.getElementById("CtR");
  var p6 = document.getElementById("AdT");
  var p7 = document.getElementById("BhP");
  var p8 = document.getElementById("C");
  var p9 = document.getElementById("GGB");
  var p10 = document.getElementById("GWoC");
  var p11 = document.getElementById("MP");
  var p12 = document.getElementById("TMh");

var popups = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12];
//var popups = popups;
//pLen = popups.length; 

//for (i = 0; i < pLen; i++) {
 //popups.classList.toggle("show");
//}
//popups.forEach(popupBox);
//function popupBox() {
// popups.classList.toggle("show");
//}

function firstImage() {
  p1.classList.toggle("show");
}

function secondImage() {
  p2.classList.toggle("show");
}

function thirdImage() {
  p3.classList.toggle("show");
}

function fourthImage() {
  p4.classList.toggle("show");
}

function fifthImage() {
  p5.classList.toggle("show");
}

function sixthImage() {
  p6.classList.toggle("show");
}

function seventhImage() {
  p7.classList.toggle("show");
}

function eighthImage() {
  p8.classList.toggle("show");
}

function ninthImage() {
  p9.classList.toggle("show");
}

function tenthImage() {
  p10.classList.toggle("show");
}

function eleventhImage() {
  p11.classList.toggle("show");
}

function twelfthImage() {
  p12.classList.toggle("show");
}

//The amount of places the user has visited is counted at the top right of the screen		
var a = document.getElementById("a");
var b = 0;

function checkButton(){
	if (b == 0){
		yellow.disabled = true;
		blue.disabled = false;
	}
	else{
		yellow.disabled = false;
		blue.disabled = false;
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
 
var body = document.getElementById("body");
var pic = document.getElementById("pic");
function checkEquivalence(){
	if (b == 12){
		disappearContent();
		pic.classList.add("airplane");
		addText();
		console.log("Success");	
	}
}

function disappearContent(){
	document.getElementById("top").style.display = "none";
	document.getElementById("bottom").style.display = "none";
}

function addText(){
	body.classList.add("h1");
	body.innerHTML = "You're Done!";
	
}

//body.style.display = "block";
//var p = document.createElement("p");
//var text = document.createTextNode("You're done!");
//p.appendChild(text);
//body.appendChild(p);

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
//body.classList.add("fly-forward");
//flyForward();
//body.classList.add("center-vertical");
//document.getElementById("body").classList.add("contain-image");
//body.style.display = "none";
