/* eslint-disable @typescript-eslint/no-floating-promises */

describe('Navigation and Balance Tests', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  it('should navigate between tabs and display the total balance', async () => {
    // Step 1: Verify we are on the Earnings screen by checking if balance is visible
    await expect(element(by.text('R$ 43,62'))).toBeVisible();

    // Step 2: Navigate to Wallet tab
    await element(by.text('Wallet')).tap();

    // Step 3: Verify we are on the Wallet screen
    await expect(element(by.text('My Wallet'))).toBeVisible();

    // Step 4: Navigate back to Earnings tab
    await element(by.text('Earnings')).tap();

    // Step 5: Verify the balance is still displayed after navigation
    await expect(element(by.text('R$ 43,62'))).toBeVisible();
  });
});
