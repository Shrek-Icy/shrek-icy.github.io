// Portal question script

let yes = document.getElementById('yesportal');
let no = document.getElementById('noportal');
let test = document.getElementById('test');
let rooms = document.getElementById('rmdrs');
let roomOne = document.getElementById('rmonedr');

// If they did get a portal this option would then display the first room door question
yes.addEventListener('click', function() {
    rooms.style.display = 'block';
    roomOne.style.display = 'block';
});
// If no then it'll keep display none
no.addEventListener('click', function() {
    rooms.style.display = 'none';
    roomOne.style.display = 'none';
})

// Room one door question scripts

let doorOneLeft = document.getElementById('dooroneleft');
let doorOneRight = document.getElementById('dooroneright');
let doorOneEnd = document.getElementById('dooroneend');
let rmTwoDr = document.getElementById('rmtwodr');

doorOneLeft.addEventListener('click', function() {
    if (doorOneEnd.checked === false) {
        rmTwoDr.style.display = 'block'
    } else {
        console.log('Better luck next time Jimbo')
    };
});

doorOneRight.addEventListener('click', function() {
    if (doorOneEnd.checked === false) {
        rmTwoDr.style.display = 'block'
    } else {
        console.log('Better luck next time Jimbo')
    };
});

doorOneEnd.addEventListener('change', function() {
    if (rmTwoDr.style.display === 'block') {
        rmTwoDr.style.display = 'none'
    } else {
        rmTwoDr.style.display = 'block'
    };
});

// Room two door question scripts

let doorTwoLeft = document.getElementById('doortwoleft');
let doorTwoRight = document.getElementById('doortworight');
let doorTwoEnd = document.getElementById('doortwoend');
let rmThreeDr = document.getElementById('rmthreedr');

doorTwoLeft.addEventListener('click', function() {
    if (doorTwoEnd.checked === false) {
        rmThreeDr.style.display = 'block'
    } else {
        console.log('Better luck next time Jimbo')
    };
});

doorTwoRight.addEventListener('click', function() {
    if (doorTwoEnd.checked === false) {
        rmThreeDr.style.display = 'block'
    } else {
        console.log('Better luck next time Jimbo')
    };
});

doorTwoEnd.addEventListener('change', function() {
    if (rmThreeDr.style.display === 'block') {
        rmThreeDr.style.display = 'none'
    } else {
        rmThreeDr.style.display = 'block'
    };
});

// Room three door question scripts

let doorThreeLeft = document.getElementById('doorthreeleft');
let doorThreeRight = document.getElementById('doorthreeright');
let doorThreeEnd = document.getElementById('doorthreeend');
let rmFourDr = document.getElementById('rmfourdr');

doorThreeLeft.addEventListener('click', function() {
    if (doorThreeEnd.checked === false) {
        rmFourDr.style.display = 'block'
    } else {
        console.log('Better luck next time Jimbo')
    };
});

doorThreeRight.addEventListener('click', function() {
    if (doorThreeEnd.checked === false) {
        rmFourDr.style.display = 'block'
    } else {
        console.log('Better luck next time Jimbo')
    };
});

doorThreeEnd.addEventListener('change', function() {
    if (rmFourDr.style.display === 'block') {
        rmFourDr.style.display = 'none'
    } else {
        rmFourDr.style.display = 'block'
    };
});

// Room four door question scripts

let doorFourLeft = document.getElementById('doorfourleft');
let doorFourRight = document.getElementById('doorfourright');
let doorFourEnd = document.getElementById('doorfourend');
let rmFiveDr = document.getElementById('rmfive');

doorFourLeft.addEventListener('click', function() {
    if (doorFourEnd.checked === false) {
        rmFiveDr.style.display = 'block'
    } else {
        console.log('Better luck next time Jimbo')
    };
});

doorFourRight.addEventListener('click', function() {
    if (doorFourEnd.checked === false) {
        rmFiveDr.style.display = 'block'
    } else {
        console.log('Better luck next time Jimbo')
    };
});

doorFourEnd.addEventListener('change', function() {
    if (rmFiveDr.style.display === 'block') {
        rmFiveDr.style.display = 'none'
    } else {
        rmFiveDr.style.display = 'block'
    };
});