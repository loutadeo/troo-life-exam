import { DashboardPage } from '../../po/dashboard.po';
import { browser, by, element, logging } from 'protractor';
import { Employee } from 'e2e/src/model/employee.class';

describe('Employee CRUD', async () => {
  let dashboardPage: DashboardPage;

  beforeAll(async () => {
    browser.waitForAngularEnabled(false);
    dashboardPage = new DashboardPage();
  });

  it('should be able to add a new Employee record', async () => {
    //TODO: create tests
    expect(true).toEqual(true);
  });

  it("should be able to update an Employee record", async () => {
    //TODO: create tests
    expect(true).toEqual(true);
  });

  it("should be able to read an Employee record", async () => {
    //TODO: create tests
    expect(true).toEqual(true);
  });

  it("should be able to delete an Employee record", async () => {
    //TODO: create tests
    expect(true).toEqual(true);
  });
});
