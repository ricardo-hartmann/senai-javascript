const usuarioLogado = localStorage.getItem("usuarioLogado");
if (!usuarioLogado) {
    alert("Acesso negado! Faça o Login")
    window.location.href = "../login/index.html"
} else {
    const dadosUsuario = JSON.parse(usuarioLogado);
    const nomeBoasVindas = document.getElementById("userNome");
    nomeBoasVindas.innerHTML = dadosUsuario.nome;
}