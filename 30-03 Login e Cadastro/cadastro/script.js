let formulario = document.getElementById("formCadastro");

formulario.addEventListener("submit", function(evento){
    evento.preventDefault(); //Evita que a página recarregue e que vaze os dados no URL

    const nomeDigitado = document.getElementById("nome").value;
    const emailDigitado = document.getElementById("email").value;
    const senhaDigitada = document.getElementById("senha").value;
    const confirmaSenhaDigitada = document.getElementById("confirma-senha").value;

    const listaUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const novoUsuario = {
        nome: nomeDigitado,
        email: emailDigitado,
        senha: senhaDigitada,
    }

    listaUsuarios.push(novoUsuario)

    console.log(listaUsuarios)

    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios))

})





// EXEMPLO JSON [
//     "nome": "João",
//     "idade": 30,
//     "casado": true,
//     "filhos": ["Ana", "Pedro", "Nome"]
//     "endereço": {
//         "rua": "Rua das Flores",
//         "numero": 123,
//         "cidade": São Paulo
//     }
// ]