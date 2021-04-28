import { DashboardPage } from '../../po/dashboard.po';
import { browser, by, element, logging } from 'protractor';
import { Employee } from 'e2e/src/model/employee.class';


describe('Employee Record', async () => {

  let dashboardPage: DashboardPage;
  let employee = { first_name: "Test Automation", last_name: "For Troo", birth_date: "10/10/1990", gender: "Female", nationality: "English" }
  let successMessage = element(by.xpath('//p-messages[contains(string(), "Success: Data has been added!")]'))
  let successUpdateMessage = element(by.xpath('//p-messages[contains(string(), "Success: Data has been updated!")]'))
  beforeAll(async () => {
    browser.waitForAngularEnabled(false);
    dashboardPage = new DashboardPage();
  });

  it('should be able to navigate to Dashboard', () => {
    dashboardPage.navigate(browser.baseUrl + 'dashboard')
    expect(browser.getTitle()).toBe('AngularCrud')
  })

  it('should be able to open New Employee Form', () => {
    dashboardPage.clickButton('New Employee')
    expect(dashboardPage.getFormTitle()).toBe('Employee Information')
  })

  describe("Check New Employee Form Field Validations", () => {
    let errorMessage = element(by.xpath('//p-messages[contains(string(), "Error: Please complete all required fields!")]'))

    beforeEach(() => {
      dashboardPage.navigate(browser.baseUrl + 'dashboard')
      dashboardPage.clickButton('New Employee')
      dashboardPage.inputText('First Name', employee.first_name)
      dashboardPage.inputText('Last Name', employee.last_name)
      dashboardPage.inputText('Birth Date', employee.birth_date)
      dashboardPage.selectFromDropdown('Gender', employee.gender)
      dashboardPage.selectFromDropdown('Nationality', employee.nationality)
    })

    // afterEach(() => {
    //   let messageCloseBtn = element(by.xpath('//a[contains(@class, "ui-messages-close")]'))
    //   messageCloseBtn.isPresent().then((isVisible) => {
    //     if (isVisible)
    //       messageCloseBtn.click();
    //     browser.sleep(1000)
    //   })
    // })

    it('should be able to trigger notification if First Name field is empty', async () => {
      browser.sleep(5000)
      dashboardPage.inputText('First Name', '')
      dashboardPage.clickButton('Add')
      expect(errorMessage.isPresent()).toBe(true)
    });

    it('should be able to trigger notification if Last Name Field is empty', async () => {
      dashboardPage.inputText('First Name', employee.first_name)
      dashboardPage.inputText('Last Name', '')
      dashboardPage.clickButton('Add')
      expect(errorMessage.isPresent()).toBe(true)
    });


    it('should be able to trigger notification if Gender Field is empty', async () => {
      dashboardPage.inputText('Last Name', employee.last_name)
      dashboardPage.selectFromDropdown('Gender', 'empty')
      dashboardPage.clickButton('Add')
      expect(errorMessage.isPresent()).toBe(true)
    });

    it('should be able to trigger notification if Birth Date Field is empty', async () => {
      dashboardPage.selectFromDropdown('Gender', employee.gender)
      dashboardPage.inputText('Birth Date', employee.birth_date)
      dashboardPage.clickButton('Add')
      expect(errorMessage.isPresent()).toBe(true)
    });
  })

  describe("Add Employee Information", () => {
    beforeAll(() => {
      dashboardPage.navigate(browser.baseUrl + 'dashboard')
      dashboardPage.clickButton('New Employee')
    })

    it('should be able to fill out all fields with valid information', () => {
      dashboardPage.inputText('First Name', employee.first_name)
      dashboardPage.inputText('Last Name', employee.last_name)
      dashboardPage.inputText('Birth Date', employee.birth_date)
      dashboardPage.selectFromDropdown('Gender', employee.gender)
      dashboardPage.selectFromDropdown('Nationality', employee.nationality)
      dashboardPage.clickButton('Add')
      expect(successMessage.isPresent()).toBe(true)
    })

    it('Should be able to view added employee information', () => {
      expect(dashboardPage.readEmployee(employee)).toBe(true)
    })

  });

  describe("Updated Employee Record", () => {
    employee = { first_name: "Test Auto Two", last_name: "For Tree", birth_date: "01/01/1990", gender: "Male", nationality: "Spanish" }
    let newEmployee = { first_name: "Test Auto Two", last_name: "For Four", birth_date: "01/01/1991", gender: "Secret", nationality: "Filipino" }
    beforeAll(() => {
      dashboardPage.navigate(browser.baseUrl + 'dashboard')
      dashboardPage.clickButton('New Employee')
      dashboardPage.inputText('First Name', employee.first_name)
      dashboardPage.inputText('Last Name', employee.last_name)
      dashboardPage.inputText('Birth Date', employee.birth_date)
      dashboardPage.selectFromDropdown('Gender', employee.gender)
      dashboardPage.selectFromDropdown('Nationality', employee.nationality)
      dashboardPage.clickButton('Add')
      expect(successMessage.isPresent()).toBe(true)
    })

    it('should be able to open record for added employee', () => {
      dashboardPage.updateEmployee(employee)
      dashboardPage.inputText('First Name', newEmployee.first_name)
      dashboardPage.inputText('Last Name', newEmployee.last_name)
      dashboardPage.inputText('Birth Date', newEmployee.birth_date)
      dashboardPage.selectFromDropdown('Gender', newEmployee.gender)
      dashboardPage.selectFromDropdown('Nationality', newEmployee.nationality)
      dashboardPage.clickButton('Update')
      expect(successUpdateMessage.isPresent()).toBe(true)

    })

    it('should be able to submit updated record', () => {
      expect(dashboardPage.readEmployee(newEmployee)).toBe(true)
    })

  })

  describe("Delete Employee Record", () => {
    employee = { first_name: "Test Auto Five", last_name: "For Life", birth_date: "01/01/1990", gender: "Male", nationality: "Spanish" }
    beforeAll(() => {
      dashboardPage.navigate(browser.baseUrl + 'dashboard')
      dashboardPage.clickButton('New Employee')
      dashboardPage.inputText('First Name', employee.first_name)
      dashboardPage.inputText('Last Name', employee.last_name)
      dashboardPage.inputText('Birth Date', employee.birth_date)
      dashboardPage.selectFromDropdown('Gender', employee.gender)
      dashboardPage.selectFromDropdown('Nationality', employee.nationality)
      dashboardPage.clickButton('Add')
      expect(successMessage.isPresent()).toBe(true)
    })

    it('should be able to delete record for added employee', () => {
      dashboardPage.deleteEmployee(employee)
      let popupAlert = browser.switchTo().alert();
      expect(popupAlert.getText()).toMatch('Are you sure you want to remove ' + employee['first_name'] + " " + employee['last_name'] + ' from the list of employees?');
      popupAlert.accept();
    })

    it('should not display deleted record', () => {
      expect(dashboardPage.readEmployee(employee)).toBe(false)
    })

  })
})
