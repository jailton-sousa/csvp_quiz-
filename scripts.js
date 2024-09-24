function game(){

let perguntas = document.getElementById("pergunta")
let resposta1 = document.getElementById("resposta1")
let resposta2 = document.getElementById("resposta2")
let resposta3 = document.getElementById("resposta3")
let resposta4 = document.getElementById("resposta4")
let respostas = document.getElementsByName("res")
const finish = document.getElementById("finish")
const jogardenovo = document.getElementById("jogardenovo")
let pontos = document.getElementById("pts")
const quadrodeperguntas = document.getElementById("quadrodeperguntas")
let npergunta = document.getElementById("npergunta")
let nivel = document.getElementById("nivel")
let playername = document.getElementById("playername")
let playernameinp = document.getElementById("playernameinput")
let começar = document.getElementById("começar")
let nameplayer = document.getElementById("name")
let bar = document.getElementById("bar")
let bardiv = document.getElementById("bardiv")
let porcentagem = document.getElementById("porcentagem")
let quadrodequizes = document.getElementById("quadrodequizes")
const medicinebutton = document.getElementById("medicine")
const conhecimentobutton = document.getElementById("conhecimento")
let medicinecheckbox = document.getElementById("medicinecheckbox")
let conhecimentocheckbox = document.getElementById("conhecimentocheckbox")
let matematicacheckbox = document.getElementById("matematicacheckbox")
const matematicabutton = document.getElementById("matematicabutton")
let inicio = document.getElementById("voltarinicio")
let titulo = document.getElementById("titulo")


quadrodeperguntas.style.display = "none"

playernameinp.focus()
playernameinp.click()

jogardenovo.addEventListener("click", jogarnovamente)

inicio.addEventListener("click", () =>escolherquiz())
    
playernameinp.addEventListener("keypress", event =>{

  if (event.key === "Enter") {
 
    event.preventDefault();
 
    inicio.click();
  }
});

let sobreocsvpcheckbox = document.getElementById("sobreocsvpcheckbox")
const sobreocsvpbutton = document.getElementById("sobreocsvpbutton")

sobreocsvpbutton.addEventListener("click", () =>{
    sobreocsvpcheckbox.checked = true
    jogarnovamente()
})

medicinebutton.addEventListener("click", () =>{
    medicinecheckbox.checked = true
    jogarnovamente()
})

conhecimentobutton.addEventListener("click", () =>{
    conhecimentocheckbox.checked = true
    jogarnovamente()
})

matematicabutton.addEventListener("click", () =>{
    matematicacheckbox.checked = true
    jogarnovamente()
})

let mark = document.querySelector(".mark")

mark.addEventListener("click", escolherquiz)

começar.addEventListener("click", escolherquiz)

function createtamplate(){

let alternativespan4 = document.createElement("span")
alternativespan4.textContent = "D"
alternativespan4.classList.add("alternative4")
resposta4.appendChild(alternativespan4)    

let alternativespan3 = document.createElement("span")
alternativespan3.textContent = "C"
alternativespan3.classList.add("alternative3")
resposta3.appendChild(alternativespan3)   

let alternativespan2 = document.createElement("span")
alternativespan2.textContent = "B"
alternativespan2.classList.add("alternative2")
resposta2.appendChild(alternativespan2)


let alternativespan = document.createElement("span")
alternativespan.textContent = "A"
alternativespan.classList.add("alternative")
resposta1.appendChild(alternativespan)

}

let quizes = [

{
    pergunta: "Pergunta 1",
    primeiraresposta: "Resposta a",
    segundaresposta: "Resposta Certa",
    terceiraresposta: "Resposta Errada",
    quartaresposta: "Resposta ", 
    respostacerta: "Resposta Certa", 
          
},

{
    pergunta: "Pergunta 2",
    primeiraresposta: "Resposta a",
    segundaresposta: "Resposta Certa",
    terceiraresposta: "Resposta Errada",
    quartaresposta: "Resposta ", 
    respostacerta: "Resposta Certa", 


},

{
    pergunta: "Pergunta 3",
    primeiraresposta: "Resposta a",
    segundaresposta: "Resposta Certa",
    terceiraresposta: "Resposta Errada",
    quartaresposta: "Resposta ", 
    respostacerta: "Resposta Certa", 
          
},

{
    pergunta: "Pergunta 4",
    primeiraresposta: "Resposta a",
    segundaresposta: "Resposta Certa",
    terceiraresposta: "Resposta Errada",
    quartaresposta: "Resposta ", 
    respostacerta: "Resposta Certa", 
          
},

{
    pergunta: "Pergunta ",
    primeiraresposta: "Resposta a",
    segundaresposta: "Resposta Certa",
    terceiraresposta: "Resposta Errada",
    quartaresposta: "Resposta ", 
    respostacerta: "Resposta Certa", 
          
},

{
    pergunta: "Pergunta ",
    primeiraresposta: "Resposta a",
    segundaresposta: "Resposta Certa",
    terceiraresposta: "Resposta Errada",
    quartaresposta: "Resposta ", 
    respostacerta: "Resposta Certa", 
          
},

{
    pergunta: "Pergunta ",
    primeiraresposta: "Resposta a",
    segundaresposta: "Resposta Certa",
    terceiraresposta: "Resposta Errada",
    quartaresposta: "Resposta ", 
    respostacerta: "Resposta Certa",  
          
},

{
    pergunta: "Pergunta ",
    primeiraresposta: "Resposta a",
    segundaresposta: "Resposta Certa",
    terceiraresposta: "Resposta Errada",
    quartaresposta: "Resposta ", 
    respostacerta: "Resposta Certa",  
          
},

{
    pergunta: "Pergunta ",
    primeiraresposta: "Resposta a",
    segundaresposta: "Resposta Certa",
    terceiraresposta: "Resposta Errada",
    quartaresposta: "Resposta ", 
    respostacerta: "Resposta Certa", 
          
},

{
    pergunta: "Pergunta ",
    primeiraresposta: "Resposta a",
    segundaresposta: "Resposta Certa",
    terceiraresposta: "Resposta Errada",
    quartaresposta: "Resposta ", 
    respostacerta: "Resposta Certa", 
          
},

]

let sobreocsvp = [
   
{
    pergunta: "Qual o dia, mês e ano que aconteceu a inauguração oficial do Colégio São Vicente de Paulo?",
    primeiraresposta: "19 de julho de 1959",
    segundaresposta: "30 de março de 1959",
    terceiraresposta: "15 de março de 1960",
    quartaresposta: "30 de fevereiro de 1959", 
    respostacerta: "19 de julho de 1959", 
          
},

{
    pergunta: "EM 1973 foi criada e lançada pela Associação de Pais e Mestre uma Revista que resgistra e publica tudo o que acontece de mais relevante na vida do Colégio. Qual o nome dessa Revista?",
    primeiraresposta: "Revista Vicentinho",
    segundaresposta: "Revista Tino Informa",
    terceiraresposta: "Revista A Chama",
    quartaresposta: "Revista Dicas do Tino",
    respostacerta: "Revista A Chama"


},

{
    pergunta: "Somos 2 professoras nos laboratórios de Informática. Qual o nome dessas professoras?",
    primeiraresposta: `Bia e Caca`,
    segundaresposta: `Mariazinha e Carla`,
    terceiraresposta: `Mônica e Marcely`,
    quartaresposta: `Claudinha e Babi`, 
    respostacerta: `Bia e Caca`,
          
},

{
    pergunta: "Pergunta 3",
    primeiraresposta: "Resposta a",
    segundaresposta: "Resposta mais ou menos",
    terceiraresposta: "Resposta Errada",
    quartaresposta: "Resposta Certa", 
    respostacerta: "Resposta Certa",  
          
},

{
    pergunta: "Pergunta 4",
    primeiraresposta: "Resposta Certa",
    segundaresposta: "Resposta",
    terceiraresposta: "Resposta Errada",
    quartaresposta: "Resposta não sei", 
    respostacerta: "Resposta Certa",  
          
},

{
    pergunta: "Pergunta ",
    primeiraresposta: "Resposta a",
    segundaresposta: "Resposta chute",
    terceiraresposta: "Resposta Errada",
    quartaresposta: "Resposta Certa", 
    respostacerta: "Resposta Certa",  
          
},

{
    pergunta: "Pergunta ",
    primeiraresposta: "Resposta a",
    segundaresposta: "Resposta será?",
    terceiraresposta: "Resposta Errada",
    quartaresposta: "Resposta Certa ", 
    respostacerta: "Resposta Certa",  
          
},

{
    pergunta: "Pergunta ",
    primeiraresposta: "Resposta a",
    segundaresposta: "Resposta Certa",
    terceiraresposta: "Resposta Errada",
    quartaresposta: "Resposta ", 
    respostacerta: "Resposta Certa",  
          
},

{
    pergunta: "Pergunta ",
    primeiraresposta: "Resposta a",
    segundaresposta: "Resposta Certa",
    terceiraresposta: "Resposta Errada",
    quartaresposta: "Resposta ", 
    respostacerta: "Resposta Certa",  
          
},

{
    pergunta: "Pergunta ",
    primeiraresposta: "Resposta a",
    segundaresposta: "Resposta Certa",
    terceiraresposta: "Resposta Errada",
    quartaresposta: "Resposta ", 
    respostacerta: "Resposta Certa",  
          
},
]

let quizesconhecimentosgerais = [
   
{
    pergunta: "Pergunta ",
    primeiraresposta: "Resposta a",
    segundaresposta: "Resposta Certa",
    terceiraresposta: "Resposta Errada",
    quartaresposta: "Resposta ", 
    respostacerta: "Resposta Certa", 
           
},

{
    pergunta: "Pergunta ",
    primeiraresposta: "Resposta a",
    segundaresposta: "Resposta Certa",
    terceiraresposta: "Resposta Errada",
    quartaresposta: "Resposta ", 
    respostacerta: "Resposta Certa", 


},

{
    pergunta: "Pergunta ",
    primeiraresposta: "Resposta a",
    segundaresposta: "Resposta Certa",
    terceiraresposta: "Resposta Errada",
    quartaresposta: "Resposta ", 
    respostacerta: "Resposta Certa", 
          
},

{
    pergunta: "Pergunta ",
    primeiraresposta: "Resposta a",
    segundaresposta: "Resposta Certa",
    terceiraresposta: "Resposta Errada",
    quartaresposta: "Resposta ", 
    respostacerta: "Resposta Certa",  
          
},

{
    pergunta: "Pergunta ",
    primeiraresposta: "Resposta a",
    segundaresposta: "Resposta Certa",
    terceiraresposta: "Resposta Errada",
    quartaresposta: "Resposta ", 
    respostacerta: "Resposta Certa",  
          
},

{
    pergunta: "Pergunta ",
    primeiraresposta: "Resposta a",
    segundaresposta: "Resposta Certa",
    terceiraresposta: "Resposta Errada",
    quartaresposta: "Resposta ", 
    respostacerta: "Resposta Certa",  
          
},

{
    pergunta: "Pergunta ",
    primeiraresposta: "Resposta a",
    segundaresposta: "Resposta Certa",
    terceiraresposta: "Resposta Errada",
    quartaresposta: "Resposta ", 
    respostacerta: "Resposta Certa",  
          
},

{
    pergunta: "Pergunta ",
    primeiraresposta: "Resposta a",
    segundaresposta: "Resposta Certa",
    terceiraresposta: "Resposta Errada",
    quartaresposta: "Resposta ", 
    respostacerta: "Resposta Certa",  
          
},

{
    pergunta: "Pergunta ",
    primeiraresposta: "Resposta a",
    segundaresposta: "Resposta Certa",
    terceiraresposta: "Resposta Errada",
    quartaresposta: "Resposta ", 
    respostacerta: "Resposta Certa", 
          
},

{
    pergunta: "Pergunta ",
    primeiraresposta: "Resposta a",
    segundaresposta: "Resposta Certa",
    terceiraresposta: "Resposta Errada",
    quartaresposta: "Resposta ", 
    respostacerta: "Resposta Certa", 
          
},
]

let quizesmatematica = [
   
    {
        pergunta: "Pergunta ",
        primeiraresposta: "Resposta a",
        segundaresposta: "Resposta Certa",
        terceiraresposta: "Resposta Errada",
        quartaresposta: "Resposta ", 
        respostacerta: "Resposta Certa",  
              
    },
    
    {
        pergunta: "Pergunta ",
        primeiraresposta: "Resposta a",
        segundaresposta: "Resposta Certa",
        terceiraresposta: "Resposta Errada",
        quartaresposta: "Resposta ", 
        respostacerta: "Resposta Certa", 
    
    
    },
    
    {
        pergunta: "Pergunta ",
        primeiraresposta: "Resposta a",
        segundaresposta: "Resposta Certa",
        terceiraresposta: "Resposta Errada",
        quartaresposta: "Resposta ", 
        respostacerta: "Resposta Certa", 
              
    },
    
    {
        pergunta: "Pergunta ",
        primeiraresposta: "Resposta a",
        segundaresposta: "Resposta Certa",
        terceiraresposta: "Resposta Errada",
        quartaresposta: "Resposta ", 
        respostacerta: "Resposta Certa", 
              
    },
    
    {
        pergunta: "Pergunta ",
        primeiraresposta: "Resposta a",
        segundaresposta: "Resposta Certa",
        terceiraresposta: "Resposta Errada",
        quartaresposta: "Resposta ", 
        respostacerta: "Resposta Certa", 
              
    },
    
    {
        pergunta: "Pergunta ",
        primeiraresposta: "Resposta a",
        segundaresposta: "Resposta Certa",
        terceiraresposta: "Resposta Errada",
        quartaresposta: "Resposta ", 
        respostacerta: "Resposta Certa", 
              
    },
    
    {
        pergunta: "Pergunta ",
        primeiraresposta: "Resposta a",
        segundaresposta: "Resposta Certa",
        terceiraresposta: "Resposta Errada",
        quartaresposta: "Resposta ", 
        respostacerta: "Resposta Certa", 
              
    },
    
    {
        pergunta: "Pergunta ",
        primeiraresposta: "Resposta a",
        segundaresposta: "Resposta Certa",
        terceiraresposta: "Resposta Errada",
        quartaresposta: "Resposta ", 
        respostacerta: "Resposta Certa", 
              
    },
    
    {
        pergunta: "Pergunta ",
        primeiraresposta: "Resposta a",
        segundaresposta: "Resposta Certa",
        terceiraresposta: "Resposta Errada",
        quartaresposta: "Resposta ", 
        respostacerta: "Resposta Certa",  
              
    },
    
    {
        pergunta: "Pergunta ",
        primeiraresposta: "Resposta a",
        segundaresposta: "Resposta Certa",
        terceiraresposta: "Resposta Errada",
        quartaresposta: "Resposta ", 
        respostacerta: "Resposta Certa", 
              
    },
]
    
let i = 0
let progresso = 0

function verificarresposta(resposta, letra){

quadrodeperguntas.style.pointerEvents = "none"
mark.style.pointerEvents = "none"

if(resposta.textContent == quizes[i].respostacerta + `${letra}` || 
resposta.textContent == quizesconhecimentosgerais[i].respostacerta + `${letra}` || 
resposta.textContent == sobreocsvp[i].respostacerta + `${letra}` ||
resposta.textContent == quizesmatematica[i].respostacerta + `${letra}` ){
        
    resposta.setAttribute("style", "background-Color: greenyellow")
    quadrodeperguntas.classList.add("reset")

       setTimeout(() => {
       acertou()
}, "2000")

   }else{
       resposta.style.backgroundColor = "rgb(243, 82, 82)"
       quadrodeperguntas.classList.add("shakeerror")
        setTimeout(() => {
        errou()
        }, "2000")
        }
}

resposta1.addEventListener("click", () =>{

verificarresposta(resposta1, "A")

})

resposta2.addEventListener("click", () =>{

    verificarresposta(resposta2, "B")
})

resposta3.addEventListener("click", () =>{

    verificarresposta(resposta3, "C")
})

resposta4.addEventListener("click", () =>{

    verificarresposta(resposta4, "D")

})



function escolherquiz(){
    quadrodeperguntas.style.display = "none"
    bardiv.style.display = "none"
    getstatus()
   
    quadrodequizes.style.top = "150%"

    if(playernameinp.value ==""){
        playernameinp.classList.add("your-class")
          playernameinp.placeholder = "Digite um nome"
         
            playernameinp.setAttribute("style", "animation: arrowanimation .2s ease ")
            setTimeout(() =>{
                playernameinp.removeAttribute("style", "animation: arrowanimation")
            },500)
    return
}

    
    porcentagem.style.visibility = "hidden"

    titulo.style.display = "block"
    titulo.innerHTML = `Vamos começar<br> Escolha sobre o que você quer responder  &#128516`
   
    finish.classList.add("finishoff")

    finish.classList.remove("finishon")

    sobreocsvpcheckbox.checked = false
    medicinecheckbox.checked = false
    conhecimentocheckbox.checked = false
    matematicacheckbox.checked = false
    quadrodequizes.style.visibility = "visible"
    quadrodequizes.classList.add("quadrodequizesanimado")
    quadrodequizes.style.display = "grid"
   
    playername.classList.add("playernameoff")

}

function jogarnovamente(){

quadrodequizes.classList.remove("quadrodequizesanimado")
quadrodequizes.classList.add("playernameoff")
quadrodequizes.style.visibility = "hidden"

progresso = 0
bar.setAttribute("style", "width: 0%")


if(playernameinp.value ==""){
    playernameinp.placehoder = ""
    return
}

setTimeout(() => {
    bardiv.style.display = "block"
    porcentagem.style.visibility = "visible"
}, 800);

playername.classList.add("playernameoff")

setTimeout(() => {
    quadrodeperguntas.style.display = ""
    playername.classList.remove("finishon")

  }, "500")

  finish.classList.add("finishoff")

  finish.classList.remove("finishon")

pts = 0
 i = 0
 resetgame()
 createtamplate()

 resposta1.classList.remove("resposta11")
 resposta2.classList.remove("resposta11")
 resposta3.classList.remove("resposta11")
 resposta4.classList.remove("resposta11")

}

let pts = 0

function acertou(){

progresso += 10

bar.style.animation = ""
  
resetgame()

i++
pts += 1

if(i == quizes.length){

   finishevent()
}

resetgame()
createtamplate()

}

function errou(){

progresso += 10

resetgame() 
   
i++


if(i == quizes.length){

    finishevent()
    
}

resetgame()
createtamplate()

}

function resetgame(){

quadrodequizes.style.top = "0%"

setTimeout(() =>{
    porcentagem.style.display = "block"
},480)

window.scrollTo(0, 0)

function animateValue(obj, start, end, duration) {
    
  let startTimestamp = null;

  const step = (timestamp) => {

    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start) + "% Completo";
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

animateValue(porcentagem, progresso - 10, progresso, 500);


sobreocsvpcheckbox.checked ? tipodoquiz(sobreocsvp) : ""
medicinecheckbox.checked ? tipodoquiz(quizes) : ""
conhecimentocheckbox.checked ? tipodoquiz(quizesconhecimentosgerais) : ""
matematicacheckbox.checked ? tipodoquiz(quizesmatematica) : ""


function tipodoquiz(tipo){
pergunta.innerHTML = `<h1>${tipo[i].pergunta}</h1>`
resposta1.innerText = tipo[i].primeiraresposta
resposta2.innerHTML = tipo[i].segundaresposta
resposta3.innerText = tipo[i].terceiraresposta
resposta4.innerText = tipo[i].quartaresposta

}

bar.setAttribute("style", "width:" + progresso + "%")
resposta1.style.backgroundColor = ""
resposta2.style.backgroundColor = ""
resposta3.style.backgroundColor = ""
resposta4.style.backgroundColor = ""
quadrodeperguntas.style.pointerEvents = ""
titulo.style.display = "none"
quadrodeperguntas.classList.remove("shakeerror")
quadrodeperguntas.classList.remove("reset")
npergunta.innerText = i+1
mark.style.pointerEvents = "all"

}

function finishevent(){

    setstatus()

if(pts <= 4){

nivel.innerHTML = "Não foi muito bem dessa vez &#128549"

}else if(pts >4 & pts <= 6){

nivel.innerHTML = "Você está quase lá &#128533"

}else if(pts >6 & pts <= 9){

nivel.innerHTML = "Foi muito bem! &#128513"

}else if(pts == 10){

nivel.innerHTML = `Uau, você sobe tudo sobre o CSVP! &#x1F62F`

}

nameplayer.innerText = playernameinp.value

quadrodeperguntas.style.display = "none"

finish.classList.remove("finishoff")
finish.classList.add("finishon")
pontos.innerText = `${pts}/10`

nivel.innerText += 


resetgame()


}

function setstatus(){

    if(i==10){
        
        
        if(sobreocsvpcheckbox.checked){
        localStorage.setItem("status0", "Quiz completo ✔")
        let status0 = localStorage.getItem("status0")
       document.getElementsByClassName("status")[0].innerText = status0
    }if(medicinecheckbox.checked){
        localStorage.setItem("status1", "Quiz completo ✔")
        let status1 = localStorage.getItem("status1")
        document.getElementsByClassName("status")[1].innerText = status1
    }else  if(conhecimentocheckbox.checked){
        localStorage.setItem("status2", "Quiz completo ✔")
        let status2 = localStorage.getItem("status2")
        document.getElementsByClassName("status")[2].innerText = status2
    }else  if(matematicacheckbox.checked){
        localStorage.setItem("status3", "Quiz completo ✔")
        let status3 = localStorage.getItem("status3")
        document.getElementsByClassName("status")[3].innerText = status3
    }
        
    }
    
    
}

function getstatus(){

for(i=0;i<=3;i++){

let statusgeral = localStorage.getItem(`status${[i]}`)

let getstatus = document.getElementsByClassName("status")[i].innerText = statusgeral


}

}

}

game()