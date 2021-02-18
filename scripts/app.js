let botao = document.getElementById("pesquisar")
let controller = new Controller

botao.addEventListener('click', () => {
    let nomeUsuario = document.querySelector("#inputUsuario").value
    controller.achaUsuario (nomeUsuario)
    controller.achaRepos(nomeUsuario)
})