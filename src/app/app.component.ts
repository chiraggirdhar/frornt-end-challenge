import { AppService } from './app-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = "Welcome to Game World"
  columnDefs = [
    {headerName: 'Title', field: 'title', sortable: true, filter: true},
    {headerName: 'Platform', field: 'platform', sortable: true, filter: true},
    {headerName: 'Score', field: 'score', sortable: true, filter: true},
    {headerName: 'Genre', field: 'genre', sortable: true, filter: true},
    {headerName: 'Editors Choice', field: 'editors_choice', sortable: true, filter: true},
    {headerName: 'Release Year', field: 'release_year', sortable: true, filter: true}
];
rowData: any;

  constructor(private readonly appService: AppService) {

  }

  ngOnInit() {
    this.appService.getgames().subscribe(res => {
      this.rowData = res;
    });
  }
}
