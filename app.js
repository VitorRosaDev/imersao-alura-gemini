function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Digite algo para pesquisar</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let foco = "";
    let habilidades = "";
    let areasDeAtuacao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        foco = dado.foco.toLowerCase()
        habilidades = dado.habilidades.toLowerCase()
        areasDeAtuacao = dado.areasDeAtuacao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (titulo.includes(campoPesquisa) || foco.includes(campoPesquisa) || habilidades.includes(campoPesquisa) || areasDeAtuacao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            // Cria um novo elemento HTML para cada resultado
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">Foco: ${dado.foco}</p>
                <p class="descricao-meta">Habilidades: ${dado.habilidades}</p>
                <p class="descricao-meta">Áreas de atuação: ${dado.areasDeAtuacao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados
}