import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchTerm: string = '';
  constructor(private router: ActivatedRoute) {}

  ngInit(): void {
    this.router.params.subscribe((params) => {
      this.searchTerm = params['searchTerm'];
    });
  }
}
