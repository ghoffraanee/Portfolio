import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Accueil",
  },
  {
    id: "work",
    title: "Projets",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Développeuse full stack",
    icon: web,
  },
  {
    title: "Analyste de données",
    icon: mobile,
  },
  {
    title: "Designer UX/UI",
    icon: backend,
  },
  {
    title: "Créatrice de contenu",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Angular",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Php",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: threejs,
  },
  {
    name: "PowerBi",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Java",
    icon: docker,
  },
   {
    name: "Symfony",
    icon: docker,
  },
   {
    name: "Python",
    icon: docker,
  },
   {
    name: "Android Studio",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Stage de perfectionnement",
    company_name: "Naxxum Group",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Janvier 2025 - Février 2025",
    points: [
      "	Contribution à la plateforme Zupdeco (projet éducatif en marque blanche)",
      "	Création du module Club (CRUD complet : backend avec Node.js et frontend React/Ant Design).",
      "	Utilisation des outils Postman, MongoDB Compass.",
      
    ],
  },
  {
    title: "Stage d’initiation                                                                 ",
    company_name: "L-Mobile",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Janvier 2024 - Février 2024",
    points: [
      "Développement d'un site web dynamique G-RideRentals, une plateforme de location de voitures en ligne avec Next.js.",
      "Conception de l'interface utilisateur et intégration des fonctionnalités dynamiques.",
      
    ],
  },
 
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "G-RideRentals",
    description:
      "Plateforme web permettant aux utilisateurs de rechercher, réserver et gérer des locations de voitures auprès de différents prestataires, offrant une solution pratique et efficace pour leurs besoins en transport.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ghoffraanee/G-RideRentals",
  },
  {
    name: "ZupDeCo",
    description:
      "ZupDeCo est une plateforme éducative offrant des services gratuits pour les enfants malades.j’ai participé à ce projet en développant le module Club, un CRUD complet permettant aux administrateurs de créer, gérer et organiser les clubs, et offrant aux enfants la possibilité d’y participer facilement",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ghoffraanee/ZupDeCo-backend",
  },
  {
    name: "Cars List",
    description:
      "Ajouter, lister, modifier et supprimer des voitures avec Angular",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
  
    ],
    image: tripguide,
    source_code_link: "https://github.com/ghoffraanee/CarsList",
  },
];

export { services, technologies, experiences, testimonials, projects };
