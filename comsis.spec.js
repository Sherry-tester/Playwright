import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sis.cuiatd.edu.pk/');
  await page.locator('#ddl_Session').selectOption('SP21');
  await page.locator('#ddl_Program').selectOption('BCS');
  await page.locator('#txt_RollNo').click();
  await page.locator('#txt_RollNo').fill('076');
  await page.locator('#txt_RollNo').press('Tab');
  await page.locator('#txt_Password').fill('3622076');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Time Table' }).click();
  await page.getByRole('link', { name: 'TimeTable' }).click();
  await page.getByRole('link', { name: 'close' }).click();
  await page.getByRole('link', { name: 'Sign Out' }).click();
});