function change() {
    const btnNao = document.getElementById("change");
    const maxWidth = window.innerWidth - btnNao.offsetWidth;
    const maxHeight = window.innerHeight - btnNao.offsetHeight;
    
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);
    
    btnNao.style.position = "absolute";
    btnNao.style.left = `${randomX}px`;
    btnNao.style.top = `${randomY}px`;

}