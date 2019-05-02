import feedSlinky from '../src/feed-slinky.js';

const donutButtons = document.querySelectorAll('.donut');
const body = document.getElementById('body');
const tail = document.getElementById('tail');

for(let i = 0; i < donutButtons.length; i++) {
    const donutButton = donutButtons[i];
    
    donutButton.addEventListener('click', () => {
        
        feedSlinky(body, donutButton.value, tail);

    });
}

// dancing function

const danceButtons = document.querySelectorAll('.dance-button');

for(let i = 0; i < danceButtons.length; i++) {
    const danceButton = danceButtons[i];

    danceButton.addEventListener('click', () => {
        removeAllDancing();
        addDancing(danceButton.value);
        console.log(danceButton);
    });
    
}

function removeAllDancing() {
    const colorSections = document.querySelectorAll('.dance');
    for(let i = 0; i < colorSections.length; i++) {
        const colorSection = colorSections[i];
        colorSection.classList.remove('dance');
        console.log(colorSection);
    }
}


function addDancing(donutUp) {
    const colorSections = document.querySelectorAll('.dance');
    for(let i = 0; i < colorSections.length; i++) {
        const colorSection = colorSections[i];
        if(colorSection.classList.contains(donutUp)) {
            colorSection.classList.add('dance');
        }
    }
    
}

