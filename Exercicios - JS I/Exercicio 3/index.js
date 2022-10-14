const metros = Number(prompt("Digite o valor em metros:"))
const unidade = prompt("Digite para qual unidade de medida deseja converter")
let resultado = 0.0
switch (unidade){
    case "mm":
        resultado = metros * 1000
        alert(metros+" metros = "+resultado+" "+unidade)
        break
    case "cm":
        resultado = metros * 100
        alert(metros+" metros = "+resultado+" "+unidade)
        break
    case "dm":
        resultado = metros * 10
        alert(metros+" metros = "+resultado+" "+unidade)
        break
    case "dam":
        resultado = metros / 10
        alert(metros+" metros = "+resultado+" "+unidade)
        break
    case "hm":
        resultado = metros / 100
        alert(metros+" metros = "+resultado+" "+unidade)
        break
    case "km":
        resultado = metros / 1000
        alert(metros+" metros = "+resultado+" "+unidade)
        break
    default:
        alert("Opção inválida")
}