// Attendre que le DOM soit chargé et mots.js soit disponible
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeQuiz);
} else {
    initializeQuiz();
}

function waitForMots(maxAttempts = 50) {
    return new Promise((resolve, reject) => {
        let attempts = 0;
        const interval = setInterval(() => {
            attempts++;
            if (typeof mots !== 'undefined' && Array.isArray(mots) && mots.length > 0) {
                clearInterval(interval);
                console.log("✅ mots.js chargé avec " + mots.length + " mots");
                resolve(mots);
            } else if (attempts >= maxAttempts) {
                clearInterval(interval);
                console.error("❌ Timeout : mots.js n'a pas pu être chargé");
                reject(new Error("mots.js non disponible"));
            }
        }, 100);
    });
}

async function initializeQuiz() {
    const accueil = document.getElementById("accueil");
    const quiz = document.getElementById("quiz");
    const commencer = document.getElementById("commencer");
    const themeSelect = document.getElementById("theme");

    try {
        // Attendre que mots soit chargé
        await waitForMots();
    } catch (err) {
        console.error("Erreur critique :", err);
        alert("❌ Erreur : Les données du quiz ne se sont pas chargées.\nVeuillez :\n1. Rafraîchir la page (F5)\n2. Vider le cache du navigateur\n3. Redémarrer l'application");
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
            // Vérifier que le mot a les propriétés requises
            if (!mot.we || !mot.fr || !mot.theme) {
                console.error("❌ Mot incomplet :", mot);
                return;
            }

            let mauvaisesReponses = mots
                .filter(m => m.fr && m.fr !== mot.fr)
                .map(m => m.fr);

            mauvaisesReponses = melanger(mauvaisesReponses);

            // S'assurer qu'on a au moins 3 mauvaises réponses
            if (mauvaisesReponses.length < 3) {
                console.warn("⚠️ Pas assez de mauvaises réponses pour le mot :", mot.we);
                return;
            }

            let choix = [
                mot.fr,
                mauvaisesReponses[0],
                mauvaisesReponses[1],
                mauvaisesReponses[2]
            ];

            choix = melanger(choix);

            questions.push({
                motWe: mot.we,
                audio: mot.audio || null,
                question: "Que signifie " + mot.we + " ?",
                choix: choix,
                bonne: choix.indexOf(mot.fr)
            });
        });

        if (questions.length === 0) {
            alert("❌ Aucune question valide trouvée pour ce thème.");
            return;
        }

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

        // Vérification de sécurité
        if (!q || !q.question || !q.choix || q.choix.length < 4) {
            console.error("❌ Question invalide :", q);
            index++;
            afficherQuestion();
            return;
        }

        motCourant = q.motWe || "???";
        audioCourant = q.audio || null;

        let pourcentage = ((index + 1) / questions.length) * 100;

        barre.style.width = pourcentage + "%";

        progression.textContent = "Question " + (index + 1) + "/" + questions.length;

        question.textContent = q.question;
        message.textContent = "";

        boutons.forEach((btn, i) => {
            btn.textContent = q.choix[i] || "???";
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
            // Construire l'URL complète du fichier audio
            let audioUrl = audioCourant;
            
            // Si le chemin est relatif (commence par "audios/"), construire l'URL GitHub raw
            if (audioCourant.startsWith('audios/')) {
                audioUrl = 'https://raw.githubusercontent.com/MKEREAGAN/Quiz-we/main/' + audioCourant;
            }
            
            console.log("🔊 Lecture audio :", audioUrl);
            
            let audio = new Audio(audioUrl);
            audio.play().catch(err => {
                console.error("❌ Erreur lors de la lecture audio :", err);
                console.log("📢 Utilisation de la synthèse vocale en fallback");
                utiliserSynthese();
            });
        } else {
            console.log("❌ Pas d'audio pour ce mot, utilisation de la synthèse vocale");
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
