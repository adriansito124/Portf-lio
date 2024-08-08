
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

        if (x + cdWidth > screenWidth || x < 0) {
            vx *= -1;
        }

        if (y + cdHeight > screenHeight || y < 0) {
            vy *= -1;
        }

        cd.style.transform = `translate(${x}px, ${y}px)`;

        requestAnimationFrame(update);
    }

    update();
});
