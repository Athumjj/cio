class dow {
    constructor(item, cv) {
        const a = document.createElement("a");
        a.href = item;
        a.download = "img." + cv;
        a.click();
        a.remove();
    }
}

export { dow };