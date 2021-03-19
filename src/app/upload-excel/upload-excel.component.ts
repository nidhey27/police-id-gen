import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ExcelTblComponent } from '../excel-tbl/excel-tbl.component';
import { GeneratePassComponent } from '../generate-pass/generate-pass.component';
@Component({
  selector: 'app-upload-excel',
  templateUrl: './upload-excel.component.html',
  styleUrls: ['./upload-excel.component.css']
})
export class UploadExcelComponent implements OnInit {

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<UploadExcelComponent>) { }

  ngOnInit(): void {
  }




  fileName = "";

  showFileName(event) {

    this.fileName = event.target.files[0].name;


  }

  showTbl() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    dialogConfig.height = '100%';

    const dialogRef = this.dialog.open(ExcelTblComponent, dialogConfig);


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });

    this.dialogRef.close();
  }

  toggleCard() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    dialogConfig.height = '70%';

    const dialogRef = this.dialog.open(GeneratePassComponent, dialogConfig);


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });

    this.dialogRef.close();
  }

}
