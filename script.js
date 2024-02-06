document.addEventListener('DOMContentLoaded', function() {
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

    const translations = {
        'Esquivas': 'Dodges',
        'de frente': 'Forward dodge',
        'de lado': 'Sideways dodge',
        'diagonal': 'Diagonal dodge',
        'Ataques': 'Attacks',
        'Armada': 'Armed',
        'Queixada': 'Jaw strike',
        'Meia Lua de Compasso': 'Compass crescent',
        // Add more translations here as needed
    };

    document.querySelectorAll('.node').forEach(node => {
        node.addEventListener('mouseover', (e) => {
            const translation = translations[node.textContent];
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
