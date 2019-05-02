import feedSlinky from '../src/feed-slinky.js';
import removeAllDancing from './remove-all-dancing.js';

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

const danceButtons = document.querySelectorAll('.dance');

for (let i = 0; i < danceButtons.length; i++) {
    const danceButton = danceButtons[i];

    danceButton.addEventListener('click', () => {


    });
    
}

function removeAllDancing() {
    const dancingParts = document.querySelectorAll('.dance');
    for (let i = 0; i < dancingParts.length; i++) {
        const dancingPart = dancingParts[i];
        dancingPart.classList.remove("dance");
    }
    
};

function addDancing() {
    const dancingParts = document.querySelectorAll('.dance');
    dancingParts.classList.add('dance');
}

