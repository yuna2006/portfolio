const words=['Web Developer','Creative Learner','Stage Performer','Anime Lover'];
let i=0;
const t=document.getElementById('typing');
function change(){t.textContent=words[i];i=(i+1)%words.length;}
change();setInterval(change,2200);