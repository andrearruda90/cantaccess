document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("trickyButton");

    button.addEventListener("mouseenter", function() {
        const maxX = window.innerWidth - button.clientWidth;
        const maxY = window.innerHeight - button.clientHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        button.style.position = "absolute";
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
    });
});
