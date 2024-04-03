alert("Olá!\n\nBem-vindo ao Conversor de Moedas!\n\nEste conversor permite a conversão entre dólares e reais. Atualmente, 1 dólar equivale a aproximadamente 5,08 reais.")
var valor = prompt("Digite o valor para ser convertido: \n\nSiga o seguinte formato: R$10,00 ou $10,00")

const DOLAR = 5.08

function conversao() {
    var numero = parseFloat(valor.replace(/[^\d.,]/g, '').replace(',', '.'));

    if (/^R/.test(valor)) {
        var resultado = numero / DOLAR
        alert("O valor em dólares é: $" + resultado.toFixed(2))
    } else if (/^\$/.test(valor)) {
        var resultado = numero * DOLAR
        alert("O valor em reais é: R$" + resultado.toFixed(2))
    } else {
        alert("O valor digitado não é válido")
    }
}

conversao()