export default function numerosH(
    ctx,
    x = 0,
    y = 0,
    ancho,
    alto,
    color = 'black',
    lineWidth = 1,
    separador = 40,
) {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = color; // Necesario para el texto
    const separadorLineasH = Math.floor(alto / separador);
    const heightLine = separador * (separadorLineasH / 2);

    // Dibujar los números horizontales
    const mitadH = Math.floor((ancho / separador) / 2);
    for (let i = 0; i <= ancho; i += separador) {
        const valor = (i / separador) - mitadH;
        ctx.fillText(Math.floor(valor).toString(), x + i, y + heightLine);
        // y + 10 para que el texto quede justo debajo del punto de referencia
    }
    ctx.restore();
}