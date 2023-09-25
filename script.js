//your JS code here. If required.
function change(){
    const bold = document.getElementById("status");
 
    let currentContent = getComputedStyle(bold).textContent;

    if(currentContent == "Enter the Metaverse"){
        bold.textContent = "entered ";
    }
    else{
        bold.textContent = "Entered Metaverse", bold.style.fontWeight = " bolder";
    }
}
