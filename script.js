document.addEventListener('DOMContentLoaded', function() {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);

    document.querySelectorAll('.node').forEach(node => {
        // Display tooltip on hover
        node.addEventListener('mouseover', (e) => {
            const translation = node.getAttribute('data-translation');
            if (translation) {
                tooltip.textContent = translation;
                tooltip.style.left = `${e.pageX + 10}px`; // Slight offset for better visibility
                tooltip.style.top = `${e.pageY + 10}px`;
                tooltip.classList.add('visible');
            }
        });

        node.addEventListener('mouseout', () => {
            tooltip.classList.remove('visible');
        });

        // Play audio on click
        node.addEventListener('click', function() {
            const audioFile = this.getAttribute('data-audio');
            if (audioFile) {
                const audio = new Audio(`audio/${audioFile}.mp3`);
                audio.play();
            }
        });
    });
});
