import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPhone XR']
})

test.describe("The mobile viewport for iPhone XR", () => {
    test('Testing for text size on iPhone XR', async ({ page }) => {
        await page.goto('http://localhost:3000/')

        const main = page.locator('#sizing');

        const checkingFontSize = await main.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("font-size")
        })

        console.log(checkingFontSize);
        expect(checkingFontSize).toBe("16px");
    })
})