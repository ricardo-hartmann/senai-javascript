// console.log("Script Carregado!");
// const titulo = document.getElementById('tituloMensagem');
// titulo.textContent = 'A Frase foi modificada';
// console.log("Conteúdo do H2 modificado!");

const principal = document.getElementById("titulo");
const botao = document.getElementById("botao");

botao.addEventListener("click", function(){
    const texto = document.getElementById("frase").value;
    // alert(texto);
    // console.log("A frase é: "+texto);
    if (texto == "") {
        return alert("Campo não preenchido")
    }
    principal.textContent = "Olá " + texto;
})


console.log("Atenção, Aviso!");
