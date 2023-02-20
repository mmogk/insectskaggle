import { test, expect } from '@playwright/test'

test('should navigate to the bug page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/')
  // Find an element with the text 'GET MY NEW LITTLE GUY' and click on it
  await page.click('text=GET MY NEW LITTLE GUY')
  // The new URL should be "/bugresult" (baseURL is used there)
  await expect(page).toHaveURL('http://localhost:3000/bugresult')
  // The new page should contain an button with a link back
  await expect(page.locator('button')).toContainText('I CHANGE MY MIND')
})

test('Test multiple tabs', async ({ browser }) => {
  const context = await browser.newContext();
  const page1 = await context.newPage();
  const page2 = await context.newPage();

  await page1.goto('http://localhost:3000/')
  await page2.goto('http://localhost:3000/')
})