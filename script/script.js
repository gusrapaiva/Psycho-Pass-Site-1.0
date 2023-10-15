window.onload = function()
{
   var slideIndex = 0;

   let aba = document.getElementsByClassName("aba");
   let mobaba = document.getElementsByClassName("mobaba");
   let btn = document.getElementById('vmais');

   

   aba[0].onclick = function() {
      slideIndex = 0 
      slider()}

   aba[1].onclick = function() {
      slideIndex = 1
      slider()}
   btn.onclick = function() {
      slideIndex = 1
      slider()}


   aba[2].onclick = function() {
      slideIndex = 2
      slider()}


   aba[3].onclick = function() {
      slideIndex = 3
      slider()}

   aba[4].onclick = function() {
      slideIndex = 4
      slider()}
   


   mobaba[0].onclick = function() {
      slideIndex = 0 
      slider()}

   mobaba[1].onclick = function() {
      slideIndex = 1
      slider()}

   mobaba[2].onclick = function() {
      slideIndex = 2
      slider()}

   mobaba[3].onclick = function() {
      slideIndex = 3
      slider()}

   mobaba[4].onclick = function() {
      slideIndex = 4
      slider()}
      
   
   function slider(n)
   {
      let slide = document.getElementsByClassName("slide");
      let slides = (document.getElementsByClassName("slide").length)-1;
   
      for(x = 0; x <= slides; x++)
      {
         slide[x].style.display = "none";
      }
      slide[slideIndex].style.display = "block"
   }

}



