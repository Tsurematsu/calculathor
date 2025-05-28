// @ts-nocheck
import config from "./app/config.js";
import render from "./app/render.js";
main();
function main() {
    const canvas = document.querySelector(".graph-canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) {
        console.error("Context not found");
        return;
    }
    config.canvas = canvas;
    config.ctx = ctx;

    setInterval(() => { render() }, 1000 / 60); // 60 FPS
    // cuando se precione el click, se vuelve a renderizar
    const cursorSabe = {
        x: 0,
        y: 0,
        down: false
    };
    // al precionar el click sin soltar, se guarda la posicion del cursor
    canvas.addEventListener("mousedown", (e) => {
        cursorSabe.x = e.clientX;
        cursorSabe.y = e.clientY;
        cursorSabe.down = true;
    });
    canvas.addEventListener("mousemove", (e) => {
        if (cursorSabe.down) {
            const dx = e.clientX - cursorSabe.x;
            const dy = e.clientY - cursorSabe.y;
            config.point.x += dx;
            config.point.y += dy;
            cursorSabe.x = e.clientX;
            cursorSabe.y = e.clientY;
        }
    });
    canvas.addEventListener("mouseup", () => {
        cursorSabe.down = false;
    });


}
