const mots = [

    {we:"ˈˈGbu", fr:"Maison", theme:"Maison"},
    {we:"Jie", fr:"Route", theme:"Maison"},
    {we:"-Klain", fr:"École", theme:"Maison"},
    {we:"-Jhae", fr:"Canari", theme:"Maison"},
    {we:"ˈPlɩan", fr:"Marmite", theme:"Maison"},
    {we:"ˈˈGaʋn", fr:"Gobelet", theme:"Maison"},
    {we:"ˈGhwɛi", fr:"Argent", theme:"Maison"},
    {we:"-Baajhu", fr:"Couteau", theme:"Maison"},
    {we:"Fenɛtri", fr:"Fenêtre", theme:"Maison"},
    {we:"-Klu-", fr:"Porte", theme:"Maison"},

    {we:"Sʋn", fr:"Bras", theme:"Corps"},
    {we:"ˈˈKwli", fr:"Ventre", theme:"Corps"},
    {we:"ˈˈDhru", fr:"Tête", theme:"Corps"},
    {we:"ˈˈJhri", fr:"Yeux", theme:"Corps"},
    {we:"ˈMlan", fr:"Nez", theme:"Corps"},
    {we:"ˈˈMɩɩn", fr:"Cheveux", theme:"Corps"},
    {we:"Sʋn", fr:"Main", theme:"Corps"},
    {we:"Bhʋ", fr:"Pied", theme:"Corps"},
    {we:"ˈKpʋ", fr:"Dos", theme:"Corps"},
    {we:"-Blʋnˈ", fr:"Cou", theme:"Corps"},

    {we:"ˈˈBho", fr:"Père", theme:"Famille"},
    {we:"ˈDhou", fr:"Mère", theme:"Famille"},
    {we:"ˈˈJhu", fr:"Enfant", theme:"Famille"},
    {we:"ˈˈJhudhee", fr:"Bébé", theme:"Famille"},
    {we:"ˈDhai", fr:"Ami", theme:"Famille"},
    {we:"Ɲʋndɩkman", fr:"Amour", theme:"Famille"},
    {we:"ˈˈNan ɲmau-", fr:"Grand-père", theme:"Famille"},
    {we:"ˈˈNan", fr:"Grand-mère", theme:"Famille"},
    {we:"-Tɔntɔn", fr:"Oncle", theme:"Famille"},
    {we:"-Tanti", fr:"Tante", theme:"Famille"},

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
    {we:"Sɛn", fr:"Serpent", theme:"Animaux", audio:"audios/Sɛn.mp3"},
    {we:"-Ŋmlin", fr:"Python", theme:"Animaux", audio:"audios/Ŋmlin.mp3"},
    {we:"ˈBhlaa", fr:"Mouton", theme:"Animaux", audio:"audios/Bhlaa.mp3"},
    {we:"Dhɔɛ", fr:"Éléphant", theme:"Animaux", audio:"audios/Dhɔɛ.mp3"},
    {we:"Ji", fr:"Panthère", theme:"Animaux", audio:"audios/Ji.mp3"},
    {we:"-Jhre", fr:"Singe", theme:"Animaux", audio:"audios/Jhre.mp3"},
    {we:"ˈNimɛn", fr:"Hippopotame", theme:"Animaux", audio:"audios/Nɩmɛn.mp3"},
    {we:"-Di", fr:"Buffle", theme:"Animaux", audio:"audios/Di.mp3"},
    {we:"Tilo", fr:"Pintade", theme:"Animaux", audio:"audios/Tilo.mp3"},
    {we:"ˈPau", fr:"Pigeon", theme:"Animaux", audio:"audios/Pau.mp3"},
    {we:"Cia", fr:"Perroquet", theme:"Animaux", audio:"audios/Cɩa.mp3"},
    {we:"Jii", fr:"Aigle", theme:"Animaux", audio:"audios/Jii.mp3"},

    {we:"Trʋ", fr:"Montagne", theme:"Nature"},
    {we:"ˈˈNin-gbuu", fr:"Fleuve", theme:"Nature"},
    {we:"ˈJhrʋ", fr:"Soleil", theme:"Nature"},
    {we:"Nɛn", fr:"Feu", theme:"Nature"},
    {we:"Tu", fr:"Arbre", theme:"Nature"},
    {we:"ˈˈKao", fr:"Marigot", theme:"Nature"},
    {we:"ˈˈCɛ", fr:"Froid", theme:"Nature"},
    {we:"ˈCʋ", fr:"Lune", theme:"Nature"},
    {we:"ˈˈNin an ˈplɩn", fr:"Nuage", theme:"Nature"},
    {we:"ˈˈNin", fr:"Pluie", theme:"Nature"},

    {we:"Ɲɔnsoa", fr:"Dieu", theme:"Spiritualité"},
    {we:"ˈMʋnan", fr:"Joie", theme:"Spiritualité"},
    {we:"Dhɛgwlɩdeɛ-", fr:"Foi", theme:"Spiritualité"},
    {we:"-Bhaeɛ-", fr:"Prière", theme:"Spiritualité"},
    {we:"Ɲɔnsoa aˈ ˈˈgbu -klaaˈˈ", fr:"Temple", theme:"Spiritualité"},
    {we:"ˈSraa-", fr:"Sacrifice", theme:"Spiritualité"},
    {we:"ˈPepeˈ", fr:"Saint", theme:"Spiritualité"},
    {we:"ˈˈƝɩɛn-", fr:"Culte", theme:"Spiritualité"},
    {we:"Ghwlukwajhaai-", fr:"Prophète", theme:"Spiritualité"},
    {we:"ˈˈƝɩnsʋn-", fr:"Rituel", theme:"Spiritualité"},

    {we:"ˈCreea", fr:"Écrire", theme:"Éducation"},
    {we:"Dhɛdhii zroa", fr:"Lire", theme:"Éducation"},
    {we:"ˈCɩan", fr:"Apprendre", theme:"Éducation"},
    {we:"ˈSɛɛ-", fr:"Livre", theme:"Éducation"},
    {we:"Ɲʋndhɛtɔɔin-", fr:"Professeur", theme:"Éducation"},
    {we:"-Klainjhu-", fr:"Élève", theme:"Éducation"},
    {we:"-Klaingbu", fr:"Classe", theme:"Éducation"},
    {we:"ˈCɩandhɛ-", fr:"Leçon", theme:"Éducation"},
    {we:"Ɛzamɛn", fr:"Examen", theme:"Éducation"},
    {we:"Jhibhonanˈ", fr:"Savoir", theme:"Éducation"},

    {we:"ˈSɔɔn", fr:"Deux", theme:"Nombres"},
    {we:"Taan", fr:"Trois", theme:"Nombres"},
    {we:"-Mm", fr:"Cinq", theme:"Nombres"},
    {we:"-Bue", fr:"Dix", theme:"Nombres"},
    {we:"Dhueˈ", fr:"Un", theme:"Nombres"},
    {we:"Ɲiɛn", fr:"Quatre", theme:"Nombres"},
    {we:"-Mɛoˈˈ", fr:"Six", theme:"Nombres"},
    {we:"-ˈˈMɛsɔnˈ", fr:"Sept", theme:"Nombres"},
    {we:"-ˈˈMaan", fr:"Huit", theme:"Nombres"},
    {we:"-ˈˈMɛɲɛn", fr:"Neuf", theme:"Nombres"}

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

export default mots;
