# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: assesment\week-16\proj1.spec.js >> assessment-16
- Location: tests\assesment\week-16\proj1.spec.js:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('#hobbies-checkbox-1')
    - locator resolved to <input value="1" type="checkbox" id="hobbies-checkbox-1" class="form-check-input"/>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div class="table-responsive">…</div> from <div role="dialog" tabindex="-1" aria-modal="true" class="fade modal show" aria-labelledby="example-modal-sizes-title-lg">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <td>State and City</td> from <div role="dialog" tabindex="-1" aria-modal="true" class="fade modal show" aria-labelledby="example-modal-sizes-title-lg">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <td>State and City</td> from <div role="dialog" tabindex="-1" aria-modal="true" class="fade modal show" aria-labelledby="example-modal-sizes-title-lg">…</div> subtree intercepts pointer events
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is not stable
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <td>Date of Birth</td> from <div role="dialog" tabindex="-1" aria-modal="true" class="fade modal show" aria-labelledby="example-modal-sizes-title-lg">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <td>State and City</td> from <div role="dialog" tabindex="-1" aria-modal="true" class="fade modal show" aria-labelledby="example-modal-sizes-title-lg">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <td>Date of Birth</td> from <div role="dialog" tabindex="-1" aria-modal="true" class="fade modal show" aria-labelledby="example-modal-sizes-title-lg">…</div> subtree intercepts pointer events
  2 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <td>Student Email</td> from <div role="dialog" tabindex="-1" aria-modal="true" class="fade modal show" aria-labelledby="example-modal-sizes-title-lg">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <td>State and City</td> from <div role="dialog" tabindex="-1" aria-modal="true" class="fade modal show" aria-labelledby="example-modal-sizes-title-lg">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <td>Date of Birth</td> from <div role="dialog" tabindex="-1" aria-modal="true" class="fade modal show" aria-labelledby="example-modal-sizes-title-lg">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <td>Student Email</td> from <div role="dialog" tabindex="-1" aria-modal="true" class="fade modal show" aria-labelledby="example-modal-sizes-title-lg">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms

```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("assessment-16", async ({ page }) => {
  4  |   await page.goto("https://demoqa.com/automation-practice-form");
  5  | 
  6  |   // First Name
  7  |   const firstName = page.getByPlaceholder("First Name");
  8  |   await expect(firstName).toBeEmpty();
  9  |   await firstName.fill("Nakul");
  10 | 
  11 |   // Last Name & Email
  12 |   await page.getByPlaceholder("Last Name").fill("Kalra");
  13 |   await page.getByPlaceholder("name@example.com").fill("kalra@gmail.com");
  14 |   await page.locator('//input[@id="gender-radio-1"]').click();
  15 |   await page.getByPlaceholder("Mobile Number").fill("9876543210");
  16 | 
  17 |   // Date of Birth
  18 |   await page.locator("#dateOfBirthInput").click();
  19 |   await page
  20 |     .locator(".react-datepicker__month-select")
  21 |     .selectOption({ index: 2 });
  22 |   await page
  23 |     .locator(".react-datepicker__year-select")
  24 |     .selectOption({ index: 2 });
  25 |   await page.locator(".react-datepicker__day--015").click(); // pick a day
  26 | 
  27 |   // Subject
  28 |   const subject = await page.locator("#subjectsInput");
  29 |   await expect(subject).toBeEditable();
  30 |   await subject.click();
  31 |   await subject.fill("Maths");
  32 |   await page.keyboard.press("Enter");
  33 | 
  34 |   // Hobbies
  35 |   const hobby1 = page.locator("#hobbies-checkbox-1");
  36 |   await expect(hobby1).not.toBeChecked();
> 37 |   await hobby1.click();
     |                ^ Error: locator.click: Target page, context or browser has been closed
  38 |   await expect(hobby1).toBeChecked();
  39 | 
  40 |   await page.locator("#hobbies-checkbox-3").check();
  41 | 
  42 |   // Address
  43 |   await page.getByPlaceholder("Current Address").fill("Ludhiana");
  44 | 
  45 |   // State
  46 |   const state = page.locator("#react-select-3-input");
  47 |   await expect(state).toBeEditable();
  48 |   await state.click();
  49 |   await state.fill("Har");
  50 |   await page.keyboard.press("Enter");
  51 | 
  52 |   // City
  53 |   const city = page.locator("#react-select-4-input");
  54 |   await expect(city).toBeEditable();
  55 |   await city.click();
  56 |   await city.fill("Kar");
  57 |   await page.keyboard.press("Enter");
  58 | 
  59 |   // Screenshot
  60 |   await page.screenshot({ path: "screenshot/proj1.png" });
  61 |   // await expect(page).toHaveScreenshot("screenshot/proj1.png");
  62 | 
  63 |   // Submit
  64 |   const submitButton = page.getByRole("button", { name: "Submit" });
  65 |   await expect(submitButton).toBeEnabled();
  66 |   await submitButton.click();
  67 | 
  68 |   // Validation (modal appears)
  69 |   const modal = page.locator(".modal-content");
  70 |   await expect(modal).toBeVisible();
  71 |   await expect(modal).toContainText("Thanks for submitting the form");
  72 | });
  73 | 
```