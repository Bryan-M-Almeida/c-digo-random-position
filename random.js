function change(){
    const randomNumber = Math.floor(Math.random()*120);
    document.getElementById("change").style.right = randomNumber*10 + "px";
    document.getElementById("change").style.top = randomNumber*2 + "px";
  let valor = parseInt(document.getElementById("tamanho").style.width) || 200;
valor += 10;
document.getElementById("tamanho").style.height = `${valor}px`;
document.getElementById("tamanho").style.width = `${valor}px`;
document.getElementById("tamanho").style.right = randomNumber*5/2 + "px";
    document.getElementById("tamanho").style.bottom = randomNumber*5 + "px";
}