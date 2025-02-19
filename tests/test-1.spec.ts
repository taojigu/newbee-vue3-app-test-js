import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.locator('#introduction')).toMatchAriaSnapshot(`
    - heading "IntroductionDirect link to Introduction" [level=2]:
      - link "Direct link to Introduction"
    `);
  await page.getByText('Playwright Test was created').click();
  await page.getByRole('paragraph').filter({ hasText: 'You will learn' }).click();
  await page.getByRole('link', { name: 'How to install Playwright' }).click();
});