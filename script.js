// Attendre que le DOM soit chargé et mots.js soit disponible
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeQuiz);
} else {
    initializeQuiz();
}

function initializeQuiz() {
    const accueil = document.getElementById("accueil");
    const quiz = document.getElementById("quiz");
    const commencer = document.getElementById("commencer");
    const themeSelect = document.getElementById("theme");

    // Vérifier que mots est chargé
    if (typeof mots === 'undefined' || !Array.isArray(mots)) {
        console.error("❌ Erreur : mots.js n'est pas chargé correctement");
        alert("Erreur : Les données du quiz ne se sont pas chargées. Veuillez rafraîchir la page.");
        return;
    }

    console.log("✅ Quiz initialisé - " + mots.length + " mots chargés");

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
        const copie = [...tableau];
        for (let i = copie.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copie[i], copie[j]] = [copie[j], copie[i]];
        }
        return copie;
    }

    commencer.addEventListener("click", function () {
        let themeChoisi = themeSelect.value;
        let motsSelectionnes;

        if (themeChoisi === "Tous") {
            motsSelectionnes = [...mots];
        } else {
            motsSelectionnes = mots.filter(m => m.theme === themeChoisi);
        }

        if (motsSelectionnes.length === 0) {
            alert("❌ Aucun mot trouvé pour ce thème. Veuillez en sélectionner un autre.");
            return;
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

        score = 0;
        index = 0;

        accueil.style.display = "none";
        quiz.style.display = "block";

        afficherQuestion();
    });

    function afficherQuestion() {
        if (index >= questions.length) {
            afficherResultat();
            return;
        }

        let q = questions[index];

        motCourant = q.motWe;
        audioCourant = q.audio;

        let pourcentage = ((index + 1) / questions.length) * 100;

        barre.style.width = pourcentage + "%";

        progression.textContent = "Question " + (index + 1) + "/" + questions.length;

        question.textContent = q.question;
        message.textContent = "";

        boutons.forEach((btn, i) => {
            btn.textContent = q.choix[i];
            btn.disabled = false;
            btn.style.backgroundColor = "";
            btn.onclick = function () {
                repondre(i, q.bonne);
            };
        });
    }

    function repondre(indexReponse, bonneReponse) {
        boutons.forEach(b => b.disabled = true);

        if (indexReponse === bonneReponse) {
            score++;
            message.textContent = "✅ Bonne réponse !";
            message.style.color = "green";
            boutons[indexReponse].style.backgroundColor = "lightgreen";
        } else {
            message.textContent = "❌ Mauvaise réponse !";
            message.style.color = "red";
            boutons[indexReponse].style.backgroundColor = "lightcoral";
            boutons[bonneReponse].style.backgroundColor = "lightgreen";
        }

        setTimeout(() => {
            index++;
            afficherQuestion();
        }, 1500);
    }

    function afficherResultat() {
        let pourcentage = Math.round((score / questions.length) * 100);

        quiz.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <h2>🏆 Partie terminée</h2>
                <h3>Score : ${score}/${questions.length}</h3>
                <h3>${pourcentage}%</h3>
                <button onclick="location.reload()" style="padding: 10px 20px; font-size: 16px; cursor: pointer;">
                    🔄 Rejouer
                </button>
            </div>
        `;
    }

    parler.addEventListener("click", function () {
        if (audioCourant) {
            let audio = new Audio(audioCourant);
            audio.play().catch(err => {
                console.error("Erreur lors de la lecture audio :", err);
                utiliserSynthese();
            });
        } else {
            utiliserSynthese();
        }
    });

    function utiliserSynthese() {
        let voix = new SpeechSynthesisUtterance(motCourant);
        voix.lang = "fr-FR";
        voix.rate = 0.8;
        speechSynthesis.speak(voix);
    }
}
