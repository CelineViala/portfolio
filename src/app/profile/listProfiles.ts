import { ItemCareer} from './profile';
  
export const listItemsCareer: ItemCareer[] = [
    {
        id: 1,
        name: "Formation initiale",
        color:'#3c40c6',
        colorName:'blue',
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
        anim:"animate__fadeInTopLeft",
        description: "J'ai suivi des études de psychologie en formation initiale jusqu'au niveau du Master 1."
       
    },
    {
        id: 2,
        name: "AESH",
        color:'#ffa801',
        colorName:'yellow',
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
        anim:"animate__fadeInTopRight",
        description: "J'ai été Auxiliaire de Vie scolaire auprès d'enfants en situation de handicap."
       
    },
    {
        id: 3,
        name: "Autodidacte",
        color:'#FBA7FD',
        colorName:'pink',
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
        anim:"animate__fadeInTopLeft",
        description: "Passionnée d'informatique et de programmation, j'ai commencé à apprendre à coder en autodidacte en parallèle de mon métier d'AESH à partir de 2018."
       
    },
    {
        id: 3,
        name: "Reconversion",
        color:'#FBA7FD',
        colorName:'pink',
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
        anim:"animate__fadeInTopRight",
        description: "J'ai signé une rupture conventionnelle en 2021."
       
    },
    {
        id: 4,
        name: "O'Clock",
        color:'#218c74',
        colorName:'green',
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
        anim:"animate__fadeInTopLeft",
        description: "En 2022, j'ai suivi une formation de développeur Fullstack Javascript | 798 heures de formation intensive.",
        complement:["Javascript Client Side & Server Side","Spécialisation Back-end/API", "Projet en équipe (158h)","Bonnes pratiques","Gestion de projet"],
        colorComplement:['yellow','pink','blue',"green","yellow","blue","pink"]
    },
    {
        id: 5,
        name: "CNAM",
        color:'#ffa801',
        colorName:'yellow',
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
        anim:"animate__fadeInTopRight",
       
        description: "Depuis 2021, je suis des unités d'enseignement de Licence Informatique auprès du Conservatoire National des Arts et Métiers.",
        complement:["Architecture des machines","POO","Maths","Structures de données","Bases de données","Programmation en java","Système d'informatisation"],
        colorComplement:['yellow','pink','blue',"green","yellow","blue","pink"]
       
    },
    
];