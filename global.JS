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

/* // find the element
var el = document.getElementById("btn");

// add the first listener
on(el, "click", function() {
    alert("foo");
});

// add the second listener
on(el, "click", function() {
    alert("bar");
});
*/

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

// Displays the additional information form.
function showAddInfoForm() {
    let hidden = document.getElementById('optform');
    let currDisp = getComputedStyle(document.getElementById('optform')).display;
    if (currDisp === "none") {
        hidden.style.display = 'block';
    } else {
        hidden.style.display = 'none';
    };
};

//
