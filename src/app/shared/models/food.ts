export class Food
{
    id!:number;
    name!:string;
    tags?:string[];
    favorite:boolean = false;
    price!:number;
    stars:number = 0;
    imageUrl!:string;
    origins!:string[];
    cookTime!:string;
}