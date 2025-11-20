// lib/servicesData.js - Detailed information for each service

import {
  FileText, Building2, TrendingUp, Home, PiggyBank,
  CheckCircle, Shield, Target, Users, DollarSign, Clock
} from 'lucide-react';

export const servicesDetailed = [
  {
    id: 'impots-particuliers',
    Icon: FileText,
    title: "Service d'impôts Provincial et Fédéral aux Particuliers",
    shortTitle: "Impôts Particuliers",
    price: "25 $",
    tagline: "Déclarations professionnelles à partir de 25 $",
    description: "Découvrez nos services fiscaux professionnels pour les particuliers, couvrant à la fois les déclarations d'impôts fédérales et provinciales, à partir de seulement 25 $. En tant que professionnels expérimentés, nous vous offrons une assistance complète pour garantir que vos déclarations d'impôts sont correctement préparées et soumises, assurant ainsi votre conformité avec les lois fiscales en vigueur.",
    fullDescription: "Nous comprenons l'importance de gérer efficacement vos impôts tout en respectant votre budget. Avec notre service abordable, vous pouvez vous libérer du stress fiscal et consacrer votre énergie à ce qui compte vraiment pour vous. Faites confiance à notre expertise pour vous fournir un service de qualité et des économies significatives sur vos impôts.",
    benefits: [
      "Déclarations provinciales et fédérales complètes",
      "Plus de 500 déclarations traitées annuellement",
      "Conformité garantie avec les lois fiscales",
      "Service abordable à partir de 25 $",
      "Expertise professionnelle CPA certifiée",
      "Maximisation de vos remboursements",
      "Support personnalisé tout au long du processus"
    ],
    features: [
      {
        Icon: DollarSign,
        title: "Prix abordable",
        desc: "À partir de 25 $ seulement"
      },
      {
        Icon: Shield,
        title: "Conformité garantie",
        desc: "Respect des lois fiscales"
      },
      {
        Icon: CheckCircle,
        title: "Service complet",
        desc: "Provincial et fédéral"
      }
    ]
  },
  {
    id: 'impots-entreprises',
    Icon: Building2,
    title: "Service d'Impôts Provincial et Fédéral aux Entreprises",
    shortTitle: "Impôts Entreprises",
    tagline: "Optimisation fiscale pour TPE et PME",
    description: "Découvrez notre service spécialisé de gestion fiscale pour les entreprises, couvrant les impôts provinciaux et fédéraux. Notre équipe d'experts vous offre une assistance complète pour la préparation et la soumission de vos déclarations d'impôts, garantissant ainsi votre conformité avec les lois fiscales en vigueur.",
    fullDescription: "Que vous soyez une petite entreprise ou une grande corporation, nous sommes là pour simplifier vos obligations fiscales et maximiser vos économies. Avec notre service professionnel, vous pouvez être assurés que vos impôts sont entre de bonnes mains, vous permettant de vous concentrer sur la croissance et la réussite de votre entreprise. Faites confiance à notre expertise pour optimiser votre situation fiscale et assurer le succès financier de votre entreprise.",
    benefits: [
      "Gestion fiscale complète pour entreprises",
      "Déclarations provinciales et fédérales",
      "Optimisation des économies d'impôts",
      "Conformité avec les lois fiscales",
      "Support pour TPE, PME et grandes corporations",
      "Conseil stratégique fiscal",
      "Maximisation des déductions admissibles"
    ],
    features: [
      {
        Icon: Building2,
        title: "Toutes tailles d'entreprises",
        desc: "TPE, PME et corporations"
      },
      {
        Icon: Target,
        title: "Optimisation fiscale",
        desc: "Maximisation des économies"
      },
      {
        Icon: Shield,
        title: "Conformité assurée",
        desc: "Lois fiscales respectées"
      }
    ]
  },
  {
    id: 'planification-fiscale',
    Icon: TrendingUp,
    title: "Planification Financière",
    shortTitle: "Planification Financière",
    tagline: "Stratégies sur mesure pour votre avenir",
    description: "Notre service de planification financière est là pour vous offrir une guidance experte dans la gestion de votre avenir financier. Notre conseiller chevronné vous accompagnera dans l'élaboration d'un plan sur mesure, adapté à vos objectifs à long terme et à votre situation financière actuelle.",
    fullDescription: "En évaluant vos besoins, en identifiant les opportunités et en minimisant les risques, nous vous aiderons à prendre des décisions éclairées pour sécuriser votre avenir financier. Ne laissez pas le doute entraver votre croissance financière - contactez-nous dès aujourd'hui pour commencer à bâtir un avenir solide et prospère.",
    benefits: [
      "Plan financier personnalisé et sur mesure",
      "Accompagnement par conseiller expérimenté",
      "Évaluation complète de vos besoins",
      "Identification des opportunités de croissance",
      "Minimisation des risques financiers",
      "Stratégies adaptées à vos objectifs",
      "Suivi régulier de votre progression"
    ],
    features: [
      {
        Icon: Target,
        title: "Sur mesure",
        desc: "Adapté à vos objectifs"
      },
      {
        Icon: Users,
        title: "Conseiller dédié",
        desc: "Expertise chevronnée"
      },
      {
        Icon: TrendingUp,
        title: "Vision long terme",
        desc: "Avenir sécurisé"
      }
    ]
  },
  {
    id: 'assurance-habitation',
    Icon: Home,
    title: "Assurance Habitation",
    shortTitle: "Assurance Habitation",
    partner: "Industrielle Alliance",
    tagline: "Protection complète avec rabais exclusifs",
    description: "Plongez dans la tranquillité d'esprit avec nos services d'assurance habitation offerts en partenariat avec Industrielle Alliance. Votre foyer est bien plus qu'une simple maison, c'est un refuge où se créent des souvenirs précieux. C'est pourquoi nous nous engageons à vous offrir une protection complète pour votre résidence, ses occupants et vos biens précieux.",
    fullDescription: "En choisissant notre assurance habitation, vous bénéficiez non seulement de la solide réputation de Industrielle Alliance, mais également de notre engagement envers un service exceptionnel et une assistance personnalisée à chaque étape. Notre conseiller expérimenté vous guidera à travers les options disponibles, vous aidant à trouver la couverture optimale pour votre maison, appartement ou condo.",
    ctaText: "Obtenir un devis n'a jamais été aussi simple. Prenez rendez-vous avec notre expert dès aujourd'hui et laissez-nous évaluer vos besoins en matière d'assurance habitation. Nous vous fournirons un devis détaillé et transparent, vous permettant de comprendre pleinement votre protection et les économies potentielles.",
    additionalInfo: "De plus, profitez dès maintenant des rabais exclusifs disponibles. Nous travaillons en étroite collaboration avec Industrielle Alliance pour vous offrir des avantages supplémentaires et des tarifs compétitifs. Protégez votre foyer tout en réalisant des économies significatives.",
    benefits: [
      "Protection complète pour votre résidence",
      "Couverture pour propriétaires et locataires",
      "Solutions sur mesure adaptées à vos besoins",
      "Partenariat avec Industrielle Alliance",
      "Rabais exclusifs disponibles",
      "Devis gratuit et transparent",
      "Conseiller expérimenté dédié",
      "Service exceptionnel et personnalisé"
    ],
    features: [
      {
        Icon: Home,
        title: "Couverture complète",
        desc: "Maison, condo, appartement"
      },
      {
        Icon: Shield,
        title: "Partenaire fiable",
        desc: "Industrielle Alliance"
      },
      {
        Icon: DollarSign,
        title: "Rabais exclusifs",
        desc: "Tarifs compétitifs"
      }
    ]
  },
  {
    id: 'epargne-investissements',
    Icon: PiggyBank,
    title: "Épargne et Investissements",
    shortTitle: "Épargne & Investissements",
    products: "REER • REEE • CELI",
    tagline: "Réalisez vos objectifs financiers à long terme",
    description: "Découvrez nos services d'épargne et d'investissement conçus pour vous aider à réaliser vos objectifs financiers à long terme, que ce soit pour la retraite, l'éducation de vos enfants ou tout autre projet important dans votre vie. Nous offrons une gamme complète de comptes d'épargne et de placements, y compris les REER, REEE, CELI et bien plus encore.",
    fullDescription: "Notre conseiller financier expérimenté est là pour vous guider à chaque étape de votre parcours financier. Que vous soyez novice en matière d'investissement ou un investisseur chevronné, nous sommes là pour vous fournir des conseils personnalisés et des stratégies d'investissement adaptées à votre situation financière et à vos objectifs.",
    productsDescription: "En investissant dans un REER, vous pouvez bénéficier d'avantages fiscaux immédiats tout en vous constituant un fonds de retraite solide pour l'avenir. Les REEE vous permettent de commencer à épargner dès maintenant pour les études postsecondaires de vos enfants, tout en profitant des subventions gouvernementales. Quant aux CELI, ils offrent une flexibilité accrue en vous permettant de faire fructifier vos économies à l'abri de l'impôt.",
    closingStatement: "Chez JED SF, nous sommes déterminés à vous aider à maximiser votre potentiel financier et à atteindre vos objectifs de vie. Contactez-nous dès aujourd'hui pour discuter de vos besoins en matière d'épargne et d'investissement, et laissez-nous vous aider à planifier un avenir financier sûr et prospère.",
    benefits: [
      "REER - Avantages fiscaux immédiats",
      "REEE - Épargne pour études avec subventions",
      "CELI - Croissance à l'abri de l'impôt",
      "Conseiller financier expérimenté",
      "Stratégies personnalisées",
      "Pour débutants et investisseurs chevronnés",
      "Planification retraite et éducation",
      "Maximisation du potentiel financier"
    ],
    features: [
      {
        Icon: PiggyBank,
        title: "REER, REEE, CELI",
        desc: "Produits complets"
      },
      {
        Icon: TrendingUp,
        title: "Croissance optimisée",
        desc: "Avantages fiscaux"
      },
      {
        Icon: Users,
        title: "Conseil personnalisé",
        desc: "Expert dédié"
      }
    ]
  }
];