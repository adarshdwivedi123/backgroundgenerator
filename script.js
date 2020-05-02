var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
 var color2=document.querySelector(".color2");
 var body=document.getElementById("gradient");
 function setGradients(){
body.style.background=    // with the help of style we change color 
 	"linear-gradient(to right,"
 	+ color1.value
 	+ " ,"
 	+ color2.value
    + ")";

    css.textContent=body.style.background + ";";
 	

 }
 
 color1.addEventListener("input",setGradients); //here we want every we select whenit callso don< use input
 color2.addEventListener("input",setGradients);