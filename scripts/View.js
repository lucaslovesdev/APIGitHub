class View {
    mostraUsuario(dados){
        let nome = document.getElementById("nome")
        let nomeUsuario = document.getElementById("nomeUsuario")
        let img = document.getElementById("fotoPerfil")

        nome.textContent = dados.retornaNome()
        nomeUsuario.textContent = dados.retornaNomeUsuario()
        img.src = dados.retornaFotoPerfil()
    }

    mostraRepositorios(dados){
        let repos = dados._repositorios
        
        let section = document.getElementById("repo")
        if(section != null) {
            section.parentNode.removeChild(section)
        }

        let main = document.querySelector("main")
        let repositorios = document.createElement("section")
        repositorios.id = "repo"
        repositorios.classname = "repositorios"
        main.appendChild(repositorios)

        for(let repositorio of repos){
            let divRepo = document.createElement("div")
            divRepo.className = "div-repositorio"

            let repoName = `<p><strong>${repositorio.name}</strong></p>`
            divRepo.innerHTML += repoName


            if(!repositorio.description){
                repositorio.description = "Não há descrição...."
            }
            let repoDescricao = `<p>${repositorio.description}</p>`
            divRepo.innerHTML += repoDescricao



            if(!repositorio.language){
                repositorio.language = "Linguagem não identificada...."
            }
            let repolinguagem = `<p>${repositorio.language}</p>`
            divRepo.innerHTML += repolinguagem

            let repoLink = `<a href= "${repositorio.html_url}" target="_blank">Link</a>`
            divRepo.innerHTML+= repoLink

            repositorios.appendChild(divRepo)
        }

    }
}