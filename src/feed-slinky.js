function feedSlinky(parentElement, donutName, tail) {
    const span = document.createElement('span');
    span.classList.add('part');
    span.classList.add('dance');
    span.classList.add(donutName);
    
    parentElement.insertBefore(span, tail);
}

export default feedSlinky;