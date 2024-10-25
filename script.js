const botao = document.getElementById("caixa-botao");
const caixalista = document.getElementById("lista");

function adicionarTarefa(){
if(botao.value == ''){
    alert("Digite alguma tarefa!!!");
} else {
let li = document.createElement("li");
li.innerHTML = botao.value;
caixalista.appendChild(li);

let span = document.createElement("span");
span.innerHTML = "\u00d7";
li.appendChild(span);
}
botao.value = "";
saveData();
}

caixalista.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checado");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", lista.innerHTML);
}

function mostrarTarefa(){
    caixalista.innerHTML = localStorage.getItem("data");
}

mostrarTarefa();