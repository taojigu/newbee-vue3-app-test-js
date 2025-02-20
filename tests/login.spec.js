import { test, expect } from '@playwright/test';
import { verifyCodeFromImage } from '../util/image-util.js';

test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
});

test.skip('login', async ({ page }) => {
    const baseURL = process.env.baseURL;
    const fullURL = baseURL + "/login";
    const username = process.env.username;
    const password = process.env.password;
    await page.goto(fullURL);
    await page.getByRole('textbox', { name: '用户名' }).click();
    await page.getByRole('textbox', { name: '用户名' }).fill(username);
    await page.getByRole('textbox', { name: '密码' }).click();
    await page.getByRole('textbox', { name: '密码' }).fill(password);
    
    // const path = "verifyCode.png";
    // await page.locator("canvas").screenshot({ path: path });
    // code = await verifyCodeFromImage(path);
    // await page.getByRole('textbox', { name: '输入验证码' }).fill(code);
    await page.getByRole('button', { name: '登录' }).click();
    });



    