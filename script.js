// Select all cards in the carousel
const cards = document.querySelectorAll('.card');

// Initialize state variables
let isDragging = false;
let startY = 0;
let currentIndex = 1;

// Handle mouse events for dragging functionality
cards.forEach(card => {
    card.addEventListener('mousedown', (e) => {
        isDragging = true;
        startY = e.clientY;
        card.style.cursor = 'grabbing';
    });

    card.addEventListener('mouseup', () => {
        isDragging = false;
        card.style.cursor = 'grab';
        cycleCards();
    });

    card.addEventListener('mouseleave', () => {
        if (isDragging) {
            isDragging = false;
            card.style.cursor = 'grab';
            cycleCards();
        }
    });
});

// Cycle cards to the next position
function cycleCards() {
    currentIndex = (currentIndex + 1) % 3;
    updateCardPositions();
}

// Update card positions based on the current index
function updateCardPositions() {
    cards.forEach((card, index) => {
        card.classList.remove('top', 'middle', 'bottom');
        let newIndex = (index - currentIndex + 3) % 3;
        switch (newIndex) {
            case 0: card.classList.add('top'); break;
            case 1: card.classList.add('middle'); break;
            case 2: card.classList.add('bottom'); break;
        }
    });
}
