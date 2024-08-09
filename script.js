
const modal = document.querySelector(".modal");
const menu = document.querySelector(".menu");

let show = false;

menu.addEventListener("click", () => {
    show = !show;
    modal.style.display = show ? 'none' : 'flex';
})

document.addEventListener("DOMContentLoaded", () => {
    const cd = document.querySelector(".cd");
    const screen = document.querySelector(".screen");
    const cdWidth = cd.clientWidth;
    const cdHeight = cd.clientHeight;
    let x = 0;
    let y = 0;
    let vx = 1.5; //velocidade
    let vy = 1.5;
    let trade = 0;

    

    function update() {
        const screenWidth = screen.clientWidth;
        const screenHeight = screen.clientHeight;

        x += vx;
        y += vy;

        var image = document.getElementById("disco");

        if (trade == 0) {
            image.src = "./Imagens/Ibere.jpeg";
        }

        if (trade == 1) {
            image.src = "./Imagens/adrian.jpeg";
        }

        if (trade == 2) {
            image.src = "./Imagens/festa.jpeg";
        }

        if (trade == 3) {
            image.src = "./Imagens/militar.jpeg";
        }

        if (trade == 4) {
            image.src = "./Imagens/natal.jpeg";
        }

        if (trade == 5) {
            image.src = "./Imagens/snorlax.jpeg";
        }

        if (trade == 6) {
            image.src = "./Imagens/terno.jpeg";
        }

        if (trade == 7) {
            image.src = "./Imagens/matias.png";
        }

        if (x + cdWidth > screenWidth || x < 0) {
            vx *= -1;
            trade++;
        }

        if (y + cdHeight > screenHeight || y < 0) {
            vy *= -1;
            trade++;
        }

        if (trade > 7) {
            trade = 0;
        }

        cd.style.transform = `translate(${x}px, ${y}px)`;

        requestAnimationFrame(update);
    }

    update();
});
