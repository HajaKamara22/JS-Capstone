document.addEventListener("DOMContentLoaded", () => {
    const wordChoices = ["liberia", "sierraleone", "nigeria", "cuba"];
    const hints = [
        "the only Black state in Africa never subjected to colonial rule and is Africa's oldest republic",
        "west african country known as the lion mountains",
        "Africa's largest oil and gas producer",
        "a country in the Caribbean"
    ];

    let randomIndex = Math.floor(Math.random() * wordChoices.length);
    let answers = wordChoices[randomIndex];
    let hint = hints[randomIndex];
    let lives = 5;
    let guessedLetters = [];
    let wordDisplay = Array(answers.length).fill("_");

    const dashes = document.getElementById("lines");
    dashes.textContent = wordDisplay.join(" ");

    const updateLivesDisplay = () => {
        const livesElement = document.getElementById("lives-remaining");
        livesElement.textContent = `Remaining Lives: ${lives}`;
    };

    updateLivesDisplay();

    window.alphabet = function(button) {
        const letter = button.value;
        if (guessedLetters.includes(letter)) return;

        guessedLetters.push(letter);

        if (answers.includes(letter)) {
            for (let i = 0; i < answers.length; i++) {
                if (answers[i] === letter) {
                    wordDisplay[i] = letter;
                }
            }
            dashes.textContent = wordDisplay.join(" ");
        } else {
            lives--;
            updateLivesDisplay();
        }

        if (!wordDisplay.includes("_")) {
            document.getElementById("display").textContent = "You're a winner";
            document.getElementById("correct-word").textContent = `Correct Word: ${answers}`;
            disableButtons();
        }

        if (lives <= 0) {
            document.getElementById("display").textContent = "Game Over!";
            document.getElementById("correct-word").textContent = `Correct Word: ${answers}`;
            disableButtons();
        }
    };

    const disableButtons = () => {
        const buttons = document.getElementsByClassName("letter");
        for (let button of buttons) {
            button.disabled = true;
        }
    };

    const enableButtons = () => {
        const buttons = document.getElementsByClassName("letter");
        for (let button of buttons) {
            button.disabled = false;
        }
    };

    document.getElementById("reset-button").addEventListener("click", () => {
        randomIndex = Math.floor(Math.random() * wordChoices.length);
        answers = wordChoices[randomIndex];
        hint = hints[randomIndex];
        lives = 5;
        guessedLetters = [];
        wordDisplay = Array(answers.length).fill("_");
        dashes.textContent = wordDisplay.join(" ");
        document.getElementById("lives-remaining").textContent = `Remaining Lives: ${lives}`;
        document.getElementById("display").textContent = "";
        document.getElementById("correct-word").textContent = "";
        document.getElementById("hint").textContent = "";
        enableButtons();
    });

    document.getElementById("hint-button").addEventListener("click", () => {
        document.getElementById("hint").textContent = hint;
    });
});