const mots = [

    {we:"ˈˈGbu", fr:"Maison", theme:"Maison"},
    {we:"Jie", fr:"Route", theme:"Maison"},
    {we:"-Klain", fr:"École", theme:"Maison"},
    {we:"-Jhae", fr:"Canari", theme:"Maison"},
    {we:"ˈPlɩan", fr:"Marmite", theme:"Maison"},
    {we:"ˈˈGaʋn", fr:"Gobelet", theme:"Maison"},
    {we:"ˈGhwɛi", fr:"Argent", theme:"Maison"},
    {we:"-Baajhu", fr:"Couteau", theme:"Maison"},

    {we:"Sʋn", fr:"Bras", theme:"Corps"},
    {we:"ˈˈKwli", fr:"Ventre", theme:"Corps"},
    {we:"ˈˈDhru", fr:"Tête", theme:"Corps"},
    {we:"ˈˈJhri", fr:"Yeux", theme:"Corps"},
    {we:"ˈMlan", fr:"Nez", theme:"Corps"},
    {we:"ˈˈMɩɩn", fr:"Cheveux", theme:"Corps"},

    {we:"ˈˈBho", fr:"Père", theme:"Famille"},
    {we:"ˈDhou", fr:"Mère", theme:"Famille"},
    {we:"ˈˈJhu", fr:"Enfant", theme:"Famille"},
    {we:"ˈˈJhudhee", fr:"Bébé", theme:"Famille"},
    {we:"ˈDhai", fr:"Ami", theme:"Famille"},
    {we:"Ɲʋndɩkman", fr:"Amour", theme:"Famille"},

    {we:"-Baa", fr:"Manioc", theme:"Nourriture"},
    {we:"Dhʋ", fr:"Miel", theme:"Nourriture"},
    {we:"ˈˈKwɩɩn", fr:"Arachide", theme:"Nourriture"},
    {we:"-Nanan", fr:"Ananas", theme:"Nourriture"},
    {we:"-Cɛkɛ", fr:"Attiéké", theme:"Nourriture"},
    {we:"-Kɔ", fr:"Riz", theme:"Nourriture"},
    {we:"-Gbʋɛ", fr:"Gombo", theme:"Nourriture"},
    {we:"-Jabha", fr:"Oignon", theme:"Nourriture"},
    {we:"ˈˈBhɛɛ", fr:"Piment", theme:"Nourriture"},
    {we:"ˈTɔn", fr:"Sel", theme:"Nourriture"},
    {we:"ˈCran-zaan", fr:"Huile rouge", theme:"Nourriture"},
    {we:"Gwɛn sman", fr:"Sauce graine", theme:"Nourriture"},

    {we:"Zmiin", fr:"Poisson", theme:"Animaux", audio:"audios/Zmiin.mp3"},
    {we:"-Sʋn", fr:"Poulet", theme:"Animaux", audio:"audios/Sun.mp3"},
    {we:"-Gbaa", fr:"Cabri", theme:"Animaux", audio:"audios/Gbaa.mp3"},
    {we:"Jibhe", fr:"Chat", theme:"Animaux", audio:"audios/Jibhe.mp3"},
    {we:"Gbe", fr:"Chien", theme:"Animaux", audio:"audios/Gbe.mp3"},
    {we:"ˈKwla", fr:"Tortue", theme:"Animaux", audio:"audios/Kwla.mp3"},
    {we:"ˈˈKa", fr:"Crabe", theme:"Animaux", audio:"audios/Ka.mp3"},
    {we:"Sɛn", fr:"Serpent", theme:"Animaux", audio:"audios/Sen.mp3"},
    {we:"-Ŋmlin", fr:"Python", theme:"Animaux", audio:"audios/Nymlin.mp3"},
    {we:"ˈBhlaa", fr:"Mouton", theme:"Animaux", audio:"audios/Bhlaa.mp3"},
    {we:"Dhɔɛ", fr:"Éléphant", theme:"Animaux", audio:"audios/Dhɔɛ.mp3"},
    {we:"Ji", fr:"Panthère", theme:"Animaux", audio:"audios/Ji.mp3"},
    {we:"-Jhre", fr:"Singe", theme:"Animaux", audio:"audios/Jhre.mp3"},
    {we:"ˈNimɛn", fr:"Hippopotame", theme:"Animaux", audio:"audios/Nimen.mp3"},
    {we:"-Di", fr:"Buffle", theme:"Animaux", audio:"audios/Di.mp3"},
    {we:"Tilo", fr:"Pintade", theme:"Animaux", audio:"audios/Tilo.mp3"},
    {we:"ˈPau", fr:"Pigeon", theme:"Animaux", audio:"audios/Pau.mp3"},
    {we:"Cia", fr:"Perroquet", theme:"Animaux", audio:"audios/Cia.mp3"},
    {we:"Jii", fr:"Aigle", theme:"Animaux", audio:"audios/Jii.mp3"},

    {we:"Trʋ", fr:"Montagne", theme:"Nature"},
    {we:"ˈˈNin-gbuu", fr:"Fleuve", theme:"Nature"},
    {we:"ˈJhrʋ", fr:"Soleil", theme:"Nature"},
    {we:"Nɛn", fr:"Feu", theme:"Nature"},
    {we:"Tu", fr:"Arbre", theme:"Nature"},
    {we:"ˈˈKao", fr:"Marigot", theme:"Nature"},
    {we:"ˈˈCɛ", fr:"Froid", theme:"Nature"},

    {we:"Ɲɔnsoa", fr:"Dieu", theme:"Spiritualité"},
    {we:"ˈMʋnan", fr:"Joie", theme:"Spiritualité"},

    {we:"ˈCreea", fr:"Écrire", theme:"Éducation"},
    {we:"Dhɛdhii zroa", fr:"Lire", theme:"Éducation"},

    {we:"ˈSɔɔn", fr:"Deux", theme:"Nombres"},
    {we:"Taan", fr:"Trois", theme:"Nombres"},
    {we:"-Mm", fr:"Cinq", theme:"Nombres"},
    {we:"-Bue", fr:"Dix", theme:"Nombres"},

    // Ajouts provenant de la liste fournie (sans dupliquer les mots déjà présents)

    // Animaux additionnels
    {we:"Bhli", fr:"Bœuf", theme:"Animaux"},
    {we:"-Blaa-", fr:"Lion", theme:"Animaux"},
    {we:"Sɔn", fr:"Escargot", theme:"Animaux"},

    // Nature additionnels
    {we:"ˈCʋ", fr:"Lune", theme:"Nature"},

    // Famille additionnels
    {we:"ˈBhae-", fr:"Parents maternels", theme:"Famille"},
    {we:"Bhao", fr:"Compagnon / Jumeau", theme:"Famille"},

    // Maison et vie quotidienne
    {we:"ˈˈKwiglɔ-", fr:"Ville", theme:"Maison"},
    {we:"Dhbhonʋngbu-", fr:"Bureau", theme:"Maison"},
    {we:"Pɔɔtablʋ", fr:"Téléphone portable", theme:"Maison"},
    {we:"-Zolɛ-", fr:"Bouteille", theme:"Maison"},
    {we:"ˈˈˈMɩɔʋn", fr:"Aiguille", theme:"Maison"},
    {we:"ˈCreetu-", fr:"Stylo", theme:"Maison"},
    {we:"Biin-", fr:"Toilettes", theme:"Maison"},

    // Nourriture et agriculture
    {we:"Manglo", fr:"Mangue", theme:"Nourriture"},
    {we:"ˈPɩlɛzaan-", fr:"Banane douce", theme:"Nourriture"},
    {we:"ˈˈGa", fr:"Canne à sucre", theme:"Nourriture"},
    {we:"-Vɛɲɛn", fr:"Papaye", theme:"Nourriture"},
    {we:"-Gaeˈ", fr:"Palmier", theme:"Nourriture"},

    // Éducation et langue
    {we:"ˈCɩan", fr:"Apprendre", theme:"Éducation"},
    {we:"ˈCreedhɩ-", fr:"Écriture", theme:"Éducation"},
    {we:"ˈCɩandhɛ-", fr:"Chapitre / leçon", theme:"Éducation"},
    {we:"Mɩɔʋn-", fr:"Langue", theme:"Éducation"},
    {we:"Dhɩghwluizai-", fr:"Traducteur", theme:"Éducation"},
    {we:"Dhɩghwluizaʋn", fr:"Traducteurs", theme:"Éducation"},
    {we:"Ghwlui -za", fr:"Traduire", theme:"Éducation"},

    // Spiritualité
    {we:"Zoova", fr:"Jéhovah", theme:"Spiritualité"},
    {we:"Zezi", fr:"Jésus", theme:"Spiritualité"},
    {we:"Biiblʋ", fr:"Bible", theme:"Spiritualité"},
    {we:"ˈBheɔglɔ-", fr:"Royaume", theme:"Spiritualité"},
    {we:"-Bɔyaˈˈ -deɩn-", fr:"Paradis", theme:"Spiritualité"},
    {we:"Dhbhoozii-", fr:"Ange", theme:"Spiritualité"},
    {we:"-Ziisaɩn-", fr:"Démons", theme:"Spiritualité"},
    {we:"Ziɔn", fr:"Esprit", theme:"Spiritualité"},

    // Travail
    {we:"Dhbho", fr:"Travail", theme:"Travail"},
    {we:"Dhbhonʋanˈ", fr:"Travailler", theme:"Travail"},
    {we:"Dhbhonʋin-", fr:"Travailleur", theme:"Travail"},
    {we:"Dhbhonʋʋn-", fr:"Travailleurs", theme:"Travail"},
    {we:"-Klainˈ", fr:"Formation", theme:"Travail"},

    // Sentiments et qualités
    {we:"ˈDhɔɛe", fr:"Bon / bonne", theme:"Sentiments"},
    {we:"Kuɛ i", fr:"Courageux", theme:"Sentiments"},
    {we:"-Kɔngɩnˈ", fr:"Pardon", theme:"Sentiments"},
    {we:"-Kman", fr:"Aimer", theme:"Sentiments"},
    {we:"-Faʋn-", fr:"Peur", theme:"Sentiments"},
    {we:"Seaˈ", fr:"Fatigue", theme:"Sentiments"},
    {we:"-Bɔyaˈˈ", fr:"Bonheur", theme:"Sentiments"},
    {we:"ˈˈDhaidhɛ", fr:"Amitié", theme:"Sentiments"},

    // Lieux et déplacements
    {we:"ˈDhɔɔ", fr:"Marché", theme:"Lieux"},
    {we:"-Dɔsrɔˈ -ŋmɛinˈˈ", fr:"Hôpital", theme:"Lieux"},
    {we:"-Gazogbu-", fr:"Prison", theme:"Lieux"},
    {we:"Gae", fr:"Gare", theme:"Lieux"},
    {we:"Aelopɔɔ", fr:"Aéroport", theme:"Lieux"},
    {we:"ˈˈKwighlu", fr:"Ville", theme:"Lieux"},
    {we:"ˈBhlʋadhru-", fr:"Pays", theme:"Lieux"}

];

