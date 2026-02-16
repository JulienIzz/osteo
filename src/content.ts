export const DOCTOLIB_MAREIL =
  'https://www.doctolib.fr/osteopathe/mareil-marly/quentin-izzillo?pid=practice-176538'
export const DOCTOLIB_QUEUE =
  'https://www.doctolib.fr/osteopathe/mareil-marly/quentin-izzillo?pid=practice-550558'
export const PHONE_NUMBER = '06 19 15 19 86'
export const PHONE_HREF = 'tel:+33619151986'
export const EMAIL_ADDRESS = 'izzillo.osteopathe@gmail.com'
export const EMAIL_HREF = 'mailto:izzillo.osteopathe@gmail.com'

export const content = {
  nav: {
    brand: 'Quentin Izzillo',
    links: [
      { href: '#avis', label: 'Avis' },
      { href: '#osteopathie', label: "L'ostéopathie" },
      { href: '#a-propos', label: 'À propos' },
    ],
    cta: 'Réserver',
  },

  hero: {
    subtitle: 'Ostéopathe D.O.',
    firstName: 'Quentin',
    lastName: 'Izzillo',
    quote: "« La vie c'est le mouvement »",
    description: [
      'Sur rendez-vous à ',
      { bold: true, text: 'Mareil-Marly' },
      ' et ',
      { bold: true, text: 'La Queue-lez-Yvelines' },
      '.\nApproche tissulaire, structurelle, viscérale et crânienne adaptée à tous.',
    ],
    cta: 'Prendre rendez-vous',
    ctaSecondary: 'En savoir plus',
    photoAlt: 'Quentin Izzillo - Ostéopathe D.O.',
  },

  booking: {
    title: 'Prendre rendez-vous',
    subtitle:
      'Je vous reçois toute la semaine sur deux sites dans les Yvelines.',
    buttonLabel: 'Prendre RDV',
    mapLabel: 'Voir sur Google Maps →',
    mutuelleNote:
      "La plupart des mutuelles prennent en charge l'ostéopathie. Renseignez-vous auprès de la vôtre.",
    locations: [
      {
        name: 'Mareil-Marly',
        place: 'Maison Médicale de Mareil',
        address: '13 Rue Tellier Frères, 78750 Mareil-Marly',
        price: '65 €',
        payment: 'Chèques, Espèces, CB',
        link: DOCTOLIB_MAREIL,
        mapUrl: 'https://maps.app.goo.gl/JUGoxVvYoMApTrj86',
      },
      {
        name: 'La Queue-lez-Yvelines',
        place: "Cabinet d'Ostéopathie",
        address: '87 Rue Nationale, 78940 La Queue-lez-Yvelines',
        price: '60 €',
        payment: 'Chèques, Espèces, CB',
        link: DOCTOLIB_QUEUE,
        mapUrl: 'https://maps.app.goo.gl/9pxvfMVLFZP4vqfVA',
      },
    ],
  },

  reviews: {
    title: 'Avis patients',
    subtitle: 'Basé sur les avis Google',
    rating: '5.0',
    items: [
      {
        name: 'Virginie C.',
        rating: 5,
        text: "Franchement le meilleur ostéopathe que j'ai eu et j'en ai vu beaucoup. J'avais une mâchoire qui claquait avec des douleurs au réveil. Mr Izzillo m'a corrigé et enlevé toutes ces douleurs. Professionnel, humain, à l'écoute. Je le recommande vivement.",
      },
      {
        name: 'David L.',
        rating: 5,
        text: "Un ostéopathe tout simplement génial ! Très à l'écoute, bienveillant et incroyablement compétent. On sent qu'il maîtrise parfaitement son métier et qu'il a une réelle passion pour aider ses patients. Je repars toujours plus léger, avec une amélioration immédiate et durable.",
      },
      {
        name: 'Isabelle C.',
        rating: 5,
        text: 'Quentin Izzillo est un ostéopathe en qui vous pouvez avoir confiance. Il suit toute notre famille depuis déjà plus de deux ans pour des douleurs au dos et sait les soulager avec efficacité.',
      },
      {
        name: 'Morgane M.',
        rating: 5,
        text: "Mr Izzillo est très pédagogue, vous explique tout, et cela permet de mieux comprendre son corps et le problème. Des exercices pour la maison afin d'éviter que le problème resurgisse ! Je recommande les yeux fermés que ce soit pour l'adulte, ou le nourrisson.",
      },
      {
        name: 'Thibault G.',
        rating: 5,
        text: "Superbe expérience ! Des manipulations toujours justes et efficaces. Il m'a également débloqué un décalage aux cervicales qui me suivait depuis un certain temps ! Je recommande vraiment Quentin si vous avez besoin !",
      },
      {
        name: 'Karine W.',
        rating: 5,
        text: "Des explications claires et précises, des manipulations douces et non douloureuses malgré mes maux, des conseils d'exercices. Je recommande vivement ce praticien qui maîtrise bien son domaine. Je me sens déjà mieux après cette séance.",
      },
    ],
  },

  osteopathy: {
    title: "L'Ostéopathie",
    subtitle: 'Une thérapie manuelle au service de votre santé',
    quote:
      "Toute perte de mobilité des articulations, des muscles, des ligaments ou des viscères peut provoquer un déséquilibre de l'état de santé.",
    description:
      "Votre ostéopathe est là pour lever les tensions, mobiliser les zones restreintes et apporter des conseils adaptés.\nLe but d'une séance est de réaliser un bilan complet de l'équilibre du corps, de trouver l'origine d'une douleur et de la traiter sur une ou plusieurs séances.",
    features: [
      {
        title: 'Respect des tissus',
        description:
          "L'ostéopathie ce n'est pas une affaire de force. Les techniques sont réalisées dans le respect des tissus et de la douleur.",
      },
      {
        title: 'Approche globale',
        description:
          "Structurelle, tissulaire, viscérale ou crânienne : l'approche est choisie selon vos besoins spécifiques.",
      },
      {
        title: 'Expertise variée',
        description:
          'Formation continue spécifique (périnatalité, sport, mâchoire) pour accompagner tous les profils avec précision.',
      },
    ],
    sessionInfo:
      'Une séance dure environ 1 heure. Elle inclut un bilan complet, le traitement manuel et des conseils personnalisés.',
  },

  aboutMe: {
    title: 'Qui suis-je ?',
    photoAlt: 'Quentin Izzillo - Ostéopathe',
    paragraphs: [
      "Installé depuis 2021, je suis passionné par la mécanique et la physiologie du corps humain. J'ai acquis une solide expérience en cabinet libéral, mais aussi en milieu hospitalier (notamment durant la crise Covid-19) et lors de nombreux événements sportifs.",
      'Mon engagement : continuer de me former chaque année pour vous offrir les techniques les plus récentes et efficaces.',
    ],
  },

  formations: {
    title: 'Formations & Diplômes',
    items: [
      {
        title: "Diplôme d'Ostéopathe (D.O.)",
        subtitle: "École Supérieure d'Ostéopathie de Paris (ESO)",
        description: 'Formation en 5 ans - Enseignement supérieur privé',
      },
      {
        title: 'Douleurs aiguës',
        subtitle:
          'Prise en charge des douleurs aiguës de la colonne vertébrale',
        description: 'IFFCO',
      },
      {
        title: 'Techniques structurelles',
        subtitle: 'Approfondissement et maîtrise',
        description: 'Domaine du sport (Eric Robinson / Sport de haut niveau)',
      },
      {
        title: 'Spécialisation Mâchoire',
        subtitle: 'Prise en charge des problématiques de la mâchoire (ATM)',
        description: 'Ostéopathie et médecine dentaire (CFPCO)',
      },
      {
        title: 'Pédiatrie',
        subtitle: 'Torticolis et déformations crâniennes du nourrisson',
        description: 'Coliques, plagiocéphalie (IFFCO)',
      },
      {
        title: 'Périnatalité',
        subtitle: 'Grossesse et post-partum',
        description: 'Accompagnement de la femme enceinte',
      },
    ],
  },

  reasons: {
    title: 'Motifs de consultation',
    subtitle: "L'ostéopathie peut vous aider dans de nombreuses situations",
    cta: 'Prendre rendez-vous',
    patientTypes: [
      {
        icon: 'baby',
        title: 'Nourrissons & Enfants',
        description:
          'Coliques du nourrisson, torticolis, aplatissement du crâne (plagiocéphalie), sommeil.',
      },
      {
        icon: 'zap',
        title: 'Sportifs',
        description:
          'Entorses, tendinites, suivi de performance, récupération, douleurs articulaires.',
      },
      {
        icon: 'heart',
        title: 'Femmes enceintes',
        description:
          'Grossesse et post-partum, douleurs lombaires, sciatique, préparation accouchement.',
      },
      {
        icon: 'users',
        title: 'Seniors',
        description:
          "Arthrose, raideurs, maintien de l'autonomie et de la mobilité.",
      },
    ],
    symptoms: [
      {
        icon: 'bone',
        title: 'Musculo-squelettique',
        description:
          'Douleurs articulaires, lombalgies, cervicalgies, entorses, tendinites, douleurs de mâchoire.',
      },
      {
        icon: 'utensils',
        title: 'Troubles digestifs',
        description:
          'Constipation, diarrhée, ballonnements, reflux gastro-œsophagien (RGO).',
      },
      {
        icon: 'brain',
        title: 'Tête & Système nerveux',
        description:
          'Migraines, vertiges, stress, anxiété, troubles du sommeil.',
      },
      {
        icon: 'stethoscope',
        title: 'Divers',
        description:
          'Règles douloureuses, adhérences cicatricielles, bilan préventif.',
      },
    ],
  },

  footer: {
    cabinetsTitle: 'Cabinets',
    navTitle: 'Navigation',
    contactTitle: 'Contact',
    navLinks: [
      { href: '#avis', label: 'Avis patients' },
      { href: '#osteopathie', label: "L'ostéopathie" },
      { href: '#a-propos', label: 'À propos' },
      { href: '#rendez-vous', label: 'Prendre rendez-vous' },
    ],
    copyright: 'Quentin Izzillo - Ostéopathe D.O. Tous droits réservés.',
  },
}
