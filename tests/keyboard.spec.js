import { expect, test } from "@playwright/test";
import { log } from "node:console";

// test("type", async ({ page }) => {
//   await page.goto("https://demoapps.qspiders.com/ui?scenario=1");

//   await page.getByLabel("name").click();
//   await page.keyboard.type("Nakul");

//   await page.keyboard.press("Tab");

//   await page.keyboard.type("kalra@gmail.com");

//   await page.keyboard.press("Control+A");
//   await page.keyboard.press("Control+C");

//   await page.keyboard.press("Tab");

//   await page.keyboard.press("Control+V");
// });

// test("mouse", async ({ page }) => {
//   await page.goto(
//     "https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2",
//   );
//   await page.getByRole("button").first().click();
// });

// test("amazon navigation", async ({ page }) => {
//   await page.goto("https://www.amazon.in/");
//   const title = await expect(page).toHaveTitle(
//     "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in",
//   );
//   log(title);
//   const searchBox = await page.locator("input#twotabsearchtextbox");
//   await expect(searchBox).toBeEditable();
//   await searchBox.fill("Iphone 15");
//   await page.keyboard.press("Enter");
//   const [page2] = await Promise.all([
//     page.waitForEvent("popup"),
//     page.locator('//h2[@aria-label="iPhone 15 (128 GB) - Black"]').click(),
//   ]);
//   const addToCartButton = await page2
//     .locator('//*[@id="add-to-cart-button"]')
//     .nth(1);
//   await expect(addToCartButton).toBeEnabled;
//   await expect(page2).toHaveTitle("Apple iPhone 15");
//   await addToCartButton.click();
//   await page2.pause();
// });

test("multiple tabs", async ({ page }) => {
  await page.goto(
    "https://demoapps.qspiders.com/ui/browser/multipleTabs?sublist=3",
  );

  // Click once → 3 tabs open
  const [popup1Promise, popup2Promise, popup3Promise] = [
    page.waitForEvent("popup"),
    page.waitForEvent("popup"),
    page.waitForEvent("popup"),
  ];

  await page.locator("button").click();

  const page2 = await popup1Promise;
  const page3 = await popup2Promise;
  const page4 = await popup3Promise;

  // Wait for load (important)
  await page2.waitForLoadState();
  await page3.waitForLoadState();
  await page4.waitForLoadState();

  await page2.locator("button").click();
  await page3.locator("button").click();
  await page4.locator("button").click();

  page.mouse.
});

// test("multiple windows", async ({ page }) => {
//   await page.goto(
//     "https://demoapps.qspiders.com/ui/browser/multipleWindow?sublist=2",
//   );

//   const [page2, page3, page4] = await Promise.all([
//     page.waitForEvent("popup"),
//     page.waitForEvent("popup"),
//     page.waitForEvent("popup"),
//     page.locator("button").click(),
//   ]);

//   await page2.locator("button").click();
//   await page3.locator("button").click();
//   await page4.locator("button").click();
// });
