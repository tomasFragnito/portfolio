const cards = document.querySelectorAll(".project-card");
const modal = document.getElementById("projectModal");

cards.forEach(card => {

    card.addEventListener("click", () => {

        const img = card.dataset.img;
        const title = card.dataset.title;
        const text = card.dataset.text;

        // 👉 Obtener TODOS los links dentro de la card
        const links = card.querySelectorAll("a");

        openModal(img, title, text, links);

    });

});

function openModal(img, title, text, links) {

    document.getElementById("modalImg").src = img;
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalText").textContent = text;

    const linksContainer = document.getElementById("modalLinks");
    linksContainer.innerHTML = "";

    links.forEach(link => {
        const newLink = document.createElement("a");
        newLink.href = link.href;
        newLink.textContent = link.textContent;
        newLink.target = "_blank";

        linksContainer.appendChild(newLink);
    });

    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});
