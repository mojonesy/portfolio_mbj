/* Nav */
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});


/* Image modals */
const images = document.querySelectorAll(".photo__item img");
let imgSrc;

images.forEach((img) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;

        imgModal(imgSrc);
    });
});

let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");

    document.querySelector(".main").append(modal);

    const newImg = document.createElement("img");
    newImg.setAttribute("src", src);

    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "fas fa-times closeBtn");

    closeBtn.onclick = () => {
        modal.remove();
    };

    modal.append(newImg, closeBtn);
};