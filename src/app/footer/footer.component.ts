import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public EmployeeId:any=[];
  constructor(private Emp:EmpService) { }

  ngOnInit(): void {
    this.Emp.getEmployee()
    .subscribe(data => this.EmployeeId=data);
   
  }

}
