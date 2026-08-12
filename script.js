const words=['Web Developer','Creative Learner','Stage Performer','Anime Lover'];
let i=0;
const t=document.getElementById('typing');
function change(){t.textContent=words[i];i=(i+1)%words.length;}
change();setInterval(change,2200);

const glow = document.createElement("div");

glow.classList.add("mouse-glow");

document.body.appendChild(glow);


document.addEventListener("mousemove", (event) => {

    glow.style.left = event.clientX + "px";

    glow.style.top = event.clientY + "px";

});


document.addEventListener("click", (event) => {

    const star = document.createElement("span");

    star.classList.add("click-star");

    star.textContent = "✦";

    star.style.left = event.clientX + "px";

    star.style.top = event.clientY + "px";

    document.body.appendChild(star);


    setTimeout(() => {

        star.remove();

    }, 800);

});

function createSakura() {

    const sakura = document.createElement("div");

    sakura.classList.add("sakura");

    sakura.textContent = "🌸";

    // Random position
    sakura.style.left = Math.random() * 100 + "vw";

    // Random size
    const size = Math.random() * 15 + 12;
    sakura.style.fontSize = size + "px";

    // Random falling speed
    const duration = Math.random() * 6 + 7;
    sakura.style.animationDuration = duration + "s";

    // Random delay
    sakura.style.animationDelay = Math.random() * 5 + "s";

    // Random opacity
    sakura.style.opacity = Math.random() * 0.6 + 0.4;

    document.body.appendChild(sakura);

    // Remove after animation
    setTimeout(() => {
        sakura.remove();
    }, (duration + 5) * 1000);
}


// Create sakura every 700ms
setInterval(createSakura, 700);
