var menu = document.querySelector(".bx-menu");
var cerrar = document.querySelector(".bx-x")
var nav = document.querySelector(".nav-fix");
var item = document.querySelectorAll(".iten-menu");
var icon = document.querySelector(".icon");

menu.addEventListener("click", ()=>{
    nav.classList.add("crecer");
    cerrar.style.display = 'block'
    menu.style.display = 'none';
    item.forEach(iten => {
    iten.classList.add("mira")
});
})

cerrar.addEventListener('click',()=>{
    nav.classList.remove("crecer");
    cerrar.style.display = 'none'
    menu.style.display = 'block';
    item.forEach(iten => {
    iten.classList.remove("mira")
})
})


