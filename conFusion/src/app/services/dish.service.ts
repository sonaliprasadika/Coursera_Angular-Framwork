import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})


export class DishService {

  constructor() { }
  getDishes(): Dish[] {
    return DISHES;
  }
// return the dish corresponfing to the dish id
  getDish(id: string): Dish {
    return DISHES.filter((dish) => (dish.id === id))[0];
  }
// if dishfeatured is true it will return the corresponding dish
  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => dish.featured)[0];
  }
}
