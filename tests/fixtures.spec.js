import { test } from "@playwright/test";
import { log } from "node:console";

// test("page", async ({ page }) => {
//   await page.goto("https://www.amazon.in/");
// });

// npx playwright test ./tests/fixtures.spec.js --headed --project=chromium

// test("browser", async ({ browser, browserName }) => {
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   await page.goto("https://amazon.in/");
//   const page2 = await context.newPage();
//   await page2.goto("https://flipkart.com/");
//   log(browserName);
// });

// test("browser", async ({ page, browserName }) => {
//   //   await page.goto("https://amazon.in/");

//   log(browserName);
// });

// test("b 2", async ({ page, browserName }) => {
//   //   await page.goto("https://amazon.in/");

//   log(browserName);
// });

test("browser", async ({ browser, page }) => {
  const context = await browser.newContext();
  const page2 = await context.newPage();
  await page2.goto("https://flipkart.com/");
  await page.goto("https://www.youtube.com/");
});
