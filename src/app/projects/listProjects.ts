import { Project} from './project';

  
export const listProjects: Project[] = [
    // id: number;
    // name: string;
    // color:string;
    // colorName:string;
    // picture: string;
    // description?: string[];
    // stack?:string[];
    // online:boolean;
    // urlSite?:string;
    // urlGithub?:string;
    {
        id: 1,
        name: "Inkable",
        alt: "image Inkable",
        color:'#ffa801',
        colorName:'letter-color-blue',
        position:"left:-1%",
        ratio:-1.2,
        picture: "https://res.cloudinary.com/dhpiuysko/image/upload/v1676472855/inkable_screenshot1_caubqb.jpg",
        description: ["Une application réalisée de A à Z en équipe (3 personnes) dans le cadre d'un projet de fin de formation à l'école O'Clock","L'objectif était de proposer une plateforme de mise en relation de professionnels du tatouage et de futurs clients potentiels."],
        stack:["Node.js","Express.js","PostgreSQL","Vue.js 3","FullCalendar","Bootstrap"],
        online:false,
        urlGithub:"https://github.com/CelineViala/inkable",
       
    },
    {
        id: 2,
        name: "Mission-Lecture.fr",
        alt: "image mission lecture",
        color:'#3c40c6',
        colorName:'letter-color-yellow',
        ratio:1.2,
        position:"left:0%;",
        picture: "https://res.cloudinary.com/dhpiuysko/image/upload/v1676391564/ml_nd5ipd.jpg",
        description: ["Un site 100% autodidacte.", "J'ai inventé et codé des jeux de lecture pour enfants de niveau primaire."],
        stack:["PHP","Symfony4","MySQL","Javascript","HTML/Twig","CSS"],
        online:true,
        urlSite:"https://mission-lecture.fr/"  
    },
   
    {
        id: 3,
        name: "Les tours de Hanoï",
        alt: "image tours de Hanoï",
        color:'#ffa801',
        colorName:'letter-color-pink',
        ratio:-1.2,
        position:"left:0%;",
        picture: "https://res.cloudinary.com/dhpiuysko/image/upload/v1676389587/hanoi_o5xz0r.jpg",
        description: ["Le jeu des tours de Hanoï est un jeu de réflexion consistant à déplacer des disques d'une tour de départ à une tour d'arrivée en un minimum de coups.","Mise en place du drag & drop."],
        stack:["HTML/CSS","Javascript Vanilla","Dragula.js"],
        online:true,
        urlSite:"https://celineviala.github.io/hanoi/",
        urlGithub:"https://github.com/CelineViala/hanoi",
       
    },
    {
        id: 4,
        name: "Générateur de fractales",
        alt: "image fractales",
        color:'#ffa801',
        colorName:'letter-color-green',
        ratio:1.2,
        position:"left:0%",
        picture: "https://res.cloudinary.com/dhpiuysko/image/upload/v1676392198/fractales_c5xxuf.jpg",
        description: ["Quoi de plus fascinant que les fractales ? Un thème de projet idéal pour découvrir la librairie P5.js qui dispose d'un grand nombre de méthodes pour dessiner sur un canvas."],
        stack:["HTML/CSS","Javascript Vanilla","P5.js"],
        online:true,
        urlSite:"https://celineviala.github.io/fractals/",
        urlGithub:"https://github.com/CelineViala/fractals/tree/master",
       
    },
    {
        id: 5,
        name: "Dobble",
        alt: "image dobble",
        color:'#ffa801',
        colorName:'letter-color-yellow',
        position:"left:0%",
        ratio:-1.2,
        picture: "https://res.cloudinary.com/dhpiuysko/image/upload/v1676458223/dobble_xnnhn7.jpg",
        description: ["Un projet autour du célèbre jeu du Dobble.","Le principe : Deux cartes, un seul symbole commun à trouver.","Un jeu tout simple derrière lequel se cachent de puissants principes mathématiques sur lesquels j'ai basé mon implémentation."],
        stack:["HTML/CSS","Javascript Vanilla"],
        online:true,
        urlSite:"https://celineviala.github.io/dobble/",
        urlGithub:"https://github.com/CelineViala/dobble",
       
    },
    {
        id: 6,
        name: "Jeu de Nim",
        alt: "image Nim",
        color:'#ffa801',
        colorName:'letter-color-blue',
        position:"left:0%",
        ratio:1.2,
        picture: "https://res.cloudinary.com/dhpiuysko/image/upload/v1676392479/nim_zvxuyr.jpg",
        description: ["Un jeu deux joueurs codé pour découvrir React et approfondir les webSockets (ouvrez 2 onglets en parallèle pour tester).","Le jeu de Nim consiste à enlever de 1 à 3 allumettes au tour par tour. Celui qui prend la dernière allumette présente sur le plateau gagne."],
        stack:["HTML/CSS","Javascript","React","Node.js","Socket.io"],
        online:true,
        urlSite:"https://celineviala.github.io/nim/",
        urlGithub:"https://github.com/CelineViala/nim",
       
    },
    {
        id: 7,
        name: "Dev' diary",
        alt: "image dev'diary",
        color:'#ffa801',
        colorName:'letter-color-yellow',
        position:"left:0%",
        ratio:-1.2,
        picture: "https://res.cloudinary.com/dhpiuysko/image/upload/v1676480187/diary_screenshot1_chhbfk.jpg",
        description: ["Une application pour garder une trace de ses recherches de veille technologique et/ou résolution de bugs"],
        stack:["HTML/CSS","Javascript","Express.js","Node.js","PostgreSQL"],
        online:false,
        urlGithub:"https://github.com/CelineViala/nim",
       
    },
    {
        id: 8,
        name: "Index de livre",
        alt: "image index de livre",
        color:'#ffa801',
        colorName:'letter-color-green',
        ratio:1.2,
        picture:"https://res.cloudinary.com/dhpiuysko/image/upload/v1676565124/index_kohqwj.jpg",
        description: ["Un programme qui génère un index automatiquement (dans la console et dans un fichier texte) à partir d'un fichier source et de la liste des mots que l'on veut afficher dans l'index. J'ai pour cela implémenté deux structures de données un ABR (Arbre Binaire de Recherche) et un AVL (arbre équilibré)"],
        stack:["Java"],
        online:false,
        urlGithub:"https://github.com/CelineViala/bookIndex",
       
    },
    {
        id: 9,
        name: "Portfolio",
        alt: "image portfolio",
        color:'#ffa801',
        colorName:'letter-color-pink',
        ratio:-1.2,
        picture:"https://res.cloudinary.com/dhpiuysko/image/upload/v1676990708/home_e1jyvu.jpg",
        description: ["La création de ce portfolio m'a permis de me familiariser avec Typescript et d'apprendre à utiliser Angular"],
        stack:["HTML∕CSS", "Angular","Typescript"],
        online:true,
        
       
    },
    
    
    
];