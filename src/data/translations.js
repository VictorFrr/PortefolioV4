export const TRANSLATIONS = {
  fr: {
    nav: { skills: "Compétences", projects: "Projets", about: "À propos", contact: "Contact" },
    hero: {
      tag: "Étudiant Bac Pro CIEL — Cybersécurité, Informatique, Réseau & Électronique",
      greeting: "Bonjour, je suis",
      name: "Victor Ponthus",
      sub: "Passionné par la cybersécurité, le développement logiciel et le hardware — je construis des projets concrets qui allient code, sécurité et curiosité technique.",
      cta_projects: "Voir mes projets",
      cta_contact: "Me contacter",
      scroll: "Scroll",
    },
    skills: {
      title: "Compétences", eyebrow: "Ce que je maîtrise",
      categories: [
        { name: "Développement", tags: ["Python","JavaScript","HTML / CSS","VBA","Next.js","Custom Tkinter"] },
        { name: "Cybersécurité", tags: ["Pentesting","ESP32 / Firmware","Analyse réseau","Chiffrement","Wi-Fi & Bluetooth","OSINT"] },
        { name: "Systèmes & Outils", tags: ["Linux / Debian","Administration serveur","Hardware / Assemblage PC","Git / GitHub","Vercel","Microsoft Excel"] }
      ]
    },
    projects: {
      title: "Projets", eyebrow: "Mon travail",
      details: "Voir les détails", github: "GitHub", demo: "Démo",
      features: "Fonctionnalités", tech: "Technologies", context: "Contexte"
    },
    contact: {
      eyebrow: "Disponible", heading: "Travaillons ensemble",
      sub: "Tu as un projet en tête, une idée à développer, ou tu cherches un collaborateur ? Je suis disponible — envoie-moi un message.",
      name: "Nom", email: "Email", message: "Message",
      name_ph: "Ton nom", email_ph: "ton@email.com", msg_ph: "Décris ton projet...",
      send: "Envoyer le message",
      success: "Message envoyé. Je te réponds bientôt.",
      error: "Une erreur est survenue. Utilise le lien mail ci-dessous.",
      availability: "Disponible pour stage / alternance",
    },
    about: {
      title: "À propos", eyebrow: "Qui je suis",
      lead: "Je suis Victor Ponthus, étudiant en Bac Pro CIEL à ma 3ème année. Passionné de tech, de cuisine et de cinéma — j'essaie de tout faire avec la même intensité.",
      sub: "J'ai pas mal voyagé aussi. Voici quelques pays où je suis allé :",
      cooking: { title: "La cuisine", desc: "Mon plat signature : poulet curry coco. De la carbonnade flamande au gratin dauphinois, en passant par de belles pièces de bœuf." },
      cinema: { title: "Le cinéma", desc: "Plus de 100 films en 2025. Objectif 300 en 2026. J'ai vu toute la filmographie de Kubrick, courts-métrages inclus.", fav1: "Eyes Wide Shut · Le Baiser du Tueur", fav2: "Mulholland Drive · Blue Velvet" },
      sport: { title: "Sport & musculation", desc: "Hypertrophie, randonnée. Encore débutant mais ça progresse — les chiffres parlent d'eux-mêmes." },
    },
    stats: { projects: "Projets réalisés", langs: "Langages maîtrisés", years: "Ans d'expérience", consoles: "Consoles émulées" },
    footer: { copy: "© 2026 Victor Ponthus — Tous droits réservés", back_top: "Haut de page" },
  },
  en: {
    nav: { skills: "Skills", projects: "Projects", about: "About", contact: "Contact" },
    hero: {
      tag: "Bac Pro CIEL Student — Cybersecurity, Networks & Electronics",
      greeting: "Hi, I'm",
      name: "Victor Ponthus",
      sub: "Passionate about cybersecurity, software development and hardware — I build real-world projects combining code, security and technical curiosity.",
      cta_projects: "See my projects",
      cta_contact: "Get in touch",
      scroll: "Scroll",
    },
    skills: {
      title: "Skills", eyebrow: "What I work with",
      categories: [
        { name: "Development", tags: ["Python","JavaScript","HTML / CSS","VBA","Next.js","Custom Tkinter"] },
        { name: "Cybersecurity", tags: ["Pentesting","ESP32 / Firmware","Network Analysis","Encryption","Wi-Fi & Bluetooth","OSINT"] },
        { name: "Systems & Tools", tags: ["Linux / Debian","Server Administration","Hardware / PC Assembly","Git / GitHub","Vercel","Microsoft Excel"] }
      ]
    },
    projects: {
      title: "Projects", eyebrow: "My work",
      details: "View details", github: "GitHub", demo: "Demo",
      features: "Features", tech: "Technologies", context: "Context"
    },
    contact: {
      eyebrow: "Available", heading: "Let's work together",
      sub: "Got a project in mind, an idea to develop, or looking for a collaborator? I'm available — send me a message.",
      name: "Name", email: "Email", message: "Message",
      name_ph: "Your name", email_ph: "your@email.com", msg_ph: "Describe your project...",
      send: "Send message",
      success: "Message sent. I'll get back to you soon.",
      error: "An error occurred. Use the email link below.",
      availability: "Available for internship / apprenticeship",
    },
    about: {
      title: "About", eyebrow: "Who I am",
      lead: "I'm Victor Ponthus, a 3rd year Bac Pro CIEL student. Passionate about tech, cooking and cinema — I try to do everything with the same intensity.",
      sub: "I've also traveled quite a bit. Here are some countries I've visited:",
      cooking: { title: "Cooking", desc: "Signature dish: coconut chicken curry. From Flemish beef stew to gratin dauphinois, to beautiful cuts of beef." },
      cinema: { title: "Cinema", desc: "Over 100 films in 2025. Target: 300 in 2026. I've seen Kubrick's entire filmography, including short films.", fav1: "Eyes Wide Shut · The Killing", fav2: "Mulholland Drive · Blue Velvet" },
      sport: { title: "Sport & fitness", desc: "Hypertrophy training, hiking. Still a beginner but progressing — the numbers speak for themselves." },
    },
    stats: { projects: "Projects built", langs: "Languages mastered", years: "Years experience", consoles: "Consoles emulated" },
    footer: { copy: "© 2026 Victor Ponthus — All rights reserved", back_top: "Back to top" },
  }
};

export const COUNTRIES = [
  {flag:"🇫🇷",fr:"France",en:"France"},{flag:"🇪🇸",fr:"Espagne",en:"Spain"},{flag:"🇵🇹",fr:"Portugal",en:"Portugal"},
  {flag:"🇮🇹",fr:"Italie",en:"Italy"},{flag:"🇹🇭",fr:"Thaïlande",en:"Thailand"},{flag:"🇹🇷",fr:"Turquie",en:"Turkey"},
  {flag:"🇲🇦",fr:"Maroc",en:"Morocco"},{flag:"🇳🇱",fr:"Pays-Bas",en:"Netherlands"},{flag:"🇪🇬",fr:"Égypte",en:"Egypt"},
  {flag:"🇺🇸",fr:"États-Unis",en:"United States"},{flag:"🇬🇷",fr:"Crète",en:"Crete"},{flag:"🇪🇸",fr:"Majorque",en:"Mallorca"},
];
