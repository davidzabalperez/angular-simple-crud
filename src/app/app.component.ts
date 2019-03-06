import { Component } from '@angular/core';
import { Employee } from './models/employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  employeeArray: Employee[] =[

    {id: 1,
    name: "David",
    country: "Donosti"
    },
    {id: 2,
    name: "Ander",
    country: "Irun"
    },
    {id: 3,
    name: "Arantxa",
    country: "Renteria"
    }
  ];

  seletedEmployee: Employee = new Employee();

  addOrEdit(){
    this.seletedEmployee.id = this.employeeArray.length + 1;
    this.employeeArray.push(this.seletedEmployee);
    this.seletedEmployee = new Employee();
  }
}
