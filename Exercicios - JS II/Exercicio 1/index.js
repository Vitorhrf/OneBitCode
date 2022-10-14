function limparDados(){
   document.getElementById("position").value=""
   document.getElementById("name").value=""
   document.getElementById("number").value=""
}
function escalarJogador(){

    const escalacao = document.getElementById("escalacao-list")
    
    
    const ul = document.createElement("ul")
    ul.id = "N"+document.querySelector("#number").value
    

    const positionLi = document.createElement("li")
    positionLi.innerText = "Posição - " + document.querySelector("#position").value

    const nameLi = document.createElement("li")
    nameLi.innerText = "Nome - " + document.querySelector("#name").value
    
    const numberLi = document.createElement("li")
    numberLi.innerText = "Camisa número - " + document.querySelector("#number").value

    
    if (confirm("Deseja confirmar a escalação do "+document.querySelector("#name").value+"?") == true){
        ul.appendChild(positionLi)
        ul.appendChild(nameLi)
        ul.appendChild(numberLi)
        escalacao.appendChild(ul)
    }
    limparDados()
}

function removerJogador(){
    const camisa = "N"+prompt("Digite a camisa do jogador que deseja excluir: ")
    const escalacao = document.getElementById("escalacao-list")
    const jogador = document.getElementById(camisa)
    if(confirm("Deseja confirmar a exclusão do jogador camisa "+(camisa)+"?")){
        escalacao.removeChild(jogador)
    }
    limparDados()
}