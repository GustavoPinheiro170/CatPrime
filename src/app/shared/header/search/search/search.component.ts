import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/shared/layout.service';
import { Listitem } from './search.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private service: LayoutService) { }

  search: string = ''

  listArray: Listitem[] = []

  titleNames: any = [];

  ngOnInit(): void {
    this.service.getFilmes().subscribe((item: any) => {
      this.listArray = item;
    })
    this.fetchFilmes()
  
  }

  fetchFilmes() {
   return this.listArray.forEach((item: any) => {
    this.titleNames.push(...item.title)
      console.log(this.titleNames)
  })
}

  SearchFilters(event: any) {
    const films = document.querySelectorAll('.item_slide')
    films.forEach((film: any) => {
      const filmTitle = film.querySelector('.informations h2').textContent?.toLowerCase();
      if (filmTitle?.includes(event.toLowerCase())) {
        film.style.display = 'flex'
        return
      }
        film.style.display = 'none'
    })
  }

}
