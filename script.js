document.addEventListener('DOMContentLoaded', function() {
    // Tooltip setup
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);

    document.querySelectorAll('.node').forEach(node => {
        // Tooltip display logic
        node.addEventListener('mouseover', (e) => {
            const translation = node.getAttribute('data-translation');
            if (translation) {
                tooltip.textContent = translation;
                tooltip.style.left = `${e.pageX}px`;
                tooltip.style.top = `${e.pageY}px`;
                tooltip.classList.add('visible');
            }
        });

        node.addEventListener('mouseout', () => {
            tooltip.classList.remove('visible');
        });

        // Audio playback logic for nodes with a 'data-audio' attribute
        node.addEventListener('click', function() {
            const audioFile = this.getAttribute('data-audio');
            if (audioFile) {
                const audio = new Audio(`audio/${audioFile}.mp3`);
                audio.play();
            }
        });
    });
});
