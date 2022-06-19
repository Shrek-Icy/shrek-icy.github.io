function showAllForms() { // Show All Button command
    // Additional form checkbox
    let showAddForm = document.getElementById('optforms');

    // Element to shows the optional forms
    let hidden = document.getElementById('hiddenoptform');

    // Optional forms variables ---
    // // Cb means checkbox ---
    let optFormCb = document.getElementById('optionalform');

    // // // Submenu for Optional Tracking form checkback settings
    let optFmSub = document.getElementById('optinfosetting');

    // The form that's actually displayed on the page when checkbox is clicked
    // // Fm means form ---
    let optFormFm = document.getElementById('optform');
    // End of variables ---

    // Loot form variables
    // // Cb means checkbox ---
    let lootFormCb = document.getElementById('lootform');

    // // Fm means form ---
    // The form that's actually displayed on the page when checkbox is clicked
    let lootFm = document.getElementById('loot');
    // End of variables ---


    // Gambling form variables
    // // Cb means checkbox ---
    let gambFormCb = document.getElementById('gambForm');

    // // Fm means form ---
    // The form that's actually displayed on the page when checkbox is clicked
    let gambFm = document.getElementById('gamble');
    // End of variables ---

    // Event form checkbox
    // // Cb means checkbox ---
    let eventCb = document.getElementById('specForm');

    // // Fm means form ---
    // The form that's actually displayed on the page when checkbox is clicked
    let eventFm = document.getElementById('events');
    // End of variables ---


    // Script that once function is triggered it'll check if the additional forms is checked or not
    // If it is not checked then it'll open all forms and check the boxes
    // and if it's checked, then it'll close all forms and uncheck the boxes

    if (showAddForm.checked === false) {
        showAddForm.checked = true;
        hidden.style.display = "block";
        optFormCb.checked = true;
        optFmSub.style.display = "flex";
        optFormFm.style.display = "block";
        lootFormCb.checked = true;
        lootFm.style.display = "block";
        gambFormCb.checked = true;
        gambFm.style.display = "block";
        eventCb.checked = true;
        eventFm.style.display = "block";
    } else {
        showAddForm.checked = false;
        hidden.style.display = "none";
        optFormCb.checked = false;
        optFmSub.style.display = "none";
        optFormFm.style.display = "none";
        lootFormCb.checked = false;
        lootFm.style.display = "none";
        gambFormCb.checked = false;
        gambFm.style.display = "none";
        eventCb.checked = false;
        eventFm.style.display = "none";
    }
}


/* Unused variables to shorten actual function

let addFormcheckbox = getComputedStyle(document.getElementById('optforms'));
let button = document.getElementById('showallform');
let eventFmDisp = getComputedStyle(document.getElementById('events'));
let eventCbDisp = getComputedStyle(document.getElementById('specForm'));
let gambFmDisp = getComputedStyle(document.getElementById('gamble'));
let gambFormCbDisp = getComputedStyle(document.getElementById('gambForm'));
let lootFmDisp = getComputedStyle(document.getElementById('loot'));
let lootFormCbDisp = getComputedStyle(document.getElementById('lootform'));
let optFormFmDisp = getComputedStyle(document.getElementById('optionalform'));
let useInfoCb = document.getElementById('useinfo');
let useInfoCbDisp = getComputedStyle(document.getElementById('useinfo'));
let saveInfoCb = document.getElementById('saveinfo');
let saveInfoCbDisp = getComputedStyle(document.getElementById('saveinfo'));
let optFmSubDisp = getComputedStyle(document.getElementById('optinfosetting'));
let optFormCbDisp = getComputedStyle(document.getElementById('optionalform'));
let currDisp = getComputedStyle(document.getElementById('hiddenoptform'));

*/