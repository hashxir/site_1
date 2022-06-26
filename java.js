const btn = document.getElementById("play");




btn.onclick = () => {
    const tudum = new Audio("./tudum.mp3");
    
    tudum.play(); 
}
