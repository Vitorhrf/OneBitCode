const imoveis = []

let option = 0
let contador = 0
do {
    option = Number(prompt("Bem-vindos ao cadastro de imóveis!\n\nNo nosso sistema temos ao total: "+imoveis.length+" imóveis cadastrados!\n\nSelecione uma das opções abaixo para prosseguir: \n1 - Cadastrar um novo imóvel\n2 - Listar imóveis cadastrados\n3 - Sair"))
    switch(option){
        case 1:
            const imovel = {}
            imovel.proprietario=prompt("Digite o nome do proprietário:")
            imovel.quartos=prompt("Digite a quantidade de quartos do imóvel:")
            imovel.banheiros=prompt("Digite a quantidade de banheiros do imóvel:")
            imovel.garagem=confirm("O imóvel possui garagem?")
            if(confirm("Você tem certeza que deseja salvar esse imovel?\n\n"+
                "Proprietário: "+imovel.proprietario+
                "\nQuantidade de quartos: "+imovel.quartos+
                "\nQuantidade de banheiros: "+imovel.banheiros+
                "\nO imóvel possui garagem? "+(imovel.garagem===true?"Sim":"Não"))){
                    imoveis.push(imovel)
                    alert("Imóvel salvo com sucesso!")
            }
            else{
                alert("Voltando ao menu!")
            }
        break
        case 2:
            if(imoveis.length>0){
                let resultado = ""
                for(let i = 0; i < imoveis.length; i++){
                    resultado += "Dados do imóvel "+(i+1)+"\nProprietário: "+imoveis[i].proprietario+"\nQuantidade de quartos: "+imoveis[i].quartos+"\nQuantidade de banheiros: "+imoveis[i].banheiros+"\nPossui garagem?: "+(imoveis[i].garagem === true?"Sim":"Não")+"\n\n"
                }
                alert(resultado)
            }
            else{
                alert("Ainda não possuimos cadastro de imóveis!")
            }
        break
        case 3:
            alert("Encerrando programa!")
        break
        default:
            alert("Opção inválida!")
    }
} while (option !== 3);