import { test,expect } from '@playwright/test';

test.describe('Cart Page', (page) => {
    test('Add to cart', async ({ page }) => {
        const baseURL = process.env.baseURL;
        const homeURL = baseURL + "/home";
        await page.goto(homeURL);
        const goodSections = page.locator('.good');
        const secitonCount = await goodSections.count();
        expect(secitonCount).toBeGreaterThan(0);
        const firstGoodSection = goodSections.first();
        const goodItems = firstGoodSection.locator('.good-item');
        const itemCount = await goodItems.count();
        expect(itemCount).toBeGreaterThan(0);
        const firstGoodItem = goodItems.first();
        await firstGoodItem.click();
        await page.waitForURL(/\/product\/\d+$/);
        const url = page.url();
        const productID = url.split('/').pop();
        const productIDNumber = parseInt(productID);
        expect(productIDNumber).toBeGreaterThan(0);
        const addToCartButton = page.getByRole('button', { name: '加入购物车' });
        await addToCartButton.click();

    });

});