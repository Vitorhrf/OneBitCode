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