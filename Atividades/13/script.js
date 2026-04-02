let entrada = Number(prompt("Digite o tamanho do arquivo em GB: "))

let conversaoMega = entrada*1024
let conversaoKilo = (entrada*1024)*1024

alert(`O tamanho do arquivo ${entrada}GB: \nEm Megabytes: ${conversaoMega} \nEm Kilobytes: ${conversaoKilo}`)