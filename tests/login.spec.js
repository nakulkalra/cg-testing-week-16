import { test } from "@playwright/test";

// test("login", async ({ page }) => {
//   await page.goto("https://practicetestautomation.com/practice-test-login/");

//   await page.locator("input#username").fill("student");
//   await page.locator("input#password").fill("Password123");
//   await page.locator(".btn").click();
// });

// test("login", async ({ page }) => {
//   await page.goto("https://demoapps.qspiders.com/ui?scenario=1");

//   await page.locator("input#name").fill("Nakul Kalra");
//   await page.locator("input#email").fill("nakul@gmail.com");
//   await page.locator("input#password").fill("Password123");
//   await page.locator("div button").click();
// });

// test("login & logout", async ({ page }) => {
//   await page.goto("https://practicetestautomation.com/practice-test-login/");

//   await page.locator("input#username").fill("student");
//   await page.locator("input#password").fill("Password123");
//   await page.locator(".btn").click();

//   await page;
//   await page
//     .locator(
//       ".wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color",
//     )
//     .click();
// });

test("login", async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/ui?scenario=1");

  await page.locator('//input[@id="name"]').fill("Nakul Kalra");
  await page.locator('//input[@id="email"]').fill("nakul@gmail.com");
  await page.locator('//input[@id="password"]').fill("Password123");
  await page.locator("//button").click();
});
