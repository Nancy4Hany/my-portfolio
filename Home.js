 
document.addEventListener("DOMContentLoaded", function() {
    // your code goes here
    const header = document.querySelector("header"); 
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>50)
});
 });

 


 



 