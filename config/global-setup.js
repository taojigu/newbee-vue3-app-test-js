import { chromium } from '@playwright/test';

export default async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  const baseURL = process.env.baseURL;
  const fullURL = baseURL + "/login";
  const username = process.env.username;
  const password = process.env.password;
  await page.goto(fullURL);
  await page.getByRole('textbox', { name: '用户名' }).click();
  await page.getByRole('textbox', { name: '用户名' }).fill(username);
  await page.getByRole('textbox', { name: '密码' }).click();
  await page.getByRole('textbox', { name: '密码' }).fill(password);
  
  await page.getByRole('button', { name: '登录' }).click();
  const waitUrl = baseURL + "/home";
  // Wait for login to complete
  await page.waitForURL(waitUrl);
  // Save session storage (cookies, localStorage, etc.)
  await context.storageState({ path: 'storageState.json' });
  await browser.close();
};
