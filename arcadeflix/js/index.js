const jogos = [
    { nome: 'Minecraft', categoria: 'Aventura', descricao: 'Construa e explore mundos.', emoji: '⛏️', cor: '#276448' },
    { nome: 'Mario Kart', categoria: 'Corrida', descricao: 'Corridas com muita diversão.', emoji: '🏎️', cor: '#bf513c' },
    { nome: 'Stardew Valley', categoria: 'Aventura', descricao: 'Cuide da sua própria fazenda.', emoji: '🌻', cor: '#b7833c' },
    { nome: 'Among Us', categoria: 'Estratégia', descricao: 'Descubra quem é o impostor.', emoji: '👨‍🚀', cor: '#803d78' },
    { nome: 'Hollow Knight', categoria: 'Aventura', descricao: 'Explore um reino misterioso.', emoji: '🗡️', cor: '#354e86' },
    { nome: 'Rocket League', categoria: 'Corrida', descricao: 'Carros, futebol e velocidade.', emoji: '⚽', cor: '#266ca4' },
    { nome: 'Terraria', categoria: 'Aventura', descricao: 'Aventure-se e enfrente monstros.', emoji: '🌳', cor: '#3b8567' },
    { nome: 'Tetris', categoria: 'Estratégia', descricao: 'Encaixe as peças e faça pontos.', emoji: '🧩', cor: '#6651ad' }
];

const cadastroJogo = document.getElementById("modalCadastroJogo");

const gradeJogos = document.querySelector("#grade-jogos"); /* Mesma coisa que o document.getElementById, porém permite escolher se quer buscar por Class ou Id, como no CSS, com . (classe) ou # (Id) */
const botoes = document.querySelectorAll("[data-categoria]");
const busca = document.querySelector("#busca");
let categoriaSelecionada = "Todos";

function mostrarJogos() {
    gradeJogos.innerHTML = "";

    const jogosCadastrados = JSON.parse(localStorage.getItem("jogosCadastrados")) || [];
    const jogosCompletos = [...jogos, ...jogosCadastrados];

    jogosCompletos.forEach(jogo => {
        const nomeCombina = jogo.nome.toLowerCase().includes(busca.value);

        const categoriaCombina = categoriaSelecionada === "Todos" || categoriaSelecionada === jogo.categoria;

        if (!categoriaCombina || !nomeCombina) {
            return;
        } else {
            gradeJogos.innerHTML += `
            <article class="card">
                <div class="capa" style="background: ${jogo.cor}">${jogo.emoji}</div>
                <div class="conteudo-card">
                    <h3>${jogo.nome}</h3>
                    <p>${jogo.descricao}</p>
                    <span>${jogo.categoria}</span>
                </div>
            </article>
            `;
        }
    })
    jogos.forEach(jogo => {
        const nomeCombina = jogo.nome.toLowerCase().includes(busca.value);

        const categoriaCombina = categoriaSelecionada === "Todos" || categoriaSelecionada === jogo.categoria;

        if (!categoriaCombina || !nomeCombina) {
            return;
        } else {
            gradeJogos.innerHTML += `
            <article class="card">
                <div class="capa" style="background: ${jogo.cor}">${jogo.emoji}</div>
                <div class="conteudo-card">
                    <h3>${jogo.nome}</h3>
                    <p>${jogo.descricao}</p>
                    <span>${jogo.categoria}</span>
                </div>
            </article>
            `;
        }
    })
}

busca.addEventListener("input", mostrarJogos)

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        categoriaSelecionada = botao.dataset.categoria;
        botoes.forEach(item => item.classList.remove('ativo'));
        botao.classList.add("ativo");
        mostrarJogos();
    })
})

function cadastrarJogo() {
    cadastroJogo.classList.remove("hidden")
}

function voltouJogo() {
    cadastroJogo.classList.add("hidden");
}

function cadastrouJogo() {
    var nome = document.getElementById("inNomeJogo").value;
    var categoria = document.getElementById("inCategoriaJogo").value;
    var descricao = document.getElementById("inDescricaoJogo").value;
    var emoji = document.getElementById("inEmojiJogo").value;
    var cor = document.getElementById("inCorJogo").value;

    var infos = {
        nome,
        categoria,
        descricao,
        emoji,
        cor,
    }

    jogos.push(infos);

    mostrarJogos();

    if (nome && categoria && descricao) {
        document.getElementById("inNomeJogo").value = "";
        document.getElementById("inCategoriaJogo").value = "";
        document.getElementById("inDescricaoJogo").value = "";
        document.getElementById("inEmojiJogo").value = "";
        document.getElementById("inCorJogo").value = "";

        cadastroJogo.classList.add('hidden');

        alert("Jogo adicionado com sucesso!");
    } else {
        alert("Por favor, preencha todos os campos antes de cadastrar!");
    }
}

mostrarJogos();