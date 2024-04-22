import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'c-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  @Output() searchChange = new EventEmitter<string>();
  @Input() placeholder = 'Search';

  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.searchChange.emit(value);
  }
}
