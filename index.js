const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const main = document.querySelector("main");

function render() {
    let html = "";
    posts.map((i) => {
        html += `
            <article>
                <div class="flex-start">
                    <div class="avatar"><img src="${i.avatar}" class="user-img"></div>
                    <div class="user-details">
                        <p class="user-name">${i.name}</p>
                        <p class="user-location">${i.location}</p>
                    </div>
                </div>
                
                <div class="post">
                    <img src="${i.post}" class="post-img" alt="${i.altText}">
                </div>
                
                <div class="icons-box">
                    <button id="likeBtn"><img src="images/icon-heart.png" class="icon" id="likeIcon"></button>
                    <button id="commentBtn"><img src="images/icon-comment.png" class="icon"></button>
                    <button id="DMBtn"><img src="images/icon-dm.png" class="icon"></button>
                </div>
                
                <p class="likes">${i.likes} likes</p>
                <p class="comments"><span class="user-name">${i.username}</span> ${i.comment}</p>
            </article>`;
    });
    main.innerHTML = html;
}

render();
