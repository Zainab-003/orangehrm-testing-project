const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { PimPage } = require('../pages/PimPage');

test.describe('PIM Module', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
  });

  test('TC_PIM_001 - Add new employee', async ({ page }) => {
    const pimPage = new PimPage(page);
    await pimPage.navigateToAddEmployee();
    await pimPage.addEmployee('John', `Test${Date.now()}`);
    await expect(pimPage.successToast).toContainText('Successfully Saved');
  });

  test('TC_PIM_002 - Search existing employee', async ({ page }) => {
    const pimPage = new PimPage(page);
    const lastName = `Srch${Date.now()}`;

    await pimPage.navigateToAddEmployee();
    await pimPage.addEmployee('John', lastName);
    await expect(pimPage.successToast).toContainText('Successfully Saved');

    await pimPage.navigateToEmployeeList();
    await pimPage.searchEmployee(lastName);
    await expect(pimPage.tableBody).toContainText(lastName, { timeout: 15000 });
  });

  test('TC_PIM_003 - Search non-existent employee returns no records', async ({ page }) => {
    const pimPage = new PimPage(page);
    await pimPage.navigateToEmployeeList();
    await pimPage.searchNameInput.fill('NoSuchEmployeeXYZ123');
    await page.keyboard.press('Escape');
    await pimPage.searchButton.click();
    await expect(page.getByText('No Records Found').first()).toBeVisible({ timeout: 15000 });
  });

  test('TC_PIM_004 - Verify Employee List page loads', async ({ page }) => {
    const pimPage = new PimPage(page);
    await pimPage.navigateToEmployeeList();
    await expect(page).toHaveURL(/viewEmployeeList/);
    await expect(page.locator('.oxd-table')).toBeVisible();
  });
});