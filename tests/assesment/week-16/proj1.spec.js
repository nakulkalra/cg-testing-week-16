import { expect, test } from "@playwright/test";
import { assert } from "node:console";

test("assesment-16", async ({ page }) => {
  await page.goto("https://demoqa.com/automation-practice-form");
  const firstName = await page.getByPlaceholder("First Name");
  expect(firstName).toBeEmpty();
  await firstName.fill("Nakul");
  await page.getByPlaceholder("Last Name").fill("Kalra");
  await page.getByPlaceholder("name@example.com").fill("kalra@gmail.com");
  await page.locator('//input[@id="gender-radio-1"]').click();
  await page.getByPlaceholder("Mobile Number").fill("9876543210");
  await page.locator('//input[@id="dateOfBirthInput"]').click();
  await page
    .locator('//select[@class="react-datepicker__month-select"]')
    .selectOption({ index: 2 });
  await page
    .locator('//select[@class="react-datepicker__year-select"]')
    .selectOption({ index: 2 });
  await page.pause();

  const subject = await page.locator('//input[@id="subjectsInput"]');
  expect(subject).toBeEditable;
  await subject.click();
  await subject.fill("Mat");
  await page.keyboard.press("Enter");

  const hobbiesCheckBox1 = await page.locator(
    '//input[@id="hobbies-checkbox-1"]',
  );
  await expect(hobbiesCheckBox1).toBeChecked({ checked: false });
  await hobbiesCheckBox1.click();
  await expect(hobbiesCheckBox1).toBeChecked({ checked: true });

  await page.locator('//input[@id="hobbies-checkbox-3"]').check();
  await page.pause();
  await page.getByPlaceholder("Current Address").fill("Ludhiana");
  const state = await page.locator('//input[@id="react-select-3-input"]');
  await expect(state).toBeEditable;

  await state.click();
  await state.fill("Har");
  await page.keyboard.press("Enter");

  const city = await page.locator('//input[@id="react-select-4-input"]');
  await expect(city).toBeEditable;

  await city.click();
  await city.fill("Kar");
  await page.keyboard.press("Enter");

  const submitButton = page.getByRole("button", { name: "Submit" });
  await expect(submitButton).toBeEnabled();
  await submitButton.click();
  await page.pause();
});
