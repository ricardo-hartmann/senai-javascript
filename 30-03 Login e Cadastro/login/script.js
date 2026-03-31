let formulario = document.getElementById("formLogin");

formulario.addEventListener("submit", function(evento){
    evento.preventDefault(); //Evita que a página recarregue e que vaze os dados no URL

    const emailDigitado = document.getElementById("email").value;
    const senhaDigitada = document.getElementById("senha").value;

    const listaUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioJaExiste = listaUsuarios.find(function(usuario){
        return usuario.email === emailDigitado && usuario.senha === senhaDigitada;
    });

    if (usuarioJaExiste){
        alert("Login efetuado com sucesso!")

        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioJaExiste))
        window.location.href = "../home/index.html"

    } else {
        alert("Credenciais inválidas!")
    }

    formulario.reset();

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