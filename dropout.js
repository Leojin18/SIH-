const alertIcon=document.getElementById(" alert-icon");
const alertContainer= document.getElementById("alert-container");
const closeButton= document.getElementById("close-button");

alertIcon.addEventListener("click",function(){

alertContainer.style.display="block";

});

closeButton.addEventListener("click",function(){
closeButton.style.display="none";
});