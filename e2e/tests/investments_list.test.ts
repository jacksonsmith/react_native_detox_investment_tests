/* eslint-disable @typescript-eslint/no-floating-promises */

describe('Investments List Tests', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  it('should display all investment cards on the Earnings screen', async () => {
    // Step 1: Ensure we are on the Earnings tab
    await element(by.text('Earnings')).tap();

    // Step 2: Verify all investment codes are visible
    await expect(element(by.text('MXRF11'))).toBeVisible();
    await expect(element(by.text('VISC11'))).toBeVisible();
    await expect(element(by.text('RVBI11'))).toBeVisible();
    await expect(element(by.text('CPTS11'))).toBeVisible();

    // Step 3: Scroll to see the last investment card
    await waitFor(element(by.text('MCHY11')))
      .toBeVisible()
      .whileElement(by.id('earnings-scroll'))
      .scroll(200, 'down');

    // Step 4: Verify the last investment card details
    await expect(element(by.text('MCHY11'))).toBeVisible();
    await expect(element(by.text('Earnings: NOT INFORMED'))).toBeVisible();
  });
});
