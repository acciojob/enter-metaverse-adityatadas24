//your JS code here. If required.
 function change(){
     const bold = document.getElementById("status");
   
     let currentFontSize = getComputedStyle(bold).fontSize;

     if(currentFontSize == "16px"){
         bold.textContent = "Entered Metaverse",bold.style.fontSize = "30px";
     }
     else{
         bold.style.fontSize = "16px";
     }
 }
