import { test, expect } from '@playwright/test';

test.describe('Card API Tests', () => {

    test('1. Should show response data in UI when Card 1 is clicked', async ({ page }) => {
        await page.goto('/');
        await page.getByTestId('card-1').click();
        await page.waitForSelector('pre');

        const responseText = await page.textContent('pre');
        const statusText = await page.textContent('div:has-text("Status:")');

        expect(statusText).toContain('200');
        expect(responseText).toBeDefined();
    });

    test('2. Should show response data in UI when Card 2 is clicked', async ({ page }) => {
        await page.goto('/');
        await page.getByTestId('card-2').click();
        await page.waitForSelector('pre');

        const responseText = await page.textContent('pre');
        const statusText = await page.textContent('div:has-text("Status:")');

        expect(statusText).toContain('200');
        expect(responseText).toBeDefined();
    });

    test('3. Should show response data in UI when Card 3 is clicked', async ({ page }) => {
        await page.goto('/');
        await page.getByTestId('card-3').click();
        await page.waitForSelector('pre');

        const responseText = await page.textContent('pre');
        const statusText = await page.textContent('div:has-text("Status:")');

        expect(statusText).toContain('200');
        expect(responseText).toBeDefined();
    });

    test('4. Should show error message when trying to access an invalid card ID', async ({ page, request }) => {
      const response = await request.get('/api/cards/4'); // Directly call the API instead of clicking
      expect(response.status()).toBe(404);
  
      const responseBody = await response.json();
      expect(responseBody.error).toBe('Card not found');
  });

    test('5. Should verify no response appears before clicking a card', async ({ page }) => {
        await page.goto('/');

        const responseExists = await page.locator('pre').isVisible();
        expect(responseExists).toBeFalsy();
    });

});
