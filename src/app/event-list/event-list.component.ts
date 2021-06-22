import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  public employeeData:any=[];
  constructor(private Emp:EmpService) { }

  ngOnInit(): void {
    this.Emp.getEmployee()
     .subscribe(data => this.employeeData=data);
    
  }

}
