// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize your mind map here. This is a placeholder for mind map logic.
    // You would use a library like D3.js or vis.js to create the nodes and links.

    // Example of handling clicks on nodes to play audio
    document.querySelectorAll('.node').forEach(node => {
        node.addEventListener('click', () => {
            const audio = new Audio(`audio/${node.dataset.portugueseWord}.mp3`);
            audio.play();
        });
    });

    // Example of showing translations on hover
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);

    document.querySelectorAll('.node').forEach(node => {
        node.addEventListener('mouseover', (e) => {
            tooltip.textContent = node.dataset.englishTranslation;
            tooltip.style.left = `${e.pageX}px`;
            tooltip.style.top = `${e.pageY}px`;
            tooltip.classList.add('visible');
        });
        node.addEventListener('mouseout', () => {
            tooltip.classList.remove('visible');
        });
    });

    // Here you would also handle the logic for expanding/retracting nodes based on levels
    // and for adding YouTube links to certain nodes.
});
