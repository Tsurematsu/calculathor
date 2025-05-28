import tabla from "../tools/tabla.js";
import base from "./base.js";
import config from "./config.js";
import varTabla from "./varTabla.js";
export default function render() {
    if (!config.render) return;
    base();
    if (config.tabla.visible) varTabla.forEach((item) => {
        tabla(item);
    })
}