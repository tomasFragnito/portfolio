// Selecciona todos los links del menú y las secciones
const menuLinks = document.querySelectorAll(".menu a");
const sections = document.querySelectorAll(".section");

// Función para actualizar el link activo
function updateActiveMenu() {
    let scrollPos = window.scrollY + window.innerHeight / 2; // punto medio de la pantalla

    sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute("id");

        const link = document.querySelector(`.menu a[href="#${id}"]`);

        if (scrollPos >= top && scrollPos < bottom) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

// Llama a la función al hacer scroll y al cargar
window.addEventListener("scroll", updateActiveMenu);
window.addEventListener("load", updateActiveMenu);


function showSection(id) {

    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}
