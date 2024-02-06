document.addEventListener("DOMContentLoaded", function () {
    const learnButton = document.getElementById("learnButton");
    const moveDescription = document.getElementById("moveDescription");
    const moves = document.querySelectorAll(".translate-esquivas, .translate-ataques, .translate-movimentos");

    const descriptions = {
        "de frente": "Forward evasion technique",
        "de lado": "Side evasion move",
        "diagonal": "Diagonal escape from an attack",
        "Armada": "Powerful spinning kick",
        "Meia Lua de Compasso": "Circular kick",
        "Queixada": "Frontal kick with a deceptive start",
        // Add more descriptions for other moves here
    };

    learnButton.addEventListener("click", function () {
        alert("Capoeira is an Afro-Brazilian martial art that combines elements of dance, acrobatics, and music.");
    });

    moves.forEach(function (move) {
        const translation = move.getAttribute("data-translation");
        const description = descriptions[move.textContent.toLowerCase()]; // Convert to lowercase for matching

        move.addEventListener("mouseover", function () {
            // Show the English translation
            moveDescription.textContent = translation;
            // Show the brief description
            moveDescription.insertAdjacentHTML("afterend", `<p>${description}</p>`);
        });

        move.addEventListener("mouseout", function () {
            // Clear both the translation and description
            moveDescription.textContent = "";
            const briefDescription = document.querySelector("#moveDescription + p");
            if (briefDescription) {
                briefDescription.remove();
            }
        });
    });
});
