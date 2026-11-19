const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('Login Module', () => {
  test('TC_LOGIN_001 - Valid login redirects to dashboard', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
    await expect(page).toHaveURL(/dashboard/);
  });

  test('TC_LOGIN_002 - Invalid credentials show error', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('InvalidUser', 'WrongPass');
    await expect(loginPage.errorMessage).toContainText('Invalid credentials');
  });

  test('TC_LOGIN_003 - Empty fields show required validation', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.loginButton.click(); 
    await expect(page.locator('.oxd-input-field-error-message').first()).toBeVisible();
  });

  test('TC_LOGIN_004 - Logout returns to login page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
    await page.locator('.oxd-userdropdown-tab').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
    await expect(page).toHaveURL(/login/);
  });
});