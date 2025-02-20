
import { test, expect } from '@playwright/test';



test.describe('Me Page', () => {

    test('has title', async ({ page }) => {
        const baseurl = process.env.baseURL;
        const fullURL = baseurl + "/user";
        await page.goto(fullURL);
        const locator = await page.getByRole("banner").getByText("我的");
        await expect(locator).toBeVisible();
    });
});