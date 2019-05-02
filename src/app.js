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
    const colorButtons = document.querySelectorAll('.dance');
    for(let i = 0; i < colorButtons.length; i++) {
        const colorButton = colorButtons[i];
        colorButton.classList.remove('dance');
        console.log(colorButton);
    }
}


function addDancing(donutUp) {
    const colorButtons = document.querySelectorAll('.dance');
    for(let i = 0; i < colorButtons.length; i++) {
        const colorButton = colorButtons[i];
        if(colorButton.classList.contains(donutUp)) {
            colorButton.classList.add('dancing');
        }
    }
    
}

