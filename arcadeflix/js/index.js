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

const gradeJogos = document.querySelector("#grade-jogos"); /* Mesma coisa que o document.getElementById, porém permite escolher se quer buscar por Class ou Id, como no CSS, com . (classe) ou # (Id) */

function mostrarJogos() {
    gradeJogos.innerHTML = "";

    jogos.forEach(jogo => {
        gradeJogos.innerHTML += `
            <article class="card">
                <div class="capa" style="background: ${jogo.cor}">${jogo.emoji}</div
                <div class="conteudo-card">
                    <h3>${jogo.nome}</h3>
                    <p>${jogo.descricao}</p>
                    <span>${jogo.categoria}</span>
                </div>
            </article>
        `;
    })
}

mostrarJogos();