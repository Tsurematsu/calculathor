export default function cuadricula(ctx, x, y, ancho, alto, color = 'black', lineWidth = 1, separador = 20) {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;

    // Dibujar líneas verticales
    for (let i = x; i <= x + ancho; i += separador) {
        ctx.beginPath();
        ctx.moveTo(i, y);
        ctx.lineTo(i, y + alto);
        ctx.stroke();
    }

    // Dibujar líneas horizontales
    for (let j = y; j <= y + alto; j += separador) {
        ctx.beginPath();
        ctx.moveTo(x, j);
        ctx.lineTo(x + ancho, j);
        ctx.stroke();
    }

    ctx.restore();
}