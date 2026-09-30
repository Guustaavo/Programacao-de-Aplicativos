// Banco de Dados

var posts = [
    {
        id: 1,
        user: {
            userName: "Guustaavo",
            local: "Tijucas - SC",
            userImg: "https://github.com/Guustaavo.png",
        },
        image: "https://painel.lojavirus.com.br/uploads/onepiece_2_00f0562289.png",
        legend: "The One Piece is Real!",
        likes: 22973,
        alreadyLike: false,
        date: "2026-09-28T19:24:00",
        comments: [
            {
                id: 1,
                userName: "Oda",
                text: "Remake is coming!!!",
                date: "2026-09-28T21:24:00"
            },
            {
                id: 2,
                userName: "Kauan",
                text: "Peak, aura demais.",
                date: "2026-09-28T21:24:00"
            }
        ],
    },
    {
        id: 2,
        user: {
            userName: "Guustaavo",
            local: "Tijucas - SC",
            userImg: "https://github.com/Guustaavo.png",
        },
        image: "https://picsum.photos/seed/programacao/600/600",
        legend: "Jesus is the way, the truth and the life.",
        likes: 29177,
        alreadyLike: false,
        date: "2026-09-28T19:24:00",
        comments: [
            {
                id: 1,
                userName: "Julia",
                text: "Keep going, u are the greatest one!!!",
                date: "2026-09-28T21:24:00"
            },
        ],
    },
]

// FUNCTIONS JS

const feed = document.getElementById("feed");
const btAbrirModal = document.getElementById("btAbrirModal");
const btFecharModal = document.getElementById("btFecharModal");
const modalNewPost = document.getElementById("modalPost");

btAbrirModal.addEventListener("click", () => {
    modalNewPost.classList.remove("hidden");
})

btFecharModal.addEventListener("click", () => {
    modalNewPost.classList.add("hidden");
})

function renderPosts() {
    feed.innerHTML = "";

    posts.forEach((post) => {
        var article = document.createElement("article");
        
        var commentsHTML = "";
        for (var comment of post.comments) {
            commentsHTML += 
            `
                    <p class="comment">
                        <strong>${comment.userName}</strong>
                        ${comment.text}
                        <a class="more-comments" href="#">...</a>
                    </p>            
            `
        }
        
        article.innerHTML = `
                <header class="post-header">
                    <div class="post-user">
                        <img src="${post.user.userImg}" alt="instaUser">

                        <div>
                            <strong>${post.user.userName}</strong>
                            <span>${post.user.local}</span>
                        </div>
                    </div>
                    <button class="more">•••</button>
                </header>

                <img class="post-img" src="${post.image}" alt="post">

                <div class="post-actions">
                    <div>
                        <button>♡</button>
                        <button>○</button>
                        <button>➤</button>
                    </div>
                    <button>▱</button>
                </div>

                <div class="post-info">
                    <strong>${post.likes} curtidas</strong>

                    <p>
                        <strong>
                            ${post.user.userName}
                        </strong>
                        ${post.legend}
                    </p>

                    <a class="more-comments" href="#"> Ver todos os comentários</a>

                    ${commentsHTML}

                    <span class="post-date">${post.date}</span>
                </div>
        `;
        feed.appendChild(article);
    })
}

renderPosts();