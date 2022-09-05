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
    lista += vagas.map(function (elemento,index){
        return "Indice: "+index+"\nNome da vaga: "+elemento.nome+"\nQuantidade de candidatos inscritos: "+elemento.candidatos.length+"\n\n"
    })
    if(lista!==""){
        return lista
    }else{
        return "No momento não possui vagas cadastradas no sistema!"
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
    do{
        indice = Number(prompt("Digite o indice da vaga:"))
        if(vagas[indice] && indice !== undefined){
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

do {
    opcao = menu()
    switch (opcao) {
        case 1:
            alert(listarVagas())
        break;
        case 2:
            cadastrarVaga()
        break;
        case 3:
            
        break;
        case 4:
            cadastrarCandidato()
        break;
        case 5:
            
        break;
        case 6:
            alert("Encerrando o sistema...")
        break;
        default:
            alert("Opção inválida!")
    }
    
} while (opcao !== 6);