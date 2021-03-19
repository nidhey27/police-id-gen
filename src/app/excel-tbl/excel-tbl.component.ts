import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excel-tbl',
  templateUrl: './excel-tbl.component.html',
  styleUrls: ['./excel-tbl.component.css']
})
export class ExcelTblComponent implements OnInit {
  tabelEntries = [1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  dtOptions: any = {};
  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu : [5, 10, 25],
      processing: true
    };
  }

}
