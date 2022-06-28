let dataCenter = document.getElementById('datacenter');
let base = document.getElementById('dczero')
let aether = document.getElementById('dcone')
let primal = document.getElementById('dctwo')
let crystal = document.getElementById('dcthree')
let elemental = document.getElementById('dcfour')
let gaia = document.getElementById('dcfive')
let mana = document.getElementById('dcsix')
let chaos = document.getElementById('dcseven')
let light = document.getElementById('dceight')
let materia = document.getElementById('dcnine')

dataCenter.addEventListener('change', function() {
    let center = dataCenter.value
    switch (center) {
        case 'None':
            base.style.display = 'block';
            aether.style.display = 'none';
            primal.style.display = 'none';
            crystal.style.display = 'none';
            elemental.style.display = 'none';
            gaia.style.display = 'none';
            mana.style.display = 'none';
            chaos.style.display = 'none';
            light.style.display = 'none';
            materia.style.display = 'none';
            break;
        case 'Aether':
            base.style.display = 'none';
            aether.style.display = 'block';
            primal.style.display = 'none';
            crystal.style.display = 'none';
            elemental.style.display = 'none';
            gaia.style.display = 'none';
            mana.style.display = 'none';
            chaos.style.display = 'none';
            light.style.display = 'none';
            materia.style.display = 'none';
            break;
        case 'Primal':
            base.style.display = 'none';
            aether.style.display = 'none';
            primal.style.display = 'block';
            crystal.style.display = 'none';
            elemental.style.display = 'none';
            gaia.style.display = 'none';
            mana.style.display = 'none';
            chaos.style.display = 'none';
            light.style.display = 'none';
            materia.style.display = 'none';
            break;
        case 'Crystal':
            base.style.display = 'none';
            aether.style.display = 'none';
            primal.style.display = 'none';
            crystal.style.display = 'block';
            elemental.style.display = 'none';
            gaia.style.display = 'none';
            mana.style.display = 'none';
            chaos.style.display = 'none';
            light.style.display = 'none';
            materia.style.display = 'none';
            break;
        case 'Elemental':
            base.style.display = 'none';
            aether.style.display = 'none';
            primal.style.display = 'none';
            crystal.style.display = 'none';
            elemental.style.display = 'block';
            gaia.style.display = 'none';
            mana.style.display = 'none';
            chaos.style.display = 'none';
            light.style.display = 'none';
            materia.style.display = 'none';
            break;
        case 'Gaia':
            base.style.display = 'none';
            aether.style.display = 'none';
            primal.style.display = 'none';
            crystal.style.display = 'none';
            elemental.style.display = 'none';
            gaia.style.display = 'block';
            mana.style.display = 'none';
            chaos.style.display = 'none';
            light.style.display = 'none';
            materia.style.display = 'none';
            break;
        case 'Mana':
            base.style.display = 'none';
            aether.style.display = 'none';
            primal.style.display = 'none';
            crystal.style.display = 'none';
            elemental.style.display = 'none';
            gaia.style.display = 'none';
            mana.style.display = 'block';
            chaos.style.display = 'none';
            light.style.display = 'none';
            materia.style.display = 'none';
            break;
        case 'Chaos':
            base.style.display = 'none';
            aether.style.display = 'none';
            primal.style.display = 'none';
            crystal.style.display = 'none';
            elemental.style.display = 'none';
            gaia.style.display = 'none';
            mana.style.display = 'none';
            chaos.style.display = 'block';
            light.style.display = 'none';
            materia.style.display = 'none';
            break;
        case 'light':
            base.style.display = 'none';
            aether.style.display = 'none';
            primal.style.display = 'none';
            crystal.style.display = 'none';
            elemental.style.display = 'none';
            gaia.style.display = 'none';
            mana.style.display = 'none';
            chaos.style.display = 'none';
            light.style.display = 'block';
            materia.style.display = 'none';
            break;
        case 'Materia':
            base.style.display = 'none';
            aether.style.display = 'none';
            primal.style.display = 'none';
            crystal.style.display = 'none';
            elemental.style.display = 'none';
            gaia.style.display = 'none';
            mana.style.display = 'none';
            chaos.style.display = 'none';
            light.style.display = 'none';
            materia.style.display = 'block';
            break;
        default:
            base.style.display = 'block';
            aether.style.display = 'none';
            primal.style.display = 'none';
            crystal.style.display = 'none';
            elemental.style.display = 'none';
            gaia.style.display = 'none';
            mana.style.display = 'none';
            chaos.style.display = 'none';
            light.style.display = 'none';
            materia.style.display = 'none';
    }
});

let yesPlayStyle = document.getElementById('yesplaystyle')
let noPlayStyle = document.getElementById('noplaystyle')
let playStyles = document.getElementById('playstyles')

yesPlayStyle.addEventListener('change', function() {
    if (yesPlayStyle.checked === true) {
        playStyles.style.display = 'block'
    } else {
        playStyles.style.display = 'none'
    };
});

noPlayStyle.addEventListener('change', function() {
    if (noPlayStyle.checked === true) {
        playStyles.style.display = 'none'
    } else {
        playStyles.style.display = 'block'
    };
});














































































//let formTwo = document.getElementById('optform');

//formTwo.style.display = 'block';