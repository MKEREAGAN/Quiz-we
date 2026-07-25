const accueil = document.getElementById("accueil");
const quiz = document.getElementById("quiz");
const commencer = document.getElementById("commencer");
const themeSelect = document.getElementById("theme");

// Supprimé l'alert inutile
console.log("script.js chargé");
console.log(mots);

let score = 0;
let index = 0;
let questions = [];
let motCourant = "";
let audioCourant = "";

function melanger(tableau) {
    // Meilleur algorithme de mélange (Fisher-Yates)
    for (let i = tableau.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tableau[i], tableau[j]] = [tableau[j], tableau[i]];
    }
    return tableau;
}

const question = document.getElementById("question");
const boutons = document.querySelectorAll(".reponse");
const message = document.getElementById("message");

const barre = document.getElementById("barre");
const progression = document.getElementById("progression");
const parler = document.getElementById("parler");

// Ajouter l'événement pour commencer le quiz
commencer.addEventListener("click", function() {
    let themeChoisi = themeSelect.value;
    
    if (themeChoisi === "Tous") {
        questions = melanger([...mots]);
    } else {
        questions = melanger(mots.filter(m => m.theme === themeChoisi));
    }
    
    score = 0;
    index = 0;
    accueil.style.display = "none";
    quiz.style.display = "block";
    afficherQuestion();
});

function afficherQuestion() {
    
    if (!questions || questions.length === 0) {
        message.textContent = "Aucune question disponible";
        return;
    }

    let q = questions[index];

    motCourant = q.motWe;
    audioCourant = q.audio;

    let pourcentage =
        ((index + 1) / questions.length) * 100;

    barre.style.width = pourcentage + "%";

    progression.textContent =
        "Question " +
        (index + 1) +
        "/" +
        questions.length;

    question.textContent =
        "Question " +
        (index + 1) +
        "/" +
        questions.length +
        " : " +
        q.question;

    boutons.forEach((btn, i) => {

        btn.textContent = q.choix[i];
        btn.disabled = false;

        btn.onclick = function () {

            boutons.forEach(b => b.disabled = true);

            if (i === q.bonne) {

                score++;
                message.textContent = "✅ Bonne réponse !";
                message.style.color = "green";

            } else {

                message.textContent = "❌ Mauvaise réponse ! La bonne réponse était : " + q.choix[q.bonne];
                message.style.color = "red";

            }

            setTimeout(function () {

                message.textContent = "";

                index++;

                if (index < questions.length) {
                    afficherQuestion();
                } else {
                    afficherResultat();
                }

                boutons.forEach(b => b.disabled = false);

            }, 1500);

        };

    });

}

function afficherResultat() {
    quiz.style.display = "none";
    accueil.style.display = "block";
    
    let pourcentage = Math.round((score / questions.length) * 100);
    
    message.textContent = `Quiz terminé ! Score : ${score}/${questions.length} (${pourcentage}%)`;
    message.style.color = "blue";
    
    index = 0;
    score = 0;
}

// Ajouter événement pour le bouton parler
parler.addEventListener("click", function() {
    if (audioCourant) {
        // Vous pouvez utiliser une API de synthèse vocale
        console.log("Jouer l'audio : " + audioCourant);
    }
});
