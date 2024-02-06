document.addEventListener('DOMContentLoaded', function() {
    // Tooltip setup remains the same
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);

    // No need to define translations here since we use data-translation attributes

    document.querySelectorAll('.node').forEach(node => {
        node.addEventListener('mouseover', (e) => {
            // Use data-translation attribute for the translation
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
    });
});
