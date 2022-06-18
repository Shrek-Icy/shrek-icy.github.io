// Advanced variable object for functions in this file 
const form = {
    //show all button
    button: document.getElementById('showallform'),
    // Additional Forms Checkbox
    allOptForms: document.getElementById('optforms'),
    allOptDisp: getComputedStyle(document.getElementById('optforms')).display,

    // Optional form settings    save/use
    optInfoHide: document.getElementById('optinfosetting'),
    optInfoDisp: getComputedStyle(document.getElementById('optinfosetting')).display,
    // Optional form
    optForm: document.getElementById('optform'),
    currOptForm: getComputedStyle(document.getElementById('optform')).display,
    // Loot form
    lootForm: document.getElementById('loot'),
    currLootDisp: getComputedStyle(document.getElementById('loot')).display,
    // Gamble Form
    gambleForm: document.getElementById('gamble'),
    currGambleForm: getComputedStyle(document.getElementById('gamble')).display,
    // Event Form
    eventForm: document.getElementById('events'),
    currEventDisp: getComputedStyle(document.getElementById('events')).display
};

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
    on(trigger, "change", function() {
        if (form.allOptDispallOptDisp === "none") {
            return form.allOptForms.style.display = 'block';
        } else {
            return form.allOptForms.style.display = 'none';
        };
    });
};