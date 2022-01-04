//alert("Hello");


// Detecting button pressed
var numberOfDrumButtons =document.querySelectorAll(".drum").length;
console.log(numberOfDrumButtons);

for(var i=0;i<numberOfDrumButtons;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click" , function(){       // adding onClick to all buttons rather than applying to one in 7 lines
  //  alert("I got clicked");

//console.log(this.innerHTML);    // this is used to idnetify which button is clicked .innerhtml is used to display it's text
var buttonInnerHtml =this.innerHTML;
makeSound(buttonInnerHtml);
buttonAnimation(buttonInnerHtml);
  });
}


// detecting key pressed
document.addEventListener("keypress",function(event){
  makeSound(event.key);    // to pass which key was pressed as event will return us an object regarding info and .key will get us key
buttonAnimation(event.key);
});

function makeSound(key)
{
  switch (key) {
    case "w":
    {
      var tom1= new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    }
    case "a":
    {
      var tom2= new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    }
    case "s":
    {
      var tom3= new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    }
    case "d":
    {
      var tom4= new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    }
    case "j":
    {
      var snare= new Audio("sounds/snare.mp3");
      snare.play();
      break;
    }
    case "k":
    {
      var crash= new Audio("sounds/crash.mp3");
      crash.play();
      break;
    }
    case "l":
    {
      var kick= new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    }
    default:
    console.log(buttonInnerHtml);

  }
}

function buttonAnimation(currentKey)
{
var activeButton = document.querySelector("." +currentKey);
activeButton.classList.add("pressed");  // adding pressed class so that styles got applied which we defined in css

setTimeout(function(){
  activeButton.classList.remove("pressed");
},100);  // time delay of 0.1 seconds i.e. time we need to wait to perform this acction
}
