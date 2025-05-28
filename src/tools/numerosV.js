export default function numerosV(
    ctx,
    x = 0,
    y = 0,
    ancho,
    alto,
    color = 'black',
    lineWidth = 1,
    separador = 40
) {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = color;
    const separadorLineasV = Math.floor(ancho / separador);
    const widthLine = separador * (separadorLineasV / 2);
    const mitadV = Math.floor((alto / separador) / 2);
    // Dibujar los números verticales
    for (let i = 0; i <= alto; i += separador) {
        const valor = ((alto - i) / separador) - mitadV;
        ctx.fillText((Math.floor(valor)).toString(), widthLine + x, y + i);
    }
    ctx.restore();
}