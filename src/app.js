import feedSlinky from '../src/feed-slinky.js';

const donutButtons = document.querySelectorAll('.donut');
const body = document.getElementById('body');

for(let i = 0; i < donutButtons.length; i++) {
    const donutButton = donutButtons[i];
    
    donutButton.addEventListener('click', () => {
        
        feedSlinky(body, donutButton.value);

    });
}
