import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelTblComponent } from './excel-tbl.component';

describe('ExcelTblComponent', () => {
  let component: ExcelTblComponent;
  let fixture: ComponentFixture<ExcelTblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcelTblComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
