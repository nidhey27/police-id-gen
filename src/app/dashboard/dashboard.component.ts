import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Output() public passData = new EventEmitter<any>();
  venues = [1,2,3,4,5,6,7,8,9,10,11,12];
  data :any = [];
  constructor() { }

  ngOnInit(): void {
    
  }

  

  showTable(e){
    console.log('click called')
    
    this.data = [{
      venue : 'Ravi bhavan',
      id : 1,
      buckle_number : 101,
      name : 'Nidhey Indurkar',
      designation : 'DCP',
      mobile : 7020793286,
      company_name : 'Maharashtra Police',
      station : 'Pachpawli',
      start_date : '01/01/2021',
      end_date : '28/02/2021',
      duration : '8:00am - 9:00pm' 
    },{
      venue : 'Ravi bhavan',
      id : 1,
      buckle_number : 101,
      name : 'Nidhey Indurkar',
      designation : 'DCP',
      mobile : 7020793286,
      company_name : 'Maharashtra Police',
      station : 'Pachpawli',
      start_date : '01/01/2021',
      end_date : '28/02/2021',
      duration : '8:00am - 9:00pm' 
    }]
    // console.log(this.data)
    this.passData.emit(this.data);
  }

}
