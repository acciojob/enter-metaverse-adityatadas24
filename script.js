//your JS code here. If required.
function change(){
    const entered = document.getElementById("status");
 
    let currentContent = getComputedStyle(entered).textContent;

    if(currentContent == "Enter the Metaverse"){
        entered.textContent = "entered ";
    }
    else {
        entered.textContent = "Entered Metaverse", entered.style.fontSize = "30px";
    }
}
