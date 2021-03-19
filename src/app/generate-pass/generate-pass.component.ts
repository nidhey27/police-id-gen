import { Component, OnInit } from '@angular/core';
import {MatDialog , MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import { UploadExcelComponent } from '../upload-excel/upload-excel.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-generate-pass',
  templateUrl: './generate-pass.component.html',
  styleUrls: ['./generate-pass.component.css']
})
export class GeneratePassComponent implements OnInit {

  passGenerationForm: FormGroup;
  error: String = '';
  message: String = '';
  response: any;

  constructor(private dialog:MatDialog,private dialogRef: MatDialogRef<GeneratePassComponent>, private formBuilder: FormBuilder, private _router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.passGenerationForm = this.formBuilder.group({
      id_number : ['', [Validators.required, Validators.min(2)]],
      name : ['', [Validators.required, Validators.min(3)]],
      mobile : ['', [Validators.required, Validators.min(10)]],
      station : ['', [Validators.required, Validators.min(2)]],
      duty_place : ['', [Validators.required, Validators.min(2)]],
      start_date : ['', [Validators.required]],
      end_date : ['', [Validators.required]],
      start_time : ['', [Validators.required, Validators.min(2)]],
      end_time : ['', [Validators.required, Validators.min(2)]],
    })
  }

  get f() { return this.passGenerationForm.controls; }

  public onSubmit() {
    console.log(this.passGenerationForm.value)
  }
  closeDialog(){
    this.dialogRef.close();
  }

  bulkData(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    dialogConfig.height = '50%';
   
    const dialogRef = this.dialog.open(UploadExcelComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
    this.dialogRef.close();
  }

}
