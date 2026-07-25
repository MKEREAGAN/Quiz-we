const accueil = document.getElementById("accueil");
const quiz = document.getElementById("quiz");
const commencer = document.getElementById("commencer");
const themeSelect = document.getElementById("theme");

alert("script.js chargé");
console.log("script.js chargé");
console.log(mots);

let score = 0;
let index = 0;
let questions = [];
let motCourant = "";
let audioCourant = "";

function melanger(tableau) {
    return tableau.sort(() => Math.random() - 0.5);
}

const question = document.getElementById("question");
const boutons = document.querySelectorAll(".reponse");
const message = document.getElementById("message");

const barre = document.getElementById("barre");
const progression = document.getElementById("progression");
const parler = document.getElementById("parler");

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

    question.textContent =
        "Question " +
        (index + 1) +
        "/" +
        questions.length +
        " : " +
        q.question;

    boutons.forEach((btn, i) => {

        btn.textContent = q.choix[i];

        btn.onclick = function () {

            boutons.forEach(b => b.disabled = true);

            if (i === q.bonne) {

                score++;
                message.textContent = "✅ Bonne réponse !";
                message.style.color = "green";

            } else {

                message.textContent = "❌ Mauvaise réponse !";
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

            }, 1000);

        };

    });

}
