class dow {
    constructor(item, cv) {
        const img = new Image();
        img.onload = this.convert;
        img.src = URL.createObjectURL(item);
    }
    
    convert() {
        URL.revokeObjectURL(this.src);
        const a = document.createElement("canvas"),
        ctx = a.getContext("2d");
        a.width = this.width;
        a.height = this.height;
        ctx.drawImage(this, 0, 0);
        
        a.toBlob((blob) => {
            const file = new File([blob], `image.${cv}`, { type: "application/octet-stream" });
            window.location = URL.createObjectURL(file);
        }, `image/${cv}`, 0.75);
    }
}

export { dow };