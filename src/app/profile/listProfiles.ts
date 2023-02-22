import { ItemCareer} from './profile';
  
export const listItemsCareer: ItemCareer[] = [
    {
        id: 1,
        name: "Formation initiale",
        color:'#3c40c6',
        colorName:'blue',
        anim:"animate__fadeInTopLeft",
        description: "J'ai suivi des études de psychologie jusqu'au niveau du Master 1."
       
    },
    {
        id: 2,
        name: "AESH",
        color:'#ffa801',
        colorName:'yellow',
        anim:"animate__fadeInTopRight",
        description: "Dans mon ancienne vie professionnelle, j'étais Accompagnante d'Élèves en Situation de Handicap."
       
    },
    {
        id: 3,
        name: "Autodidacte",
        color:'#BE0EBE',
        colorName:'pink',
        anim:"animate__fadeInTopLeft",
        description: "Passionnée d'informatique et de programmation, j'ai commencé à apprendre à coder en autodidacte en parallèle de mon métier d'AESH à partir de 2018."
       
    },
    {
        id: 3,
        name: "Reconversion",
        color:'#3c40c6',
        colorName:'blue',
        anim:"animate__fadeInTopRight",
        description: "J'ai signé une rupture conventionnelle en 2021 afin de pouvoir exercer le métier qui me passionne."
       
    },
    {
        id: 4,
        name: "O'Clock",
        color:'#218c74',
        colorName:'green',
        anim:"animate__fadeInTopLeft",
        description: "En 2022, j'ai suivi une formation de développeur Fullstack Javascript | 798 heures de formation intensive.",
        complement:["Javascript Client Side & Server Side","Spécialisation Back-end/API", "Projet en équipe (158h)","Gestion de projet","Bonnes pratiques de développement"],
        colorComplement:['yellow','pink','blue',"green","yellow","blue","pink"]
    },
    {
        id: 5,
        name: "CNAM",
        color:'#ffa801',
        colorName:'yellow',
        anim:"animate__fadeInTopRight",       
        description: "Depuis 2021, je suis des unités d'enseignement de Licence Informatique auprès du Conservatoire National des Arts et Métiers.",
        complement:["Architecture des machines","POO","Maths","Structures de données","Bases de données","Programmation en java","Système d'informatisation"],
        colorComplement:['yellow','pink','blue',"green","yellow","blue","pink"]
       
    },
    {
        id: 5,
        name: "DWWM",
        color:'#BE0EBE',
        colorName:'pink',
        anim:"animate__fadeInTopRight",
       
        description: "En Janvier 2023, j'ai obtenu le titre de Développeur Web et Web Mobile.",
        complement:["Délivré par le Ministère du travail","Equivalent Bac+2"],
        colorComplement:['yellow','blue']
       
    },
    
];