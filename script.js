const botaoPlayPause = document.getElementById('play-pause');
const botaoProximocapitulo = document.getElementById('proximo');
const botaoCapituloAnterior = document.getElementById('anterior');
const textoCapitulo = document.getElementById('Capitulo');
const audio = document.getElementById('audio-capitulo');
const qtdCapitulos = 10;

let taTocando = false;
let capituloAtual = 1;
// console.log(botaoPlayPause);

function tocarfaixa() {
console.log('clicou');
audio.play();
taTocando = true;
console.log("Deu Play");

botaoPlayPause.classList.add('tocando');
}

function pausarfaixa(){
console.log('clicou');
audio. pause();
taTocando = false;
console.log("Deu Pause");

botaoPlayPause.classList.remove('tocando');
}

function tocarOuPausar(){
if (taTocando === true){
    pausarfaixa();
} else {
    tocarfaixa();

}
}
function proximoCapitulo() {
    pausarfaixa();
if (capituloAtual < qtdCapitulos) {
    capituloAtual = capituloAtual + 1;
} else {
    capituloAtual = 1;  
}

audio.src = "/audios/" + capituloAtual + ".mp3";
textoCapitulo.innerText = "Capitulo" + capituloAtual;
}

function capituloAnterior() {
    pausarfaixa();
if (capituloAtual === 1) {
    capituloAtual = qtdCapitulos; 
} else {
    capituloAtual = capituloAtual - 1; 
} 

audio.src = "/audios/" + capituloAtual + ".mp3";
textoCapitulo.innerText = "Capitulo" + capituloAtual;

}



botaoPlayPause.addEventListener ('click', tocarOuPausar);
botaoProximocapitulo.addEventListener ('click', proximoCapitulo);
botaoCapituloAnterior.addEventListener ('click', capituloAnterior);



