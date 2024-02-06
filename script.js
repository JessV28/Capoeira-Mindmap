document.addEventListener("DOMContentLoaded", function () {
    const learnButton = document.getElementById("learnButton");
    const moveDescription = document.getElementById("moveDescription");
    const moves = document.querySelectorAll(".node");

    const translations = {
        "esquivas": "Dodges",
        "de frente": "Forward dodge",
        "de lado": "Sideways dodge",
        "diagonal": "Diagonal dodge",
        "ataques": "Attacks",
        "Armada": "Armed",
        "Queixada": "Jaw strike",
        "Meia Lua de Compasso": "Compass crescent",
        "Negativa": "Negativa",
        "Role": "Roll",
        "Descida Basica": "Basic descent",
        // Add more translations for other moves here
    };

    learnButton.addEventListener("click", function () {
        alert("Capoeira is an Afro-Brazilian martial art that combines elements of dance, acrobatics, and music.");
    });

    moves.forEach(function (move) {
        move.addEventListener("mouseover", function () {
            const translation = translations[move.textContent.toLowerCase()];
            if (translation) {
                moveDescription.textContent = translation;
            }
        });

        move.addEventListener("mouseout", function () {
            moveDescription.textContent = "";
        });
    });
});
