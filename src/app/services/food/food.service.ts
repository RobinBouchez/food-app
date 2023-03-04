import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/food';
import { Tag } from '../../shared/models/tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAllTags():Tag[] {
    return [
      { name: 'All', count: 0 },
      { name: 'Pizza', count: 1 },
    ];
  }

  getFoodByID(id: number):Food
  {
    return this.getAll().find(food => food.id == id)!;
  }

    getAllFoodsBySearchTerm(searchTerm: string) :Food[] {
      return this.getAll().filter((food) =>
            food.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

  getAllFoodsByTag(tag: string): Food[] {
    if (tag == "All") {
      return this.getAll();
    } else {
      return this.getAll().filter((food) => food.tags?.includes(tag));
    }
  }
  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'pizza',
        price: 9,
        cookTime: '40 - 50',
        origins: ['italy'],
        favorite: false,
        stars: 4.0,
        imageUrl: '/assets/images/food1.jpg',
        tags: ['food', 'pizza'],
      },
      {
        id: 1,
        name: 'Fuck You Burger',
        price: 9,
        favorite: true,
        cookTime: '40 - 50',
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/images/food2.jpg',
        tags: ['food', 'pizza'],
      },
    ];
  }
}
