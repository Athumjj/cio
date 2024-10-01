class dow {
    constructor(item, cv) {
        const img = new Image();
        img.onload = this.convert.bind(img, cv); // Passa o cv também
        img.src = URL.createObjectURL(item);
    }

    convert(cv) {
        const a = document.createElement("canvas"),
        ctx = a.getContext("2d");
        a.width = this.width;
        a.height = this.height;
        ctx.drawImage(this, 0, 0);
        URL.revokeObjectURL(this.src); // Revoga depois do uso

        const quality = cv === 'jpeg' ? 0.75 : undefined; // Define a qualidade apenas para jpeg

        a.toBlob((blob) => {
            const file = new File([blob], `image.${cv}`, { type: "application/octet-stream" });
            
            const link = document.createElement('a'); // Cria um link para download
            link.href = URL.createObjectURL(file);
            link.download = `image.${cv}`;
            link.click();
            URL.revokeObjectURL(link.href); // Revoga a URL gerada para o download
            link.remove();
        }, `image/${cv}`, quality);
    }
}

export { dow };