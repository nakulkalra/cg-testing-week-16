import { test } from "@playwright/test";
import { log } from "node:console";

// test("amazon", async ({ page }) => {
//   await page.goto("https://www.amazon.in/");

//   await page.locator('//input[@id="twotabsearchtextbox"]').fill("mobiles");
//   await page.locator('//input[@id="nav-search-submit-button"]').click();
//   await page
//     .locator(
//       '//span[text()="Operating System"]/../../ul/span/span/li/span/a/span[text()="Android 14"]/../div/label/i',
//     )
//     .check();
//   await page.screenshot({ path: "screenshot/ss.png" });
// });

// test("cricbuzz", async ({ page }) => {
//   await page.goto("https://www.cricbuzz.com/");

//   await page.locator('//a[text()="Live Scores"]').click();
//   await page.locator('(//span[text()="Scorecard"])[1]').click();
//   const name = await page
//     .locator('(//a[text()="Kavin Neeraj Chaddha"])[5]/../../div/a')
//     .textContent();
//   const score = await page
//     .locator('(//a[text()="Kavin Neeraj Chaddha"])[5]/../../div[2]')
//     .innerText();
//   log(name, "scored", score, "runs");
// });

// test("amazon2", async ({ page }) => {
//   await page.goto("https://www.amazon.in/");

//   await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes");
//   await page.locator('//input[@id="nav-search-submit-button"]').click();
//   const name = await page
//     .locator(
//       '(//div[@class="a-section a-spacing-base desktop-grid-content-view"])[5]/div[2]/div/a/h2/span',
//     )
//     .textContent();
//   const price = await page
//     .locator(
//       '((//div[@class="a-section a-spacing-base desktop-grid-content-view"])[5]/div[2]/div[3]/div/div/a/span/span)[1]',
//     )
//     .textContent();
//   log("Shoe: ", name, " is of ", price);
//   await page.screenshot({ path: "screenshot/ss.png" });
// });

test("amazon3", async ({ page }) => {
  await page.goto("https://www.amazon.in/");

  await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes");
  await page.locator('//input[@id="nav-search-submit-button"]').click();
  await page.waitForTimeout(5000);

  const locator = page.locator(
    '((//div[@class="a-section a-spacing-base desktop-grid-content-view"])[5]/div[2]/div[3]/div/div/a/span/span)[1] | (//div[@class="a-section a-spacing-base desktop-grid-content-view"])[5]/div[2]/div/a/h2/span',
  );

  const texts = await locator.allTextContents();

  console.log(texts);
});
