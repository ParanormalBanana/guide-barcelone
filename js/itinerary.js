window.GUIDE_ITINERARY = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
];
