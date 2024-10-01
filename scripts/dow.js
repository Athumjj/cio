class dow {
    constructor(item, cv) {
        const img = new Image();
        
        img.onload = () => {
            console.log('Imagem carregada:', img); // Verifica se a imagem foi carregada
            this.convert.call(img, cv);
        };
        
        img.src = URL.createObjectURL(item);
    }

    convert(cv) {
        const a = document.createElement("canvas"),
        ctx = a.getContext("2d");

        a.width = this.width;
        a.height = this.height;
        ctx.drawImage(this, 0, 0);

        console.log('Imagem desenhada no canvas:', this); // Verifica se a imagem foi desenhada

        URL.revokeObjectURL(this.src);

        const quality = cv === 'jpeg' ? 0.75 : undefined;

        a.toBlob((blob) => {
            console.log('Blob gerado:', blob); // Verifica se o blob foi gerado
            
            const file = new File([blob], `image.${cv}`, { type: "application/octet-stream" });

            const link = document.createElement('a');
            link.href = URL.createObjectURL(file);
            link.download = `image.${cv}`;
            link.click();

            console.log('Arquivo pronto para download');
            URL.revokeObjectURL(link.href);
        }, `image/${cv}`, quality);
    }
}

export { dow };
