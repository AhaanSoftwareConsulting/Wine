// script.js
const items = document.querySelectorAll('.arc-item');
let current = 0;

function updateArc() {
    items.forEach((item, index) => {
        item.classList.remove('active', 'left', 'left-far', 'right', 'right-far');

        if (index === current) {
            item.classList.add('active');
        } else if (index === (current - 1 + items.length) % items.length) {
            item.classList.add('left');
        } else if (index === (current - 2 + items.length) % items.length) {
            item.classList.add('left-far');
        } else if (index === (current + 1) % items.length) {
            item.classList.add('right');
        } else if (index === (current + 2) % items.length) {
            item.classList.add('right-far');
        }
    });
}

document.getElementById('nextBtn').addEventListener('click', () => {
    current = (current + 1) % items.length;
    updateArc();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    current = (current - 1 + items.length) % items.length;
    updateArc();
});

// Initial render
updateArc();
