//Variaveis globais
let opcao = 0
const vagas = []

//Funções
function menu(){
    let acao = Number(prompt("Vagas de emprego\n\n"+
    "Selecione uma das opções abaixo:\n"+
    "1 - Listar vagas disponíveis\n"+
    "2 - Criar uma nova vaga\n"+
    "3 - Visualizar uma vaga\n"+
    "4 - Inscrever um candidato em uma vaga\n"+
    "5 - Excluir uma vaga\n"+
    "6 - Sair"))
    return acao
}

function listarVagas(){
    let lista = ""
    if(vagas.length===0){
        return alert("No momento não possuimos vagas disponiveis!")
    }
    else if(vagas.length>0){
        vagas.forEach(function (elemento,index){
            lista += "Indice: "+index+"\nNome da vaga: "+elemento.nome+"\nQuantidade de candidatos inscritos: "+elemento.candidatos.length+"\n\n"
        })
        return alert(lista)
    }
}

function cadastrarVaga(){
    const vaga = {}
    vaga.nome = prompt("Digite o nome da vaga:")
    vaga.descricao = prompt("Digite a descrição da vaga:")
    vaga.dataLimite = prompt("Digite a data limite:")
    vaga.candidatos = []
    if(confirm("Deseja confirmar as informações inseridas?\n\nNome da vaga: "+vaga.nome+"\nDescrição: "+vaga.descricao+"\nData limite: "+vaga.dataLimite)){
        vagas.push(vaga)
        alert("Vaga criada com sucesso!")
    }else{
        alert("Retornando ao menu!")
    }
}

function cadastrarCandidato(){
    let candidato = ""
    let indice
    if(vagas.length===0){
        return alert("No momento não possuimos vagas disponiveis!")
    }
    do{
        indice = Number(prompt("Digite o indice da vaga:"))
        if(indice !== undefined && vagas[indice]){
            candidato = prompt("Digite o nome do candidato:")
            if(confirm("Deseja confirmar as informações inseridas?\n\nIndice da vaga: "+indice+"\nNome do candidato: "+candidato)){
                vagas[indice].candidatos.push(candidato)
                alert("Candidato cadastrado com sucesso!")
            }else{
                alert("Retornando ao menu!")
            }
            break
        }
        else if(indice === -1){
            alert("Retornando ao menu!")
            break
        }
        else if(indice === -2){
            alert(listarVagas())
        }
        else{
            alert("Digite um valor valido!\n\nCaso queira retornar ao menu insira o valor '-1'\nCaso deseje rever a lista das vagas digite '-2'")
    
        }
    }while(indice !== -1);
}

function visualizarVagas(){
    let nomeCandidatos
    let indice = 0
    if(vagas.length===0){
        return alert("No momento não possuimos vagas disponiveis!")
    }
    do{ 
        indice = Number(prompt("Digite o indice da vaga que deseja visualizar:"))
        if(vagas[indice] !== undefined){
            nomeCandidatos = ""
            vagas[indice].candidatos.forEach(function (elemento){
                nomeCandidatos += "'"+elemento+"' "
            });  
            return alert("Indice: "+indice+"\nNome da vaga: "+vagas[indice].nome+"\nDescrição da vaga: "+vagas[indice].descricao+"\nData limite: "+vagas[indice].dataLimite+"\nQuantidade de candidatos: "+vagas[indice].candidatos.length+"\nCandidatos: "+nomeCandidatos)
        }
        else if(indice === -1){
            alert("Retornando ao menu inicial")
        }
        else{
            alert("O indice digitado não existe!\nSe deseja retornar ao menu insira '-1'")
        }
    }while(indice !== -1);
}

function excluirVaga(){
    let indice = 0
    if(vagas.length===0){
        return alert("No momento não possuimos vagas disponiveis!")
    }
    do{ 
        indice = Number(prompt("Digite o indice da vaga que deseja excluir:"))
        if(vagas[indice] !== undefined){
            nomeCandidatos = ""
            vagas[indice].candidatos.forEach(function (elemento){
                nomeCandidatos += "'"+elemento+"' "
            });  
            if(confirm("Deseja confirmar a exclusão dessa vaga?\n\nIndice: "+indice+"\nNome da vaga: "+vagas[indice].nome+"\nDescrição da vaga: "+vagas[indice].descricao+"\nData limite: "+vagas[indice].dataLimite+"\nQuantidade de candidatos: "+vagas[indice].candidatos.length+"\nCandidatos: "+nomeCandidatos)===true){
                vagas.splice(indice,1)
                return alert("Vaga excluida com sucesso!")
            }
            else{
                indice = -1
            }
        }
        else if(indice === -1){
            alert("Retornando ao menu inicial")
        }
        else{
            alert("O indice digitado não existe!\nSe deseja retornar ao menu insira '-1'")
        }
    }while(indice !== -1);
}

do {
    opcao = menu()
    switch (opcao) {
        case 1:
            listarVagas()
        break;
        case 2:
            cadastrarVaga()
        break;
        case 3:
            visualizarVagas()
        break;
        case 4:
            cadastrarCandidato()
        break;
        case 5:
            excluirVaga()
        break;
        case 6:
            alert("Encerrando o sistema...")
        break;
        default:
            alert("Opção inválida!")
    }
    
} while (opcao !== 6);