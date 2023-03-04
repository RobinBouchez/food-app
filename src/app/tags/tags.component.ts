import { Component, Input } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent {
  constructor(private foodService: FoodService) {}
  @Input()
  foodPageTags?: string[];

  @Input()
  justifyContent: string = 'center';
  tags?: Tag[];

  ngOnInit(): void {
    if (!this.foodPageTags) this.tags = this.foodService.getAllTags();
  }
}
