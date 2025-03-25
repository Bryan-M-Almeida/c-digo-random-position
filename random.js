function change() {
    //posição aleatória//
    const randomNumber = Math.floor(Math.random() * 120);
    //elemento a trocar de posição//
    document.getElementById("change").style.right = randomNumber * 10 + "px";
    document.getElementById("change").style.top = randomNumber * 2 + "px";

}