/* eslint-disable @typescript-eslint/no-floating-promises */

describe('Wallet Interaction Tests', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  it('should display wallet assets and interact with add button', async () => {
    // Step 1: Navigate to the Wallet tab
    await element(by.text('Wallet')).tap();

    // Step 2: Verify wallet title is displayed
    await expect(element(by.text('My Wallet'))).toBeVisible();

    // Step 3: Verify specific wallet assets are displayed with their quantities
    await expect(element(by.text('MXRF11'))).toBeVisible();
    await expect(element(by.text('128 shares'))).toBeVisible();

    await expect(element(by.text('CPTS11'))).toBeVisible();
    await expect(element(by.text('41 shares'))).toBeVisible();

    // Step 4: Verify the "Add investments" button is visible
    await expect(element(by.text('Add investments'))).toBeVisible();

    // Step 5: Tap the "Add investments" button
    await element(by.text('Add investments')).tap();
  });
});
