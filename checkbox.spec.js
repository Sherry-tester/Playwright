import { test, expect } from '@playwright/test';
test('chekbox', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');
await page.locator("//input[@id='monday' and @type='checkbox']").check;

expect(await page.locator("//input[@id='monday' and @type='checkbox']")).toBeChecked();
expect(await page.locator("//input[@id='monday' and @type='checkbox']")).toBeFalsy();





});
