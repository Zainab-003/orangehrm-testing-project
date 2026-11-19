class PimPage {
  constructor(page) {
    this.page = page;
    this.pimMenu = page.locator('span:has-text("PIM")');
    this.addEmployeeTab = page.locator('a:has-text("Add Employee")');
    this.employeeListTab = page.locator('a:has-text("Employee List")');
    
    this.firstNameInput = page.locator('input[name="firstName"]');
    this.lastNameInput = page.locator('input[name="lastName"]');
    this.saveButton = page.locator('button[type="submit"]');
    this.successToast = page.locator('.oxd-toast');
    this.searchNameInput = page.locator('input[placeholder="Type for hints..."]').first();
    this.searchButton = page.locator('button[type="submit"]:has-text("Search")');
    this.tableBody = page.locator('.oxd-table-body');
  }

  async navigateToAddEmployee() {
    await this.pimMenu.click();
    await this.addEmployeeTab.click();
  }

  async addEmployee(firstName, lastName) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.saveButton.click();
  }

  async navigateToEmployeeList() {
    await this.pimMenu.click();
    await this.employeeListTab.click();
  }

  async searchEmployee(name) {
    
    await this.searchNameInput.fill(name);
    await this.page.keyboard.press('Escape');
    await this.searchButton.click();
    await this.page.waitForTimeout(2000); 
  }
}

module.exports = { PimPage };