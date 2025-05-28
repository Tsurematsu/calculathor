// @ts-nocheck
import config from "../app/config";

export default function tabla(
    arrayXY = [[0, 0], [1, 1], [2, 2]],
) {
    const ctx = config.ctx;
    const x = config.point.x;
    const y = config.point.y;
    const ancho = config.canvas.offsetWidth;
    const alto = config.canvas.offsetHeight;
    const color = config.tabla.color;
    const lineWidth = config.tabla.lineWidth;
    const separador = config.tabla.separador;
    const numSeparacionH = Math.floor(ancho / separador);
    const numSeparacionV = Math.floor(alto / separador);
    const posicionCero = {
        x: x + separador * (numSeparacionH / 2),
        y: y + separador * (numSeparacionV / 2),
    };

    ctx.save();
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.beginPath();
    arrayXY.forEach(([px, py], index) => {
        // Convertir coordenadas del array a coordenadas canvas
        const canvasX = Math.floor(posicionCero.x + (px * separador));
        const canvasY = Math.floor(posicionCero.y - (py * separador)); // Restamos porque Y crece hacia abajo
        // Dibujar punto
        ctx.fillRect(canvasX - 2, canvasY - 2, 4, 4); // Pequeño cuadrado de 4x4px
        // Opcional: Conectar puntos con líneas
        if (index === 0) {
            ctx.moveTo(canvasX, canvasY);
        } else {
            ctx.lineTo(canvasX, canvasY);
        }
    });
    ctx.stroke();
    ctx.restore();
}