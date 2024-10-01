// importações
import { cv } from "./scripts/cv.js";
import { dow } from "./scripts/dow.js";

// variáveis
const pick = document.getElementById("pick");

function esc() {
    const item = window.prompt("Qual conversor?");
    const converter = new cv(pick.files[0].name, item);
    const download = new dow(pick.files[0],item);
}

window.esc = esc;