function createLabel(text, htmlFor){ //Prototipo para gerar label 
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerHTML = text
    return label
}
function createInput(id, value, name, type = "text", be){ //Prototipo para gerar input
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    return input
}


const form = document.getElementById("form-register") //Recebe o form inteiro
const botao = document.getElementById("add-tecnology") //Recebe o botao de adicionar tecnologia
const sectionTec = document.getElementById('tecnologies') //Recebe o elemento Section
let contador = 0 //contador para os IDs das tecnologias

botao.addEventListener('click', function(ev){ //Botão para adicionar tecnologia
    ev.preventDefault() //Metodo para não recarregar a pagina quando acionar o botao

    const divTec = document.createElement('div')//Cria uma div e atribui ela como valor para divTec
    divTec.id = "ID"+contador //Define o id da div para cada vez que adicionar pelo botão, para que os elementos e valores sejam separados

    const labelTec = createLabel("Nome da tecnologia", "input-tecnologia")
    const inputTec = createInput('input-tecnologia',null,'input-tecnologia')

    const idRadio1 = 'radioList1'+contador//Possui '+contador' para separar os radios dessa div das outras geradas
    const radioList1 = createInput(idRadio1, '0 - 2 anos', 'periodo'+contador,'radio')
    const labelRadioList1 = createLabel("0 - 2 anos", idRadio1)

    const idRadio2 = 'radioList2'+contador
    const radioList2 = createInput(idRadio2, '3 - 4 anos', 'periodo'+contador,'radio')
    const labelRadioList2 = createLabel("3 - 4 anos", idRadio2)

    const idRadio3 = 'radioList3'+contador
    const radioList3 = createInput(idRadio3, '5+ anos', 'periodo'+contador,'radio')
    const labelRadioList3 = createLabel("5+ anos", idRadio3)

    //Adiciona todos os elementos de input na div para aparecer na tela html
    
    const botaoExcluir = document.createElement('button')
    botaoExcluir.innerHTML = "Remover essa tecnologia"
    botaoExcluir.id = "ID"+contador //Possui ID proprio para excluir somente a div parente a esse botão
    
    divTec.append(
        labelTec, inputTec, labelRadioList1, radioList1, labelRadioList2, radioList2, labelRadioList3, radioList3, botaoExcluir
    )
    sectionTec.appendChild(divTec) //Adiciona a Div de tecnologias na seção
    
    //Evento para acionar o botão de excluir a linha de input
    botaoExcluir.addEventListener('click', function(ev){
        const removedor = document.getElementById(this.id)
        sectionTec.removeChild(removedor)
    })
    contador ++ //Incrementador para o contador mudar para a proxima linha de input a ser adicionada
    
})

//Evento para quando o botão de submit for acionado
form.addEventListener('submit', function(ev){

    ev.preventDefault() //Metodo para não recarregar a pagina quando acionado o evento
    let tecnologias = [] //Gerado a variavel para armazenar todos os dados das tecnologias para imprimir na tela
    let n = 0

    //For para percorrer todas as linhas de inputs das tecnologias e salvar os dados na variavel tecnologias
    sectionTec.querySelectorAll('div').forEach(function(row){
        tecnologias.push("\nNome da Tecnologia: "+sectionTec.querySelector("#"+row.id+" > input[id='input-tecnologia']").value+"\nPeriodo: "+sectionTec.querySelector("#"+row.id+" > input[name='periodo"+n+"']:checked").value+"\n")
        n++
    })
    
    const nome = document.getElementById("name").value
    tecnologias = tecnologias.join("") //Transforma a lista em uma unica String separados por ""
    alert("Nome do Dev: "+nome+"\n\nTecnologias: "+tecnologias)

})