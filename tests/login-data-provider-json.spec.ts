import { test, expect } from '@playwright/test';
import * as fs from 'fs';

const data = JSON.parse(fs.readFileSync('test-data/login.json', 'utf-8'));

test('login using data from JSON', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill(data.username);
  await page.getByPlaceholder('Password').fill(data.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/inventory/);
});