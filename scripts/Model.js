//Model
class Model{
    constructor(){
        //nome, nome de usuário, avatar, repositórios
        this._nome = ''
        this._nomeUsuario = ''
        this._perfil = ''
        this._repositorios = ''
    }


    //métodos  para metodos

    atualiza(dados){
        this._nome = dados.name
        this._nomeUsuario = dados.login
        this._perfil = dados.avatar_url
    }

    erro(status){
        let container = document.querySelector('#container')
        container.innerHTML += `<h1>houve um erro na sua pesquisa</h1>`
        `<h2>Código do erro: ${status}</h2>`
    }


    //requisição para buscar nome, login e avatar 
    procuraUsuario(usuario){
        let reqUsuario = new XMLHttpRequest()

        reqUsuario.addEventListener('load',()=>{
            // se a requisição for OK
            if (reqUsuario.status == 200){
                let dados = JSON.parse(reqUsuario.responseText)
                this.atualiza(dados)
            }
            //se a requisição der algum tipo de erro
            else{
                this.Erro(reqUsuario.status)
            }
        })
        reqUsuario.open('GET', `https://api.github.com/users/${usuario}`, false)
        reqUsuario.send()
    }

    //requisição para buscar repositorios
    procuraRepositorios(usuario){
        let reqRepositorios = new XMLHttpRequest()

        reqRepositorios.addEventListener('load', () => {
            if (reqRepositorios.status == 200){
                let dadosRepo = JSON.parse(reqRepositorios.responseText)
                this._repositorios = dadosRepo
            }
            else{
                let container = document.querySelector('#container')
                container.innerHTML += `<h1>Houve um erro na busca por repositorios>/h1>`
                `<h2>Código do erro: ${reqRepositorios.status}</h2>`
            }
        })
        reqRepositorios.open('GET', `https://api.github.com/users/${usuario}/repos`, false)
        reqRepositorios.send()
    }

    retornaNome(){
        return this._name
    }

    retornaNomeUsuario(){
        return this._nomeUsuario
    }

    retornaFotoPerfil(){
        return this._perfil
    }
}