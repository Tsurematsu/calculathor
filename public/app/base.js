// @ts-nocheck
import crus from "../tools/crus.js";
import cuadricula from "../tools/cuadricula.js";
import numerosH from "../tools/numerosH.js";
import numerosV from "../tools/numerosV.js";
import config from "./config.js";
export default function base() {
    const elementWidth = config.canvas.offsetWidth;
    const elementHeight = config.canvas.offsetHeight;
    config.canvas.width = elementWidth;
    config.canvas.height = elementHeight;
    config.ctx.clearRect(0, 0, config.canvas.width, config.canvas.height);

    if (config.lineasBase.visible) cuadricula(
        config.ctx,
        config.point.x,
        config.point.y,
        elementWidth,
        elementHeight,
        config.lineasBase.color,
        config.lineasBase.size,
        config.lineasBase.separador
    );

    if (config.lineasIntermedias.visible) cuadricula(
        config.ctx,
        config.point.x,
        config.point.y,
        elementWidth,
        elementHeight,
        config.lineasIntermedias.color,
        config.lineasIntermedias.size,
        config.lineasIntermedias.separador
    );

    if (config.crus.visible) crus(
        config.ctx,
        config.point.x,
        config.point.y,
        elementWidth,
        elementHeight,
        config.crus.color,
        config.crus.size,
        config.crus.separador
    );

    if (config.numerosH.visible) numerosH(
        config.ctx,
        config.point.x,
        config.point.y + 10,
        elementWidth,
        elementHeight,
        config.numerosH.color,
        config.numerosH.size,
        config.numerosH.separador
    )
    if (config.numerosV.visible) numerosV(
        config.ctx,
        config.point.x - 20,
        config.point.y + 10,
        elementWidth,
        elementHeight,
        config.numerosV.color,
        config.numerosV.size,
        config.numerosV.separador
    );
}