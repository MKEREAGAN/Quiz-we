const accueil = document.getElementById("accueil");
const quiz = document.getElementById("quiz");
const commencer = document.getElementById("commencer");
const themeSelect = document.getElementById("theme");

console.log("script.js chargé");
console.log(mots);

let score = 0;
let index = 0;
let questions = [];
let motCourant = "";
let audioCourant = "";

const question = document.getElementById("question");
const boutons = document.querySelectorAll(".reponse");
const message = document.getElementById("message");
const barre = document.getElementById("barre");
const progression = document.getElementById("progression");
const parler = document.getElementById("parler");

function melanger(tableau) {
    for (let i = tableau.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tableau[i], tableau[j]] = [tableau[j], tableau[i]];
    }
    return tableau;
}

commencer.addEventListener("click", function () {

    let themeChoisi = themeSelect.value;
    let motsSelectionnes;

    if (themeChoisi === "Tous") {
        motsSelectionnes = [...mots];
    } else {
        motsSelectionnes = mots.filter(
            m => m.theme === themeChoisi
        );
    }

    questions = [];

    motsSelectionnes.forEach(mot => {

        let mauvaisesReponses = mots
            .filter(m => m.fr !== mot.fr)
            .map(m => m.fr);

        mauvaisesReponses = melanger(mauvaisesReponses);

        let choix = [
            mot.fr,
            mauvaisesReponses[0],
            mauvaisesReponses[1],
            mauvaisesReponses[2]
        ];

        choix = melanger(choix);

        questions.push({
            motWe: mot.we,
            audio: mot.audio,
            question: "Que signifie " + mot.we + " ?",
            choix: choix,
            bonne: choix.indexOf(mot.fr)
        });

    });

    questions = melanger(questions);

    if (questions.length > 10) {
        questions = questions.slice(0, 10);
    }

    if (questions.length === 0) {
        alert("Aucune question trouvée.");
        return;
    }

    score = 0;
    index = 0;

    accueil.style.display = "none";
    quiz.style.display = "block";

    afficherQuestion();

});

function afficherQuestion() {

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

    question.textContent = q.question;

    boutons.forEach((btn, i) => {

        btn.textContent = q.choix[i];
        btn.disabled = false;

        btn.onclick = function () {

            boutons.forEach(
                b => b.disabled = true
            );

            if (i === q.bonne) {

                score++;

                message.textContent =
                    "✅ Bonne réponse !";

                message.style.color =
                    "green";

            } else {

                message.textContent =
                    "❌ Mauvaise réponse !";

                message.style.color =
                    "red";

            }

            setTimeout(() => {

                message.textContent = "";

                index++;

                if (index < questions.length) {

                    afficherQuestion();

                } else {

                    afficherResultat();

                }

            }, 1000);

        };

    });

}

function afficherResultat() {

    let pourcentage =
        Math.round(
            (score / questions.length) * 100
        );

    quiz.innerHTML = `
        <h2>🏆 Partie terminée</h2>
        <h3>Score : ${score}/${questions.length}</h3>
        <h3>${pourcentage}%</h3>

        <button onclick="location.reload()">
            🔄 Rejouer
        </button>
    `;
}

parler.addEventListener("click", function () {

    if (audioCourant) {

        let audio = new Audio(audioCourant);
        audio.play();

    } else {

        let voix =
            new SpeechSynthesisUtterance(
                motCourant
            );

        voix.lang = "fr-FR";
        voix.rate = 0.8;

        speechSynthesis.speak(voix);

    }

});
