document.addEventListener("DOMContentLoaded", function () {
    const learnButton = document.getElementById("learnButton");
    const moveDescription = document.getElementById("moveDescription");
    const moves = document.querySelectorAll(".translate-esquivas, .translate-ataques, .translate-movimentos");

    learnButton.addEventListener("click", function () {
        alert("Capoeira is an Afro-Brazilian martial art that combines elements of dance, acrobatics, and music.");
    });

    moves.forEach(function (move) {
        move.addEventListener("mouseover", function () {
            const translation = this.getAttribute("data-translation");
            moveDescription.textContent = translation;
        });

        move.addEventListener("mouseout", function () {
            moveDescription.textContent = "";
        });
    });
});
