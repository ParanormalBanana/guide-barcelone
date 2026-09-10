(function () {
  const tmbLink = {
    href: "https://www.tmb.cat/en/barcelona-fares-metro-bus/tickets-visit-barcelona/barcelona-travel-card-hola-bcn",
    label: "Acheter un titre TMB",
  };

  const arrivee = {
    time: "15h25 – 18h",
    title: "Arrivée · Aéroport T2C",
    text: "Vol à 15h25, terminal 2C. Le plus simple depuis T2 : train R2 Nord (panneaux R), gare Aeroport à deux cents mètres, billets aux distributeurs. Direction Passeig de Gràcia, ~25 min. Pour le métro et le bus en ville, une Hola Barcelona 5 jours (samedi → mercredi) s'achète en ligne ; elle inclut le L9 Sud aéroport, pas le train R2.",
    placeIds: [],
    link: tmbLink,
  };

  const depart = {
    time: "16h – 19h10",
    title: "Départ · Aéroport T2C",
    text: "Vol à 19h10, terminal 2C. R2 Nord depuis Passeig de Gràcia, direction Aeroport (~25 min). Viser T2 vers 16h45. Sinon L9 Sud avec un titre aéroport ou une Hola Barcelona. Même lien qu'à l'arrivée pour les titres métro / bus.",
    placeIds: [],
    link: tmbLink,
  };

  const samedi = {
    id: "samedi",
    day: "Samedi",
    hours: "15h25 – 21h",
    title: "Arrivée T2C & quartier gothique",
    intro:
      "Poser les sacs, puis les ruelles. L'intérieur de la cathédrale sera souvent déjà fermé ; la place et les rues suffisent.",
    metro: "R2 Nord · Aeroport → Passeig de Gràcia, puis L3 · Liceu",
    slots: [
      arrivee,
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
    hours: "9h – 19h10",
    title: "Encants, Sant Pau & départ T2C",
    intro:
      "Pas de Sagrada (complet). Le panorama a été fait lundi soir : on reste à l'est, à plat, sans funiculaire le jour des valises. Déjeuner près de l'hôtel, train vers 16h.",
    metro: "L1 / L2 · Glòries, puis Sant Pau ; départ R2 Nord · Passeig de Gràcia → Aeroport",
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
        text: "Tapas ou paella près de l'hôtel, pas à Sant Pau : à 15h il faut les bagages, à 16h le train.",
        placeIds: [],
      },
      depart,
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
    hours: "12h – 19h10",
    title: "Déjeuner & départ T2C",
    intro:
      "Encants et Sant Pau ont sauté au lundi. Pas de course vers Horta ou Pedralbes le jour des valises : trop loin. Déjeuner près de l'hôtel, train vers 16h pour le vol de 19h10.",
    metro: "Départ R2 Nord · Passeig de Gràcia → Aeroport (T2)",
    slots: [
      {
        time: "12h – 15h",
        title: "Dernier déjeuner",
        text: "Près de l'hôtel. Labyrinthe d'Horta et Pedralbes restent sur la carte Tous / Parcs — pas le jour du vol.",
        placeIds: [],
      },
      depart,
    ],
  };

  window.GUIDE_ITINERARIES = [
    {
      id: "a",
      short: "Plan A",
      label: "actuel",
      title: "Actuel",
      verdict: [
        "Le fil principal du séjour. Dimanche sur le Passeig (Batlló puis Pedrera, à dix minutes à pied), lundi dans les collines de Gràcia, mardi vers la mer, mercredi Encants et Sant Pau avant les valises.",
        "Les journées suivent ce qui ferme : Boqueria le dimanche, musée d'histoire le lundi, Encants le mardi. La Sagrada n'y est pas — complet.",
        "C'est le plan le plus classique : Batlló et Pedrera le même dimanche, quitte à partager le Passeig avec le week-end.",
      ],
      days: [samedi, dimancheA, lundiA, mardiA, mercrediA],
    },
    {
      id: "b",
      short: "Plan B",
      label: "dimanche chargé",
      title: "Dimanche chargé",
      verdict: [
        "Le 13 septembre clôt un pont de trois jours (la Diada tombait vendredi). Le Passeig sera plein, et le musée d'histoire gratuit après 15h aussi. On sort donc du boulevard le dimanche, et on y revient le lundi.",
        "Dimanche : Born et musée le matin — on paie, avant la gratuité — puis Vicens et Gràcia. Lundi : Güell, Pedrera et Batlló en semaine, bunkers le soir. Mardi et mercredi sont les mêmes qu'au plan A.",
        "Lundi est la journée dense. Si le rythme casse, gardez Pedrera : Batlló se voit très bien de la rue.",
      ],
      days: [samedi, dimancheB, lundiB, mardiA, mercrediA],
    },
    {
      id: "c",
      short: "Plan C",
      label: "moins touristique",
      title: "Moins touristique",
      verdict: [
        "Moins de billets empilés, moins de files. Une seule maison Gaudí — Vicens, plus calme — et la vue depuis les bunkers, sans payer Güell. Pas de Passeig, pas de Rambla, pas de plage le mardi.",
        "Le samedi soir dans le Gothique ne change pas : c'est l'arrivée. Dimanche, le musée sous la Plaça del Rei puis Gràcia. Lundi, Encants et Sant Pau. Mardi, le Refugi 307 (à réserver) et Montjuïc. Mercredi, déjeuner près de l'hôtel et départ.",
        "Horta, Pedralbes, Subirachs et Arús restent sur la carte, dans Tous — pas dans ces cinq jours.",
      ],
      days: [samedi, dimancheC, lundiC, mardiC, mercrediC],
    },
  ];
})();
