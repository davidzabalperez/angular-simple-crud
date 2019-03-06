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
    
    if(this.seletedEmployee.id == 0){
      //si no hay ninguno seleccionado insertar
      this.seletedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.seletedEmployee);
    }
    this.seletedEmployee = new Employee();
  }
  openForEdit(employee:Employee){
    this.seletedEmployee = employee;
  }
  delete(){
    //si por cada elemento que recorras es distinto al empleado seleccionado dejalo
    if(confirm('Are yousure you want to delete')){
      this.employeeArray = this.employeeArray.filter(x => x != this.seletedEmployee);
      this.seletedEmployee = new Employee();
    }
  }
}
