const relogio = document.querySelector("#relogio");
const botaoIniciar = document.querySelector("#iniciar");
const botaoPausar = document.querySelector("#pausar");
const botaoZerar = document.querySelector("#zerar");
let segundos = 0
let timer;

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000)
}
function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR",{
        hour12: false,
        timeZone: "UTC"
    })
}

botaoIniciar.addEventListener("click", function(){
    relogio.classList.remove("pausado")
    clearInterval(timer)
    iniciaRelogio()
})
botaoPausar.addEventListener("click", function(){
    relogio.classList.add("pausado")
    clearInterval(timer)
})
botaoZerar.addEventListener("click", function(){
    relogio.classList.remove("pausado")
    clearInterval(timer)
    relogio.innerHTML = "00:00:00"
    segundos = 0
})
