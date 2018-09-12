import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() headers: string[];
  @Input() lastRow: {libelle: string, route: 'string}'
  constructor(); {
    console.log(this.headers);
   }

  ngOnInit(); {
  }

}
