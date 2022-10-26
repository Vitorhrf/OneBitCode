const form = document.getElementById("form-register") //Recebe o form inteiro
const botao = document.getElementById("add-tecnology") //Recebe o botao de adicionar tecnologia
const sectionTec = document.getElementById('tecnologies') //Recebe o elemento Section
let contador = 0 //contador para os IDs das tecnologias

botao.addEventListener('click', function(ev){ //Botão para adicionar tecnologia
    ev.preventDefault() //Metodo para não recarregar a pagina quando acionar o botao

    const divTec = document.createElement('div')//Cria uma div e atribui ela como valor para divTec
    divTec.id = "ID"+contador //Define o id da div para cada vez que adicionar pelo botão, para que os elementos e valores sejam separados

    const labelTec = document.createElement('label')
    labelTec.innerText = "Nome da tecnologia: "
    labelTec.htmlFor = 'input-tecnologia'

    const inputTec = document.createElement('input')
    inputTec.id ='input-tecnologia'

    const radioList1 = document.createElement('input')
    radioList1.type = 'radio'
    radioList1.name = 'periodo'+contador //Possui '+contador' para separar os radios dessa div das outras geradas
    radioList1.id = 'radioList1'+contador //Possui '+contador' para separar o target do label das demais
    radioList1.value = '0 - 2 anos'

    const labelRadioList1 = document.createElement('label')
    labelRadioList1.htmlFor = 'radioList1'+contador
    labelRadioList1.innerText = '0 - 2 anos'

    const radioList2 = document.createElement('input')
    radioList2.type = 'radio'
    radioList2.name = 'periodo'+contador
    radioList2.id = 'radioList2'+contador
    radioList2.value = '3 - 4 anos'

    const labelRadioList2 = document.createElement('label')
    labelRadioList2.htmlFor = 'radioList2'+contador
    labelRadioList2.innerText = '3 - 4 anos'

    const radioList3 = document.createElement('input')
    radioList3.type = 'radio'
    radioList3.name = 'periodo'+contador
    radioList3.id = 'radioList3'+contador
    radioList3.value = '5+ anos'

    const labelRadioList3 = document.createElement('label')
    labelRadioList3.htmlFor = 'radioList3'+contador
    labelRadioList3.innerText = '5+ anos'

    //Adiciona todos os elementos de input na div para aparecer na tela html
    divTec.appendChild(labelTec)
    divTec.appendChild(inputTec)
    divTec.appendChild(labelRadioList1)
    divTec.appendChild(radioList1)
    divTec.appendChild(labelRadioList2)
    divTec.appendChild(radioList2)
    divTec.appendChild(labelRadioList3)
    divTec.appendChild(radioList3)

    const botaoExcluir = document.createElement('button')
    botaoExcluir.innerHTML = "Remover essa tecnologia"
    botaoExcluir.id = "ID"+contador //Possui ID proprio para excluir somente a div parente a esse botão
    
    divTec.appendChild(botaoExcluir) //Adiciona o botao de excluir na div dos inputs de tecnologias
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

    //For para percorrer todas as linhas de inputs das tecnologias e salvar os dados na variavel tecnologias
    for(let n = 0; n < sectionTec.querySelectorAll('div').length;n++){
        const idTecnologia = "#ID"+n+" > input[name='periodo"+n+"']:checked" //Variavel criada para ser o valor de busca no querySelector
        const idNomeTec = "#ID"+n+" > input[id='input-tecnologia']" //Variavel criada para ser o valor de busca no querySelector
        tecnologias.push("\nNome da Tecnologia: "+sectionTec.querySelector(idNomeTec).value+"\nPeriodo: "+sectionTec.querySelector(idTecnologia).value+"\n")
    }
    const nome = document.getElementById("name").value
    tecnologias = tecnologias.join("") //Transforma a lista em uma unica String separados por ""
    alert("Nome do Dev: "+nome+"\n\nTecnologias: "+tecnologias)

})