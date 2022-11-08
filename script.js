//html element and selector variables
let p = document.createElement("p");
let h1 = document.querySelector(".header");
let input = document.querySelector(".input");
let userInput;

//declare variable for ghost image
let ghost = document.querySelector(".ghost-image");

//declare variables for all of the buttons
let hide = document.querySelector(".hide-button");
let show = document.querySelector(".show-button");
let update = document.querySelector(".update-img-button");
let message = document.querySelector(".message-button");
let name = document.querySelector(".name-button");


//create an onclick event for the Hide Me button
hide.onclick = function() {  
    console.log("You've clicked on the hide button");
    ghost.style.display = "none";
};

//create an onclick event for the Show Me button
show.onclick = function() {
  console.log("You've clicked on the show button");
  ghost.style.display = "initial";
};

//create an onclick event for the Update Img button
update.onclick = function() {
  console.log("You've clicked on the update button");
  ghost.src = "https://emojipedia-us.s3.amazonaws.com/source/noto-emoji-animations/344/ghost_1f47b.gif";
}


//create an onclick event for the Send Message button
//update the userInput variable by saving the value of the input
//use the insertAdjacentHTML method to append the userInput in a <p> tag



//create an onclick event for the Name Me button
//update the userInput variable by saving the value of the input
//use the innerHTML method to update the h1 tag
