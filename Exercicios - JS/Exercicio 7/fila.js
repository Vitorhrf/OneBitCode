const fila = ["Joao", "Maria", "Jose"]
do {
    let listaDeEspera = ""
    for(let i = 0; i < fila.length;i++){
        listaDeEspera += (i+1)+"º - "+fila[i]+"\n"
    }
    opcao = Number(prompt(
        "Pacientes aguardando:\n"
        +listaDeEspera
        +"\nEscolha uma das opções:\n"
        +"1 - Novo paciente\n"
        +"2 - Consultar paciente\n"
        +"3 - Sair"
        ))
    switch (opcao){
        case 1:
            fila.push(prompt("Digite o nome do paciente:"))
            break
        case 2:
            fila.length>0?alert("Paciente "+fila.shift()+" consultando!"):alert("Não possui pacientes na fila de espera!")
            break
        case 3:
            alert("Encerrando programa!")
            break
        default:
            alert("Opção invalida!")
    }
} while (opcao !== 3);