import { browser, by, element, ExpectedConditions as EC, ElementFinder } from "protractor";
import { Employee } from "../model/employee.class";


export class DashboardPage {

    constructor() { }

    async clickButton(label) {
        let button = element(by.xpath('//button[contains(string(), "' + label + '")]'))
        browser.wait(EC.visibilityOf(button), 5000, "Button: '" + label + "' is NOT displayed after 5 seconds").then(() => {
            button.click();
        })
    }

    async deleteEmployee(employee: object) {
        let deleteBtn = element(by.xpath('//tr[contains(string(), "' + employee['first_name'] + employee['last_name'] + employee['gender'] + '")]//button[string()="Delete"]'))
        browser.wait(EC.visibilityOf(deleteBtn), 5000, "Record for : '" + deleteBtn + "' is NOT displayed.").then(() => {
            deleteBtn.click();
        })
    }


    async navigate(url) {
        browser.get(url)
    }

    async getMessage(message) {
        return element(by.xpath('//p-messages[contains(string(), "' + message + '")]'))
    }

    async getRandomTableRow() {

    }

    async getFormTitle() {
        return element(by.xpath('//form//h2')).getText()
    }

    async inputText(label, value) {
        let inputLocator = element(by.xpath('//span[string()= "' + label + '"]/following-sibling::input[1]'))
        browser.wait(EC.visibilityOf(inputLocator), 5000, "Input Field: '" + label + "' is NOT displayed after 5 seconds").then(() => {
            inputLocator.clear()
            browser.sleep(500)
            inputLocator.sendKeys(value)
        })
    }

    async nextPage() {

    }

    async createEmployee(employee: object) {
        element(by.xpath('//button[@id="new-employee"]')).click();
        element(by.xpath('//span[string()= "First Name"]/following-sibling::input[1]')).sendKeys(employee['firstName'])
        element(by.xpath('//span[string()= "Last Name"]/following-sibling::input[1]')).sendKeys(employee['lastName'])
        element(by.xpath('//span[string()= "Birth Date"]/following-sibling::input[1]')).sendKeys(employee['birthdate'])
        //nationality
        //gender


    }

    async updateEmployee(employee: object) {
        let updateBtn = element(by.xpath('//tr[contains(string(), "' + employee['first_name'] + employee['last_name'] + employee['gender'] + '")]//button[string()="Edit"]'))
        browser.wait(EC.visibilityOf(updateBtn), 5000, "Record for : '" + updateBtn + "' is NOT displayed.").then(() => {
            updateBtn.click();
        })
    }

    async readEmployee(employeeRecord: object) {
        let recordLocator = element(by.xpath('//table//tr[string()= "' + employeeRecord['first_name'] + employeeRecord['last_name'] + employeeRecord['gender'] + 'EditDelete"]'))
        return browser.wait(EC.visibilityOf(recordLocator), 5000, "Record for : '" + employeeRecord + "' is NOT displayed.").then(() => {
            return true
        }).catch(() => {
            return false
        })
    }

    async selectFromDropdown(label, optionValue) {
        element(by.xpath('(//span[string()= "' + label + '"]/following-sibling::p-dropdown[1])[1]')).click()
        element(by.xpath('(//p-dropdownitem/li[@role="option" and string()="' + optionValue + '"])[1]')).click()

    }
}