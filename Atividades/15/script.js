let salarioHora = Number(prompt("Digite seu Salário por hora: "));
let horasMes = Number(prompt("Digite o número de horas trabalhadas no mês: "));
let salarioBruto = (salarioHora*horasMes)

let valorInss = (salarioBruto *(0.8/100))
let valorSindicato = (salarioBruto *(0.5/100))
let impostoRenda = (salarioBruto *(11/100))

let salarioLiquido = (salarioBruto - valorInss - valorSindicato - impostoRenda);

alert(`Salário Bruto: ${salarioBruto}\nImposto de Renda: ${impostoRenda}\nINSS: ${valorInss}\nSindicato: ${valorSindicato}\nSalário Líquido: ${salarioLiquido}.`)