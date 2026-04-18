import { test } from "@playwright/test";
import { log } from "node:console";
import { skip } from "node:test";

// test("1st Tese Case", async () => {
//   log("1st Test Case");
// });

// test("2nd Tese Case", async () => {
//   log("2nd Test Case");
// });

// test.only("3rd Tese Case", async () => {
//   log("3rd Test Case");
// });

// test.skip("4th Tese Case", async () => {
//   log("4th Test Case");
// });

// test.fixme("5th Tese Case", async () => {
//   log("5th Test Case");
// });

// test.describe("login", async () => {
//   log("desc");
//   test("password button", async ({ page }) => {
//     log("works");
//   });

//   test.only("only", async () => {
//     log("asd");
//   });
// });

test("browser", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.amazon.in/", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });

  // proper delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("cleared");

  const cookies = await context.cookies();
  console.log(cookies);
  await page.screenshot({ path: "screenshot/ss.png" });

  await context.close();
});
