function feedSlinky(parentElement, donutName) {
    const span = document.createElement('span');
    span.classList.add('part');
    span.classList.add(donutName);

    parentElement.appendChild(span);
}

export default feedSlinky;