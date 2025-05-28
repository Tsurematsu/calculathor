export default function crus(
    ctx,
    x,
    y,
    ancho,
    alto,
    color = 'black',
    lineWidth = 1,
    separador = 40
) {
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    const separadorLineasH = Math.floor(alto / separador);
    const heightLine = Math.floor(separador * (separadorLineasH / 2));
    const separadorLineasV = Math.floor(ancho / separador);
    const widthLine = Math.floor(separador * (separadorLineasV / 2));
    ctx.beginPath();
    ctx.moveTo(x + widthLine, y);
    ctx.lineTo(x + widthLine, y + alto);
    ctx.moveTo(x, y + heightLine);
    ctx.lineTo(x + ancho, y + heightLine);
    ctx.stroke();
}