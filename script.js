const words=['Web Developer','Creative Learner','Stage Performer','Anime Lover'];
let i=0;
const t=document.getElementById('typing');
function change(){t.textContent=words[i];i=(i+1)%words.length;}
change();setInterval(change,2200);
// ========================================
// ✨ MOUSE GLOW
// ========================================

const glow = document.createElement("div");

glow.classList.add("mouse-glow");

document.body.appendChild(glow);


document.addEventListener("mousemove", (event) => {

    glow.style.left = event.clientX + "px";

    glow.style.top = event.clientY + "px";

});


// ========================================
// ✦ CLICK STAR EFFECT
// ========================================

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
