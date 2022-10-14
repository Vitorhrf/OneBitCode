let opcao = 0
do {
    opcao = Number(prompt("Selecione uma das opções disponiveis abaixo: \n1 - Opção 1\n2 - Opção 2\n3 - Opção 3\n4 - Opção 4\n5 - Encerrar"))
    opcao === 5?alert("Programa encerrado"):alert("Opção escolhida foi: Opção "+opcao)
} while (opcao !== 5);
