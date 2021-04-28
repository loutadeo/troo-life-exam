import { Employee } from '../models/employee.model';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employee: Employee[] = [
    {
      id: 0,
      firstName: 'Saido',
      lastName: 'Chesto',
      gender: 'Male',
      nationality: 'Japanese',
      birthDate: '11/11/2011'
    }
  ];

  constructor() { }

  getEmployees() {
    return this.employee.slice();
  }
}