import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://octobre-tech.github.io/www/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Octobre/);
});

