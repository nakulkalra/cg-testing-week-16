import { test } from "@playwright/test";
import { assert, log } from "node:console";

// test("test-by", async ({ page }) => {
//   await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
//   await page.getByLabel("Name", { exact: true }).fill("Nakul Kalra");
//   await page
//     .getByPlaceholder("Enter Your Email", { exact: true })
//     .fill("nakul@gmail.com");
//   await page.getByLabel("Password").fill("nakul123");
//   await page.pause();

//   await page.getByTitle("Show Password").click();
//   await page.pause();
//   await page.getByTitle("Hide Password").click();

//   await page.pause();

//   await page.getByRole("Button", { name: "Register", exact: true }).click();
// });

// test("amazon4", async ({ page }) => {
//   await page.goto("https://www.amazon.in/");

//   await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes");
//   await page.locator('//input[@id="nav-search-submit-button"]').click();
//   await page.waitForTimeout(5000);

//   await page
//     .getByText("DOCTOR EXTRA SOFT", { exact: true })
//     .first()
//     .selectText();

//   await page.pause();
// });

// test("test-id", async ({ page }) => {
//   await page.goto("https://www.saucedemo.com/");
//   await page.getByTestId("username").fill("standard_user");

//   const name = await page.getByTestId("username").inputValue();
//   await page.getByTestId("password").fill("secret_sauce");
//   const pass = await page.getByTestId("password").inputValue();

//   log("Username: ", name, "\nPassword: ", pass);
//   await page.pause();
// });

test("test-by", async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
  await page.getByLabel("Name", { exact: true }).fill("Nakul Kalra");
  await page
    .getByPlaceholder("Enter Your Email", { exact: true })
    .fill("nakul@gmail.com");
  await page.getByLabel("Password").fill("nakul123");
  await page.pause();

  await page.getByTitle("Show Password").click();
  await page.pause();
  await page.getByTitle("Hide Password").click();

  await page.pause();

  await page.getByRole("Button", { name: "Register", exact: true }).click();
  assert();
});
