import { Optional } from "@angular/core";

export class ItemCareer {
    id: number;
    name: string;
    color:string;
    colorName:string;
    anim:string;
    description: string;
    complement?:string[];
    colorComplement?:string[];
   
}