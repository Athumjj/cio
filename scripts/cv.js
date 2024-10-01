class cv {
    constructor(item, convert) {
        if (!item) {
            console.log("Arquivo de imagem não selecionado.");
        }else {
            if (!convert) {
                console.log("Conversor não definido.");
            }else {
                const a = item.split(".");
                a[1] = "." + convert;
                return a.join("");
            }
        }
    }
}

export { cv };