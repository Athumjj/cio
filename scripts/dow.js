class dow {
    constructor(item, cv) {
        const imgUrl = URL.createObjectURL(item);
        const a = document.createElement("a");
        a.href = imgUrl;
        a.download = "img." + cv;
        a.click();
        a.remove();
    }
}

export { dow };