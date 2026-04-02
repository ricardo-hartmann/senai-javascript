let peso = Number(prompt("Insira o peso do dia: "))
let excesso = peso-50
let multa = excesso*4

if (peso <= 50) {
    alert("Sem peso excedente nem multa adicional.")
} else {
    alert(`O peso excedente foi de ${excesso}kg com uma multa de R$ ${multa},00`)
}



//peso, excesso, multa