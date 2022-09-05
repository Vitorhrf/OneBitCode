function triangulo(){
    let base = Number(prompt("Digite a base do triangulo:"))
    let altura = Number(prompt("Digite a altura do triangulo:"))
    return (base*altura/2)
}
function retangulo(){
    let base = Number(prompt("Digite a base do retangulo:"))
    let altura = Number(prompt("Digite a altura do retangulo:"))
    return (base*altura)
}
function quadrado(){
    let lado = Number(prompt("Digite o lado do quadrado:"))
    return (lado*lado)
}
function trapezio(){
    let baseMaior = Number(prompt("Digite a base maior do trapezio:"))
    let baseMenor = Number(prompt("Digite a base menor do trapezio:"))
    let altura = Number(prompt("Digite a altura do trapezio:"))
    return ((baseMaior + baseMenor)*altura/2)
}
function circulo(){
    let raio = Number(prompt("Digite o raio do circulo:"))
    return (3.14*(raio*raio))
}
let opcao = 0
do {
    opcao = Number(prompt("Cálculadora Geométrica\n\n"+
    "Selecione o cálculo que deseja realizar:\n"+
    "1 - Área do triangulo: base * altura / 2\n"+
    "2 - Área do retangulo: base * altura\n"+
    "3 - Área do quadrado: lado²\n"+
    "4 - Área do trapezio: (base maior + base menor) * altura / 2\n"+
    "5 - Área do circulo: pi * raio²\n"+
    "6 - Sair"))
    switch (opcao){
        case 1:
            alert("O resultado é: "+triangulo())
        break
        case 2:
            alert("O resultado é: "+retangulo())
        break
        case 3:
            alert("O resultado é: "+quadrado())
        break
        case 4:
            alert("O resultado é: "+trapezio())
        break
        case 5:
            alert("O resultado é: "+circulo())
        break
        case 6:
            alert("Encerrando o sistema!")
        break
        default:
            alert("Opção inválida!")
    }
} while (opcao !== 6);