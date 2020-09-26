var randomNumber1=1+Math.floor(Math.random()*6);

var random_img1="dice"+randomNumber1+".png";

var random_img_src1="images/"+random_img1;


var img1=document.querySelectorAll("img")[0];

img1.setAttribute("src",random_img_src1);


var randomNumber2=1+Math.floor(Math.random()*6);

var random_img2="dice"+randomNumber2+".png";

var random_img_src2="images/"+random_img2;

var img2=document.querySelectorAll("img")[1];

img2.setAttribute("src",random_img_src2);


//Player winds

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML="🏆 Player 1 wins";
}
else if(randomNumber2 > randomNumber1)
{
document.querySelector("h1").innerHTML="🏆 Player 2 wins";
}
else
{
document.querySelector("h1").innerHTML="Draw!";
}
