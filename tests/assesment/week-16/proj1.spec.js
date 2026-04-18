import { test, expect } from "@playwright/test";

test("assessment-16", async ({ page }) => {
  await page.goto("https://demoqa.com/automation-practice-form");

  // First Name
  const firstName = page.getByPlaceholder("First Name");
  await expect(firstName).toBeEmpty();
  await firstName.fill("Nakul");

  // Last Name & Email
  await page.getByPlaceholder("Last Name").fill("Kalra");
  await page.getByPlaceholder("name@example.com").fill("kalra@gmail.com");
  await page.locator('//input[@id="gender-radio-1"]').click();
  await page.getByPlaceholder("Mobile Number").fill("9876543210");

  // Date of Birth
  await page.locator("#dateOfBirthInput").click();
  await page
    .locator(".react-datepicker__month-select")
    .selectOption({ index: 2 });
  await page
    .locator(".react-datepicker__year-select")
    .selectOption({ index: 2 });
  await page.locator(".react-datepicker__day--015").click();

  await page.waitForTimeout(500);

  // Subject
  const subject = await page.locator('//*[@id="subjectsInput"]');
  await expect(subject).toBeEditable();
  await page.waitForTimeout(500);

  await subject.click();
  await page.waitForTimeout(500);

  await subject.fill("Maths");
  await page.waitForTimeout(500);

  await page.keyboard.press("Enter");

  // Hobbies
  const hobby1 = page.locator("#hobbies-checkbox-1");
  await expect(hobby1).not.toBeChecked();
  await hobby1.click();
  await expect(hobby1).toBeChecked();

  await page.locator("#hobbies-checkbox-3").check();

  // Address
  await page.getByPlaceholder("Current Address").fill("Ludhiana");

  // State
  const state = page.locator("#react-select-3-input");
  await expect(state).toBeEditable();
  await state.click();
  await state.fill("Har");
  await page.keyboard.press("Enter");

  // City
  const city = page.locator("#react-select-4-input");
  await expect(city).toBeEditable();
  await city.click();
  await city.fill("Kar");
  await page.keyboard.press("Enter");

  // Screenshot
  await page.screenshot({ path: "screenshot/proj1.png" });
  // await expect(page).toHaveScreenshot("screenshot/proj1.png");

  // Submit
  const submitButton = page.getByRole("button", { name: "Submit" });
  await expect(submitButton).toBeEnabled();
  await submitButton.click();
});
