// ===== TYPING ANIMATION =====
const phrases = [
  "MERN Stack Developer 💻",
  "Frontend Enthusiast ✨",
  "React & Node.js Dev ⚛️",
  "Full Stack Explorer 🚀"
];

let pi = 0;
let ci = 0;
let deleting = false;

const typedText = document.getElementById("typed-text");
function typeLoop(){

  if(!typedText) 
    return;
  const phrase = phrases[pi];

  if(!deleting){
    typedText.textContent =phrase.slice(0, ci++);

    if(ci > phrase.length){
      deleting = true;
      setTimeout(typeLoop,500);
      return;
    }
  }
  else{
    typedText.textContent =phrase.slice(0, ci--);

    if(ci < 0){
      deleting = false;
      pi =(pi + 1)%phrases.length;
      ci = 0;
    }
  }

  setTimeout(
    typeLoop,
    deleting ? 50 : 80);
}
typeLoop();


// ===== THEME TOGGLE =====

let isDark = true;

function toggleTheme(){

  isDark = !isDark;

  document.body.classList.toggle("light",!isDark);

  const btn =document.querySelector(".theme-btn");

  if(btn){
    btn.textContent =isDark ? "☀️" : "🌙";
  }
}


// ===== NAVBAR ACTIVE =====

const navbar =document.getElementById("navbar");

window.addEventListener("scroll",()=>{

if(navbar){
navbar.classList.toggle("scrolled",window.scrollY > 60);
}

let current = "";
document.querySelectorAll("section[id]")
.forEach(section=>{

if(
window.scrollY >=section.offsetTop - 140
){
current =section.id;
}
});

document.querySelectorAll(".nav-links a")
.forEach(link=>{

link.classList.toggle("active",
link.getAttribute("href") === "#" + current
);
});
});


// ===== SCROLL REVEAL =====

const revealObserver =new IntersectionObserver((entries)=>{entries.forEach(entry=>{
if(
entry.isIntersecting
){
entry.target.classList.add("show");
}
});
},
{
threshold:0.12
}
);

document.querySelectorAll(".rev")
.forEach(el=>{
revealObserver.observe(el);
});


// ===== SKILL BAR =====

const skillWrap =document.getElementById("skill-bars-wrap");

const barObserver =new IntersectionObserver((entries)=>{entries.forEach(entry=>{
if(
entry.isIntersecting
){
entry.target.querySelectorAll(".fill")
.forEach(fill=>{
fill.style.width =fill.dataset.w + "%";
});
barObserver.unobserve(
entry.target
);
}
});
},
{
threshold:0.3
}
);
if(skillWrap){
barObserver.observe(
skillWrap
);
}


// ===== CONTACT FORM =====

const form =document.getElementById("contactForm");

if(form){
form.addEventListener(
"submit",

function(e){e.preventDefault();
const btn =this.querySelector(".send-btn");
btn.innerHTML ="<i class='bx bx-check'></i> Message Sent! ✅";
btn.style.background ="linear-gradient(135deg,#10b981,#059669)";
setTimeout(()=>{
btn.innerHTML ="<i class='bx bx-send'></i> Send Message";btn.style.background ="";
this.reset();
},3000);
}
);
}