// Normalisation non destructive des formes Wɛ (we)
// Règles appliquées :
// - Trim des espaces en début/fin
// - Réduction des espaces multiples en un seul
// - Suppression des espaces autour des tirets internes et collapse des tirets multiples en un seul
// - Conservation des tirets préfixes/suffixes (souvent morphologiques) tels qu'ils apparaissent en début/fin
// - Ne touche pas aux signes de tons (ˈ, ˈˈ, etc.) — ils sont conservés tels quels

function normalizeWe(s) {
  if (!s || typeof s !== 'string') return s;
  // Trim et collapse d'espaces
  s = s.trim();
  s = s.replace(/\s+/g, ' ');

  // Conserver les tirets de début/fin
  const leadingMatch = s.match(/^-+/);
  const trailingMatch = s.match(/-+$/);
  const leading = leadingMatch ? leadingMatch[0] : '';
  const trailing = trailingMatch ? trailingMatch[0] : '';

  // Middle sans les tirets de bord
  let middle = s.replace(/^-+|-+$/g, '');

  // Enlever espaces autour des tirets internes et regrouper plusieurs tirets en un seul
  middle = middle.replace(/\s*-\s*/g, '-');
  middle = middle.replace(/-+/g, '-');

  // Retourner la forme normalisée en replaçant les tirets de bord
  return leading + middle + trailing;
}

// Ajout d'un champ we_normalized pour chaque entrée sans modifier le champ original `we`.
mots.forEach(entry => {
  entry.we_normalized = normalizeWe(entry.we);
});

// Ajout non destructif d'un placeholder audio ("") pour toutes les entrées qui n'ont pas déjà de champ audio.
// Cela évite de modifier les entrées qui possèdent déjà audio (par ex. audio:"audios/xxx.mp3").
mots.forEach(entry => {
  if (!Object.prototype.hasOwnProperty.call(entry, 'audio')) {
    entry.audio = "";
  }
});

export default mots;
