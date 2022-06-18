/* Possibly global.js --- Files fucked up, rewriting global.js

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
    let trigger = document.getElementById('optforms');
    let hidden = document.getElementById('hiddenoptform');
    let currDisp = getComputedStyle(document.getElementById('hiddenoptform')).display;
    on(trigger, "change", function() {
        if (currDisp === "none") {
            return hidden.style.display = 'block';
        } else {
            return hidden.style.display = 'none';
        };
    });
};

//  Display all forms button
/* function showAllForms() {
    cons Form = {
        trigger: document.getElementById('showallform'),
        hidden: document.getElementById('optinfosetting')
    }

    let trigger = document.getElementById('showallform'); // elementID that is the trigger

    let hidden = document.getElementById('optinfosetting'); // elementID that shows/hides
    let currDisp = getComputedStyle(document.getElementById('optinfosetting')).display; // Current display of variable

    let hiddenForm = document.getElementById('optform'); // elementID that shows/hides
    let currForm = getComputedStyle(document.getElementById('optform')).display; // Current display of hiddenform variable

    let hidden = document.getElementById('loot');
    let currDisp = getComputedStyle(document.getElementById('loot')).display;
    let hidden = document.getElementById('gamble');
    let currDisp = getComputedStyle(document.getElementById('gamble')).display;
    let hidden = document.getElementById('events');
    let currDisp = getComputedStyle(document.getElementById('events')).display;
}

// Displays the additional info form settings
function showOptForm() {
    let trigger = document.getElementById('optionalform'); // element that is the trigger
    let hidden = document.getElementById('optinfosetting'); // element that shows.hides
    let hiddenForm = document.getElementById('optform'); // element that shows.hides
    let currDisp = getComputedStyle(document.getElementById('optinfosetting')).display; // Current display of hidden variable
    let currForm = getComputedStyle(document.getElementById('optform')).display; // Current display of hiddenform variable
    on(trigger, "change", function() {
        if (currDisp === "none") {
            return hidden.style.display = 'block';
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

*/

/* Another possible global.js backup   
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
    let trigger = document.getElementById('optforms');
    let hidden = document.getElementById('optinfosetting'); // element that shows.hides
    let hiddenForm = document.getElementById('optform'); // element that shows.hides
    let currDisp = getComputedStyle(document.getElementById('optinfosetting')).display; // display of hidden variable
    let currForm = getComputedStyle(document.getElementById('optform')).display; // display of hiddenform variable
    on(trigger, "change", function() {
        if (currDisp === "none") {
            return hidden.style.display = 'block';
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

*/