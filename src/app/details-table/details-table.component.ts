import { Component, Input, OnInit } from '@angular/core';
import {MatDialog , MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import { EditPassComponent } from '../edit-pass/edit-pass.component';
import { GeneratePassComponent } from '../generate-pass/generate-pass.component';
@Component({
  selector: 'app-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.css']
})
export class DetailsTableComponent implements OnInit {

  @Input() public getData : Array <any> = [];
  
  
  dtOptions: any = {};
  constructor(private dialog:MatDialog ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu : [5, 10, 25],
      processing: true
    };
    console.log('Table Compopnent called')
    this.getData = [{
      venue : "-----",
      buckle_number : "Click on any card to get details"
    }]
    
  }

  heck(){
    console.log(this.getData)
  }

  openDialog():void{

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    dialogConfig.height = '70%';
   
    const dialogRef = this.dialog.open(GeneratePassComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  clickEdit(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    dialogConfig.height = '70%';
   
    const dialogRef = this.dialog.open(EditPassComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

 
  }


