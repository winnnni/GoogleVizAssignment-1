/**
 * @author
 */
/* I was trying to find currency exchange rate data set, but failed.
 * So I am sticking with the unemployment data from class.
 * I am creating a line chart showing the unemployment rate since 1980.
 */
/*
 * program outline
 * 1. load jQuery (JQuery, Google javascript, then my custom scripts)
 * 2. load custom script file
 * 3. console to test scripts connected
 * 4. add document ready
 * 5. create function activiated on document ready
 * 6. console log in that function
 * 7. load google viz library
 * 8. load data
 * 9. feed data to library and place result on a page
 * 		9.1 format the data in the way that the lib can consume
 * 		9.2 google viz format: arrays in array
 * 		9.3 "observations": date and value
 * 			feed data to lib
 * 			figure out the type of chart I want
 * 			tell library where i want to draw the data
 * 			add options: headline of my chart 
 */
console.log ("The First step");

//USUNEMPLOYMENT is the local name of thejason file i just loaded
//USUNEMPLOYMENT is the name i picked myself, can be any.
function dataLoaded(USUNEMPLOYMENT){
	console.log(USUNEMPLOYMENT);
	
	var myOriginalJobData = USUNEMPLOYMENT.observation;
	//create a new name for my original data set
	
	//I'm trying to construct an array of arrays
	var myRefineData =[];
	
	//i need header to be the first array
	//create a header before the for loop
	var Header = ["Date","Value"];
	myRefine.push(Header);

function googleLoaded(){
	console.log("google loaded");
	
	//
	$.get("UEMP270V_data.json.",dataLoaded,"json");
}

function pageLoaded(){
	
	console.log("got to page loaded");
	
	// load the google viz library
	google.load("visualization", "1", {packages:["corechart"], callback:"googleLoaded"});
	// add call back after the packages
	
}

$(document).ready(pageLoaded);
// get document ready first
