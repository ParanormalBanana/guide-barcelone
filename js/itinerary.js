(function () {
  const samedi = {
    id: "samedi",
    day: "Samedi",
    hours: "18h – 21h",
    title: "Arrivée & quartier gothique",
    intro:
      "Une fois les bagages posés : ruelles, façades, tapas. L'intérieur de la cathédrale sera souvent déjà fermé ; la place et les rues suffisent.",
    metro: "Métro L3 · Liceu",
    slots: [
      {
        time: "18h – 21h",
        title: "Cathédrale & Plaça del Rei",
        text: "Balade dans le Barri Gòtic : cathédrale (surtout l'extérieur), Plaça del Rei, puis tapas dans le quartier. Le musée sous la place est fermé le soir — on y revient dimanche.",
        placeIds: ["catedral", "muhba"],
      },
    ],
  };

  const mardiA = {
    id: "mardi",
    day: "Mardi",
    hours: "10h – 18h",
    title: "Rambla, port & plage",
    intro:
      "Une seule ligne : marché, descente vers Colomb, puis le sable. Les Encants sont fermés le mardi.",
    metro: "L3 · Liceu, puis L4 · Barceloneta ou à pied",
    slots: [
      {
        time: "10h – 13h",
        title: "Boqueria & La Rambla",
        text: "Marché vers 10h (déjà vivant, moins saturé qu'à midi), puis descente de la Rambla jusqu'au port.",
        placeIds: ["boqueria"],
      },
      {
        time: "13h – 18h",
        title: "Barceloneta",
        text: "Plage, baignade, déjeuner en terrasse. Quinze minutes à pied depuis le bas de la Rambla. Reculer d'une rue pour manger, hors des plus grosses terrasses de front de mer.",
        placeIds: ["barceloneta"],
      },
    ],
  };

  const mercrediA = {
    id: "mercredi",
    day: "Mercredi",
    hours: "9h – 17h",
    title: "Encants, Sant Pau & départ",
    intro:
      "Pas de Sagrada (complet). Le panorama a été fait lundi soir : on reste à l'est, à plat, sans funiculaire le jour des valises. Déjeuner près de l'hôtel.",
    metro: "L1 / L2 · Glòries, puis Sant Pau ; départ L9 Sud ou R2 Nord",
    slots: [
      {
        time: "9h – 10h15",
        title: "Mercat dels Encants",
        text: "Ouvert mercredi. Pour les enchères, plus tôt encore. Un arrêt de métro / dix minutes de Sant Pau.",
        placeIds: ["encants"],
      },
      {
        time: "10h30 – 13h",
        title: "Recinte Modernista de Sant Pau",
        text: "Plus grand complexe Art nouveau au monde, beaucoup plus calme que Gaudí. Billet souvent possible sur place.",
        placeIds: ["sant-pau"],
      },
      {
        time: "13h – 15h",
        title: "Dernier déjeuner",
        text: "Tapas ou paella près de l'hôtel, pas à Sant Pau : à 15h il faut les bagages.",
        placeIds: [],
      },
      {
        time: "15h – 17h",
        title: "Bagages & départ",
        text: "L9 Sud (T1/T2) ou train R2 Nord depuis Passeig de Gràcia / Sants (~20–30 min). Prévoir 2 h à 2 h 30 avant l'embarquement.",
        placeIds: [],
      },
    ],
  };

  const dimancheA = {
    id: "dimanche",
    day: "Dimanche",
    hours: "9h30 – 19h",
    title: "Gaudí sur le Passeig, puis le Born",
    intro:
      "Les deux maisons sont sur le même boulevard. Réserver Batlló et Pedrera à l'avance. La Boqueria est fermée le dimanche : ce n'est pas le jour du marché.",
    metro: "L2 / L3 / L4 · Passeig de Gràcia, puis L4 · Jaume I",
    slots: [
      {
        time: "9h30 – 12h",
        title: "Casa Batlló",
        text: "Visite (environ 1 h – 1 h 30 avec le visioguide). Coup d'œil à la Casa Amatller, juste à côté.",
        placeIds: ["casa-batllo"],
      },
      {
        time: "12h – 14h",
        title: "Passeig de Gràcia",
        text: "Balade et déjeuner sur le boulevard, en montant vers la Pedrera (10 minutes à pied).",
        placeIds: [],
      },
      {
        time: "14h – 16h30",
        title: "La Pedrera",
        text: "Casa Milà : façade, grenier, toit-terrasse. Même axe que Batlló, pas de métro entre les deux.",
        placeIds: ["pedrera"],
      },
      {
        time: "16h30 – 19h",
        title: "El Born & MUHBA",
        text: "Santa Maria del Mar, Passeig del Born, puis 8 minutes à pied jusqu'à la Plaça del Rei pour le musée d'histoire (Barcino), si encore ouvert.",
        placeIds: ["santa-maria-del-mar", "muhba"],
      },
    ],
  };

  const lundiA = {
    id: "lundi",
    day: "Lundi",
    hours: "9h30 – 20h",
    title: "Collines de Gràcia",
    intro:
      "Toute la journée dans le même quartier. Sortir du Parc Güell vers 12h10 pour arriver à Vicens à 13h. Le panorama, c'est le soir aux bunkers — pas besoin de Montjuïc.",
    metro: "Bus 24 ou L3 · Lesseps, puis L3 · Fontana",
    slots: [
      {
        time: "9h30 – 12h15",
        title: "Parc Güell",
        text: "Zone monumentale horodatée. Bus 24 depuis le Passeig de Gràcia, ou L3 Lesseps puis 15 à 20 minutes de montée. Quitter le parc vers 12h10.",
        placeIds: ["parc-guell"],
      },
      {
        time: "13h – 15h",
        title: "Casa Vicens",
        text: "20 à 25 minutes à pied en descendant de Güell (sinon taxi). Métro Fontana à côté. Visite ~1 h ; le créneau est large.",
        placeIds: ["casa-vicens"],
      },
      {
        time: "15h – 18h",
        title: "Gràcia · Plaça del Sol",
        text: "Ruelles, café, terrasses. Dix minutes à pied depuis Vicens.",
        placeIds: ["placa-del-sol"],
      },
      {
        time: "18h30 – 20h",
        title: "Bunkers del Carmel",
        text: "Coucher de soleil depuis le Turó de la Rovira (vers 19h40 en septembre). Gratuit. Taxi depuis Gràcia si les jambes sont cuites.",
        placeIds: ["bunkers"],
      },
    ],
  };

  const dimancheB = {
    id: "dimanche",
    day: "Dimanche",
    hours: "9h30 – 19h",
    title: "Born le matin, Gràcia l'après-midi",
    intro:
      "On quitte le Passeig : trop de monde un dimanche de pont. Musée payant le matin, avant la gratuité de 15h. Gràcia l'après-midi, en mode village.",
    metro: "L4 · Jaume I, puis L3 · Fontana",
    slots: [
      {
        time: "9h30 – 13h",
        title: "El Born & MUHBA",
        text: "Santa Maria del Mar, puis le musée sous la Plaça del Rei. On paie le matin : après 15h l'entrée est gratuite et les files s'allongent. Boqueria fermée.",
        placeIds: ["santa-maria-del-mar", "muhba"],
      },
      {
        time: "13h – 15h",
        title: "Casa Vicens",
        text: "Métro Fontana. Première maison de Gaudí, plus calme et moins chère que Batlló. Visite ~1 h.",
        placeIds: ["casa-vicens"],
      },
      {
        time: "15h – 19h",
        title: "Gràcia · Plaça del Sol",
        text: "Vermouth, ruelles, terrasses. Dimanche de pont : le quartier vit, sans les files du Passeig.",
        placeIds: ["placa-del-sol"],
      },
    ],
  };

  const lundiB = {
    id: "lundi",
    day: "Lundi",
    hours: "9h30 – 20h",
    title: "Güell, puis le Passeig en semaine",
    intro:
      "Les icônes passent au lundi. Journée dense : si l'énergie manque, garder Pedrera et laisser Batlló (la façade se voit du trottoir). Gràcia a déjà été faite dimanche.",
    metro: "Bus 24 · Güell puis Passeig de Gràcia ; taxi vers les bunkers",
    slots: [
      {
        time: "9h30 – 12h15",
        title: "Parc Güell",
        text: "Zone monumentale horodatée, en semaine. Bus 24, ou L3 Lesseps puis 15 à 20 minutes de montée. Quitter le parc vers 12h10.",
        placeIds: ["parc-guell"],
      },
      {
        time: "14h – 16h",
        title: "La Pedrera",
        text: "Bus 24 depuis Güell jusqu'au Passeig. Casa Milà en semaine : un cran plus calme qu'un dimanche de pont. Déjeuner juste avant, sur le boulevard.",
        placeIds: ["pedrera"],
      },
      {
        time: "16h15 – 18h",
        title: "Casa Batlló",
        text: "Dix minutes à pied plus bas. Ouverte tard : on n'est pas à la ramasse. Si c'est trop, s'arrêter à la façade et à la Casa Amatller, à côté.",
        placeIds: ["casa-batllo"],
      },
      {
        time: "18h30 – 20h",
        title: "Bunkers del Carmel",
        text: "Coucher de soleil vers 19h40 en septembre. Gratuit. Taxi depuis le Passeig : trop de colline après trois visites.",
        placeIds: ["bunkers"],
      },
    ],
  };

  const dimancheC = {
    id: "dimanche",
    day: "Dimanche",
    hours: "9h30 – 19h",
    title: "Barcino, puis Vicens",
    intro:
      "Une seule maison Gaudí, et ce n'est pas Batlló. Le MUHBA le matin (billet payant, avant 15h), Vicens et Gràcia ensuite. Pas de Passeig.",
    metro: "L4 · Jaume I, puis L3 · Fontana",
    slots: [
      {
        time: "9h30 – 13h",
        title: "El Born & MUHBA",
        text: "Santa Maria del Mar, puis Barcino sous la Plaça del Rei. On paie : la gratuité du dimanche après 15h attire trop de monde. C'est l'anti-carte postale du Gothique.",
        placeIds: ["santa-maria-del-mar", "muhba"],
      },
      {
        time: "13h – 15h",
        title: "Casa Vicens",
        text: "La première maison, plus musée que thème park. Moins chère, moins de files. Métro Fontana.",
        placeIds: ["casa-vicens"],
      },
      {
        time: "15h – 19h",
        title: "Gràcia · Plaça del Sol",
        text: "Quartier village, terrasses, vermouth. Dix minutes à pied depuis Vicens.",
        placeIds: ["placa-del-sol"],
      },
    ],
  };

  const lundiC = {
    id: "lundi",
    day: "Lundi",
    hours: "9h – 20h",
    title: "Encants, Sant Pau & bunkers",
    intro:
      "Pas de zone monumentale à Güell : on paie les mosaïques, pas la vue — les bunkers feront mieux, le soir, gratuit. Sant Pau ouvre tous les jours, y compris lundi.",
    metro: "L1 / L2 · Glòries, puis Sant Pau ; taxi vers les bunkers",
    slots: [
      {
        time: "9h – 10h15",
        title: "Mercat dels Encants",
        text: "Ouvert lundi. Pour les enchères, plus tôt encore (vers 8h). Un arrêt de métro / dix minutes de Sant Pau.",
        placeIds: ["encants"],
      },
      {
        time: "10h30 – 13h30",
        title: "Recinte Modernista de Sant Pau",
        text: "Plus grand complexe Art nouveau au monde, beaucoup plus calme que Gaudí. Ouvert 9h30–18h30 en septembre. Billet souvent possible sur place.",
        placeIds: ["sant-pau"],
      },
      {
        time: "13h30 – 18h",
        title: "Pause à l'est",
        text: "Déjeuner près de Sant Pau ou retour à l'hôtel. Garder les jambes pour la colline du soir.",
        placeIds: [],
      },
      {
        time: "18h30 – 20h",
        title: "Bunkers del Carmel",
        text: "Coucher de soleil vers 19h40. Gratuit, panorama plus large que Güell. Taxi depuis Sant Pau ou l'hôtel.",
        placeIds: ["bunkers"],
      },
    ],
  };

  const mardiC = {
    id: "mardi",
    day: "Mardi",
    hours: "10h – 18h",
    title: "Poble-sec & Montjuïc",
    intro:
      "On lâche Boqueria, Rambla et Barceloneta : marché-spectacle, couloir à boutiques, plage saturée. À la place, un abri de 1937 et la colline verte au-dessus du port.",
    metro: "L2 / L3 · Paral·lel, puis funiculaire ou bus vers Montjuïc",
    slots: [
      {
        time: "10h – 12h",
        title: "Refugi 307",
        text: "Abri anti-aérien au pied de Montjuïc. Visite guidée, uniquement sur réservation. Plus de 400 m de tunnels creusés à la main.",
        placeIds: ["refugi-307"],
      },
      {
        time: "12h – 18h",
        title: "Montjuïc",
        text: "Jardins et miradors, pas forcément le château entier. Funiculaire depuis Paral·lel. Déjeuner à Poble-sec, pas sur la Rambla.",
        placeIds: ["montjuic"],
      },
    ],
  };

  const mercrediC = {
    id: "mercredi",
    day: "Mercredi",
    hours: "12h – 17h",
    title: "Déjeuner & départ",
    intro:
      "Encants et Sant Pau ont sauté au lundi. Pas de course vers Horta ou Pedralbes le jour des valises : trop loin, et les deux ferment souvent le lundi — pas aujourd'hui, mais le timing bagages ne pardonne pas.",
    metro: "Départ L9 Sud ou R2 Nord depuis Passeig de Gràcia / Sants",
    slots: [
      {
        time: "12h – 15h",
        title: "Dernier déjeuner",
        text: "Près de l'hôtel. Labyrinthe d'Horta et Pedralbes restent sur la carte Tous / Parcs si un vol très tardif laisse une matinée — ce n'est pas le plan.",
        placeIds: [],
      },
      {
        time: "15h – 17h",
        title: "Bagages & départ",
        text: "L9 Sud (T1/T2) ou train R2 Nord depuis Passeig de Gràcia / Sants (~20–30 min). Prévoir 2 h à 2 h 30 avant l'embarquement.",
        placeIds: [],
      },
    ],
  };

  window.GUIDE_ITINERARIES = [
    {
      id: "a",
      short: "Plan A",
      label: "actuel",
      verdict: [
        "Le parcours de base : Gaudí du Passeig le dimanche, collines de Gràcia le lundi, mer et marché le mardi, Encants et Sant Pau le mercredi avant les valises.",
        "Sagrada hors circuit (complet). MUHBA fermé le lundi, Boqueria fermée le dimanche, Encants fermés le mardi : les jours tiennent à ces fermetures.",
        "Prendre ce plan si les files du week-end ne font pas peur, et si Batlló plus Pedrera le même jour reste un souhait, pas une corvée.",
      ],
      days: [samedi, dimancheA, lundiA, mardiA, mercrediA],
    },
    {
      id: "b",
      short: "Plan B",
      label: "dimanche chargé",
      verdict: [
        "Le dimanche 13 n'est pas férié. Le férié, c'était vendredi 11 (Diada) ; La Mercè est le 24, hors séjour. Vendredi, le centre était vraiment saturé — mais l'arrivée est samedi soir : ce pic-là est déjà passé.",
        "Ce qui reste vrai le 13 : c'est le troisième jour d'un pont. Locaux en terrasse, maisons du Passeig au pic week-end, MUHBA gratuit après 15h — donc des files à l'heure où le plan A y va. Boqueria et Encants fermés.",
        "Oui : le dimanche du plan A est le plus mauvais jour pour Batlló + Pedrera + musée gratuit. Non : ce n'est pas un jour férié. On inverse dimanche et lundi. Lundi devient dense ; si l'énergie manque, garder Pedrera, laisser Batlló.",
      ],
      days: [samedi, dimancheB, lundiB, mardiA, mercrediA],
    },
    {
      id: "c",
      short: "Plan C",
      label: "moins touristique",
      verdict: [
        "Surcoté surtout en combo, pas lieu par lieu. Batlló et Pedrera le même jour : même boulevard, même budget, rendement décroissant. Güell se paie pour les mosaïques, pas pour la vue — les bunkers font mieux, gratuits. Boqueria + Rambla : spectacle et couloir ; manger là est le vrai piège. Barceloneta : plage la plus proche, aussi la plus saturée.",
        "On garde le Gothique du samedi (court) et le MUHBA (Barcino sous la place). Une seule maison Gaudí : Vicens. Encants et Sant Pau montent au lundi. Mardi : Refugi 307 et Montjuïc à la place du front de mer.",
        "Sagrada toujours hors circuit (complet). Horta, Pedralbes, Subirachs et Arús restent dans Tous / Parcs / Patrimoine.",
      ],
      days: [samedi, dimancheC, lundiC, mardiC, mercrediC],
    },
  ];
})();
