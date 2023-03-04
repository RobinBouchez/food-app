import { Injectable } from '@angular/core';
import {Food} from '../../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[] { 
    return [
      {     
          id:1,
          name:'pizza',
          price: 9,
          cookTime: '40 - 50',
          origins: ['italy'],
          favorite: false,
          stars: 4.0,
          imageUrl: '/assets/images/food1.jpg',
          tags: ['food', 'pizza'],
        },
        {
        id:1,
        name:'Fuck You Burger',
        price: 9,
        favorite: true,
        cookTime: '40 - 50',
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/images/food2.jpg',
        tags: ['food', 'pizza'],
      },
    ]
    }

}
