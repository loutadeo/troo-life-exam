import { browser, by, element, ElementFinder } from "protractor";
import { DashboardPage } from "../po/dashboard.po";
import { EmployeeFormComponent } from "../po/employee_form.po";
import { ElementUtil } from "../utils/element.utils";
import { DataSource } from "./enum/data_source.enum";
import { EmployeeDetails } from "./interface/employee_details.interface";

export class Employee {
    first_name: string;
    last_name: string;
    birth_date: string;
    gender: string;
    nationality: string;

    constructor(employee_details: EmployeeDetails) {
        Object.assign(this, employee_details);
    }

    async create() {

    }

    async update() {

    }

    async read() {

    }
}