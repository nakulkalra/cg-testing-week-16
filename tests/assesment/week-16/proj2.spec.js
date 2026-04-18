import { expect, test } from "@playwright/test";

test("assesment-16", async ({ page }) => {
  await page.goto("https://vinothqaacademy.com/demo-site/");
  const firstName = await page.locator('//input[@id="vfb-5"]');
  await expect(firstName).toBeEmpty();
  await firstName.fill("Nakul");
  await page.locator('//input[@id="vfb-7"]').fill("Kalra");
  await page.locator('//input[@id="vfb-31-1"]').click();
  await page.locator('//input[@id="vfb-13-address"]').fill("123");
  await page.locator('//input[@id="vfb-13-address-2"]').fill("Block A");
  await page.locator('//input[@id="vfb-13-city"]').fill("Ludhiana");
  await expect(page.locator('//input[@id="vfb-13-city"]')).toHaveValue(
    "Ludhiana",
  );
  await page.locator('//input[@id="vfb-13-state"]').fill("Punjab");
  await page.locator('//input[@id="vfb-13-zip"]').fill("141001");
  await expect(page.locator('//input[@id="vfb-13-zip"]')).toHaveValue("141001");
  const country = await page.locator(
    '//*[@id="item-vfb-13"]/div/span[7]/span/span[1]/span',
  );

  await country.click();
  await page.keyboard.type("Indi");
  await page.keyboard.press("Enter");

  await page.locator('//input[@id="vfb-14"]').fill("kalra@gmail.com");

  await page.locator('//input[@id="vfb-18"]').fill("01/01/2001");
  await page.keyboard.press("Enter");

  const time1 = await page.locator(
    '//*[@id="item-vfb-16"]/span[1]/span/span[1]/span',
  );
  expect(time1).toBeEnabled();
  await time1.click();
  await page.keyboard.press("8");
  await page.keyboard.press("Enter");

  await page.locator('//input[@id="vfb-19"]').fill("9876543210");
  await page.locator('//textarea[@id="vfb-23"]').fill("Sample Ticket");

  await expect(page.locator('//input[@id="vfb-3"]')).toBeEmpty();
  await page.locator('//input[@id="vfb-3"]').fill("33");

  const submitButton = page.locator('//input[@id="vfb-4"]');
  await page.screenshot({ path: "screenshot/proj2.png" });
  // await expect(page).toHaveScreenshot("screenshot/proj2.png");

  await expect(submitButton).toBeEnabled();
  await submitButton.click();
});
