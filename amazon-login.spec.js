const { test, expect } = require('@playwright/test');

test('Amazon home page title should contain "Amazon"', async ({ page }) => {
  // Open Amazon home page
  await page.goto('https://www.amazon.com');

  // Get the page title
  const title = await page.title();

  // Verify the title contains "Amazon"
  expect(title).toContain('Amazon');
});