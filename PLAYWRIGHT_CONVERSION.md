# Cypress to Playwright Conversion

This document explains the conversion of your Cypress test to Playwright.

## Setup Instructions

1. **Install Playwright dependencies:**
```bash
npm install
npx playwright install
```

2. **Run the Playwright test:**
```bash
# Run all tests
npm run playwright:test

# Run tests in headed mode (visible browser)
npm run playwright:headed

# Debug tests
npm run playwright:debug

# View test report
npm run playwright:report
```

## Key Differences Between Cypress and Playwright

### 1. **Test Structure**
- **Cypress:** `describe()` and `it()`
- **Playwright:** `test.describe()` and `test()`

### 2. **Element Interaction**
- **Cypress:** `cy.get().click()`
- **Playwright:** `await page.click()` or `await page.locator().click()`

### 3. **Assertions**
- **Cypress:** `should('be.visible')`
- **Playwright:** `await expect(locator).toBeVisible()`

### 4. **Waiting**
- **Cypress:** `cy.wait(5000)`
- **Playwright:** `await page.waitForTimeout(5000)` or `await page.waitForLoadState()`

### 5. **Iframe Handling**
- **Cypress:** `cy.frameLoaded()` and switching context
- **Playwright:** `page.frameLocator()` for iframe interactions

## Important Notes for Your Test

1. **Selectors Need Updates:** All the `[data-testid="..."]` selectors in the Playwright test are placeholders. You'll need to update them with the actual selectors from your application.

2. **Helper Functions:** The helper functions (loginUser, selectUserProfile, etc.) are converted but need to be adapted with the correct selectors and logic from your Cypress support files.

3. **Iframe Handling:** The iframe interaction has been converted to use Playwright's `frameLocator()` method, but you may need to adjust the iframe selector.

4. **Error Handling:** The fallback logic for the surname field has been converted to use try-catch blocks and element existence checks.

## Recommended Next Steps

1. **Update selectors:** Go through the test file and replace all `[data-testid="..."]` selectors with the actual selectors from your application.

2. **Adapt helper functions:** Convert your Cypress support functions to work with Playwright's API.

3. **Test incrementally:** Run small parts of the test at a time to ensure each section works correctly.

4. **Add page object models:** Consider creating page object models for better test organization and maintenance.

## Benefits of Playwright

1. **Better stability:** More reliable element waiting and interaction
2. **Multi-browser support:** Native support for Chrome, Firefox, Safari, and Edge
3. **Parallel execution:** Built-in parallel test execution
4. **Better debugging:** Enhanced debugging capabilities
5. **Network interception:** Advanced network mocking and monitoring
6. **Auto-waiting:** Automatic waiting for elements to be ready

## Running in Different Browsers

```bash
# Run in specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
npx playwright test --project="Microsoft Edge"

# Run in parallel across all browsers
npx playwright test
```
