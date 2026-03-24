let formCadastro = document.getElementById("formCadastro");
let nome = document.getElementById("nome");
let email = document.getElementById("email");
let senha = document.getElementById("senha");

let btn = document.getElementById("btn");

formCadastro.addEventListener("submit", form);

function form() {
    //alert(`nome: ${nome.value} \n email: ${email.value}`);

    localStorage.setItem("userNome", nome.value);
    localStorage.setItem("userEmail", email.value);
    localStorage.setItem("userSenha", senha.value);   
}