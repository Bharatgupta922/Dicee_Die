var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var image1src = "images/dice" + randomNumber1 + ".png";
var image2src = "images/dice" + randomNumber2 + ".png";
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];
image1.setAttribute("src",image1src);
image2.setAttribute("src",image2src);
if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent = "Player1 Won";
}
else {
document.querySelector("h1").textContent = "Player2 Won";  
}
