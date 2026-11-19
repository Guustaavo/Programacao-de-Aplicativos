/* Another way to make the game register */

function cadastroJogo() {
    const nome = document.getElementById("nomeJogo").value;
    const categoria = document.getElementById("categoriaJogo").value;
    const descricao = document.getElementById("descricaoJogo").value;
    const emoji = document.getElementById("emojiJogo").value;
    const cor = document.getElementById("corJogo").value;

    const novoJogo = {
        nome,
        categoria,
        descricao,
        emoji,
        cor
    }

    const jogosCadastrados = JSON.parse(localStorage.getItem("jogosCadastrados")) || [];
    jogosCadastrados.push(novoJogo);
    localStorage.setItem("jogosCadastrados", JSON.stringify(jogosCadastrados));

    window.location.href = "./index.html"
}