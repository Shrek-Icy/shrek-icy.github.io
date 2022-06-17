function showOptForms() {
    let hidden = document.getElementById('hiddenoptform');
    let currDisp = getComputedStyle(document.getElementById('hiddenoptform')).display;
    if (currDisp === "none") {
        hidden.style.display = 'block';
    } else {
        hidden.style.display = 'none';
    };
};