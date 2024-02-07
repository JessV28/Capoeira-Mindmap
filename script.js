document.addEventListener('DOMContentLoaded', function() {
    const nodes = document.querySelectorAll('.node');
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);

    nodes.forEach(node => {
        node.addEventListener('mouseover', function(e) {
            const translation = this.getAttribute('data-translation');
            tooltip.textContent = translation;
            tooltip.style.left = `${e.pageX}px`;
            tooltip.style.top = `${e.pageY}px`;
            tooltip.classList.add('visible');
        });

        node.addEventListener('mouseout', function() {
            tooltip.classList.remove('visible');
        });

        node.addEventListener('click', function() {
            const audioFile = this.getAttribute('data-audio');
            const audio = new Audio(`audio/${audioFile}.mp3`);
            audio.play();
        });
    });

    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        category.addEventListener('click', function() {
            this.classList.toggle('active');
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});
