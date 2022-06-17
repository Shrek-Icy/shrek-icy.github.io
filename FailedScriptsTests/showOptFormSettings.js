function showOptFormSettings() {
    let hidden = document.getElementById('optinfosetting');
    let currDisp = getComputedStyle(document.getElementById('optinfosetting')).display;
    if (currDisp === "none") {
        hidden.style.display = 'block';
    } else {
        hidden.style.display = 'none';
    };
};