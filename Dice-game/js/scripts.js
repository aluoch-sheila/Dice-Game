 function moveDie(){
   var dieOne=document.getElementById("dieOne")
   var dieTwo=document.getElementById("dieTwo")
   // var show
   var D1=Math.floor(Math.random()*6)+1;
   var D2=Math.floor(Math.random()*6)+1;
   var dieTotal=D1+D2;
   dieOne.innerHTML=D1;
   dieTwo.innerHTML=D2;
   show.innerHTML="You moved " + dieTotal +".";
   if( D1 == D2 ){
      show.innerHTML+= " SAME SCORE!,a free turn for you guys!!"
   }
 }
