// get a cross-browser function for adding events, place this in [global] or somewhere you can access it
const on = (function() {
    if (window.addEventListener) {
        return function(target, type, listener) {
            target.addEventListener(type, listener, false);
        };
    } else {
        return function(object, sEvent, fpNotify) {
            object.attachEvent("on" + sEvent, fpNotify);
        };
    }
}());

// Display optional forms
function showOptForms() {
    let hidden = document.getElementById('hiddenoptform');
    let currDisp = getComputedStyle(document.getElementById('hiddenoptform')).display;
    let checkbox = document.getElementsByClassName('checkbox')[0];
    if (currDisp === "none") {
        hidden.style.display = 'block';
        checkbox.checked = true;
    } else {
        hidden.style.display = 'none';
        checkbox.checked = false;
    };
};

// Displays the additional info form settings
function showOptForm() {
    let trigger = document.getElementById('optionalform'); // element that is the trigger
    let hidden = document.getElementById('optinfosetting'); // element that shows.hides
    let hiddenForm = document.getElementById('optform'); // element that shows.hides
    let currDisp = getComputedStyle(document.getElementById('optinfosetting')).display; // Current display of hidden variable
    let currForm = getComputedStyle(document.getElementById('optform')).display; // Current display of hiddenform variable
    on(trigger, "change", function() {
        if (currDisp === "none") {
            return hidden.style.display = 'flex';
        } else {
            return hidden.style.display = 'none';
        };
    });
    on(trigger, "change", function() {
        if (currForm === "none") {
            return hiddenForm.style.display = 'block';
        } else {
            return hiddenForm.style.display = 'none';
        };
    });
};

// Displays the loot tracking form
function showLootForm() {
    let hidden = document.getElementById('loot');
    let currDisp = getComputedStyle(document.getElementById('loot')).display;
    if (currDisp === "none") {
        hidden.style.display = 'block';
    } else {
        hidden.style.display = 'none';
    };
};

// displays the gamble tracking form
function showGambleForm() {
    let hidden = document.getElementById('gamble');
    let currDisp = getComputedStyle(document.getElementById('gamble')).display;
    if (currDisp === "none") {
        hidden.style.display = 'block';
    } else {
        hidden.style.display = 'none';
    };
};

//displays the event tracking form
function showEventForm() {
    let hidden = document.getElementById('events');
    let currDisp = getComputedStyle(document.getElementById('events')).display;
    if (currDisp === "none") {
        hidden.style.display = 'block';
    } else {
        hidden.style.display = 'none';
    };
};

// Show All Button script
function showAllForms() {
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
        //lootFormCb.checked = true;
        //lootFm.style.display = "block";
        // gambFormCb.checked = true;
        // gambFm.style.display = "block";
        // eventCb.checked = true;
        // eventFm.style.display = "block";
    } else {
        showAddForm.checked = false;
        hidden.style.display = "none";
        optFormCb.checked = false;
        optFmSub.style.display = "none";
        optFormFm.style.display = "none";
        // lootFormCb.checked = false;
        //lootFm.style.display = "none";
        // gambFormCb.checked = false;
        // gambFm.style.display = "none";
        // eventCb.checked = false;
        // eventFm.style.display = "none";
    }
};

let submitButton = document.getElementById('submitform');
submitButton.addEventListener('click', function() {
    location.reload();
    alert("You didn't submit anything cause the backend has yet to be built, instead I'll just reload the page for you");
});