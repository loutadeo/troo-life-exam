import { browser, by, element, ElementFinder, protractor } from "protractor";
import { FormFieldsTypes } from "../model/enum/form_fields.enum";
import { EmployeeDetails } from "../model/interface/employee_details.interface";
import { FormFields } from "../model/interface/form.interface";
import { FormComponent } from "./form.po";

export class EmployeeFormComponent extends FormComponent {

    async fill(employee_details: EmployeeDetails) {

    }
}