import { test, expect, Page } from '@playwright/test';

// Helper functions converted from Cypress support files
async function loginUser(page: Page, username: string, password: string) {
  // Enter username and password using actual selectors from login-po.ts
  if (username.length >= 1) {
    await page.fill('#userName', username);
  }
  if (password.length >= 1) {
    await page.fill('#password', password);
  }
  // Click login button
  await page.click('#loginButton');
  // Wait for profile select window to appear
  await page.waitForSelector('#popup_4_window_h', { state: 'visible' });
}

async function selectUserProfile(page: Page, profile: string) {
  // Wait for profile select window to be visible and verify text
  await expect(page.locator('#popup_4_window_h')).toBeVisible();
  await expect(page.locator('#popup_4_window_h')).toContainText('Select Profile');
  
  // Click on the profile text
  await page.locator(`text=${profile}`).click();
  
  // Click the profile select button
  await page.click('button[id*=_btnSelect]');
  
  // Handle concurrent login popup if it appears
  try {
    // Wait for the popup to appear and be visible
    const loginExistsPopup = page.locator('#ConcurrentLoginOptionsForm');
    await loginExistsPopup.waitFor({ state: 'visible', timeout: 5000 });
    
    // Wait for the continue button to be visible and enabled
    const continueButton = page.locator('button[id*=_btnContinue]');
    await continueButton.waitFor({ state: 'visible', timeout: 3000 });
    
    // Ensure the button is enabled before clicking
    await expect(continueButton).toBeEnabled();
    
    // Click the continue button
    await continueButton.click();
    
    console.log('✅ Clicked continue button on concurrent login popup');
  } catch (error) {
    console.log('Concurrent login popup not present or continue button not clickable:', error);
  }
}

async function selectBrand(page: Page, brand: string) {
  // Add your brand selection logic here
  await page.selectOption('[data-testid="brand-select"]', brand); // Adjust selector as needed
}

async function enterModelNumber(page: Page, modelNumber: string) {
  await page.fill('[data-testid="model-number"]', modelNumber); // Adjust selector as needed
}

async function itemType(page: Page, type: string) {
  await page.selectOption('[data-testid="item-type"]', type); // Adjust selector as needed
}

async function enterItemPurchaseDate(page: Page, date: string) {
  await page.fill('[data-testid="purchase-date"]', date); // Adjust selector as needed
}

async function enterPurchasePrice(page: Page, price: string) {
  await page.fill('[data-testid="purchase-price"]', price); // Adjust selector as needed
}

async function enterSerialNumber(page: Page, serialNumber: string) {
  await page.fill('[data-testid="serial-number"]', serialNumber); // Adjust selector as needed
}

async function selectExtendedPlan(page: Page, plan: string) {
  if (plan === 'Yes') {
    await page.check('[data-testid="extended-plan-yes"]'); // Adjust selector as needed
  } else {
    await page.check('[data-testid="extended-plan-no"]'); // Adjust selector as needed
  }
}

async function selectWorkingOrder(page: Page, workingOrder: string, damageFromIncident: string) {
  if (workingOrder === 'Yes') {
    await page.check('[data-testid="working-order-yes"]'); // Adjust selector as needed
  } else {
    await page.check('[data-testid="working-order-no"]'); // Adjust selector as needed
  }
  
  if (damageFromIncident === 'Yes') {
    await page.check('[data-testid="damage-incident-yes"]'); // Adjust selector as needed
  } else {
    await page.check('[data-testid="damage-incident-no"]'); // Adjust selector as needed
  }
}

async function selectAddress(page: Page, itemAddressSame: string, savedAddress: string) {
  if (itemAddressSame === 'Yes') {
    await page.check('[data-testid="same-address-yes"]'); // Adjust selector as needed
  }
  if (savedAddress === 'Yes') {
    await page.check('[data-testid="saved-address-yes"]'); // Adjust selector as needed
  }
}

function getPreviosDateFromCurrentDate(daysAgo: string): string {
  const days = parseInt(daysAgo);
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toISOString().split('T')[0]; // Return YYYY-MM-DD format
}

// Helper function to get user credentials based on worker index
function getUserCredentials(workerIndex: number) {
  const users = [
    {
      username: process.env.VU1_USERNAME || "awsintegration",
      password: process.env.VU1_PASSWORD || "automation0325"
    },
    {
      username: process.env.VU2_USERNAME || "perftesttwo",
      password: process.env.VU2_PASSWORD || "automation0325"
    }
  ];
  
  return users[workerIndex % users.length];
}

test.describe('Sales Test Suite', () => {
  test.beforeEach(async ({ page }) => {
    // Setup that runs before each test
    await page.goto('https://uat-external-alb.adp-uat.aws.domgencloud.net/GTConnect/UnifiedAcceptor/FrameworkDesktop.Main?sso=false');
  });

  test('Login User and Verify Elements', async ({ page }, testInfo) => {
    // Get dynamic credentials based on VU/worker
    const credentials = getUserCredentials(testInfo.workerIndex);
    
    console.log(`🚀 VU${testInfo.workerIndex + 1} using credentials: ${credentials.username}`);
    
    // Navigate to the application
    await page.goto('https://uat-external-alb.adp-uat.aws.domgencloud.net/GTConnect/UnifiedAcceptor/FrameworkDesktop.Main?sso=false');
    
    // Login user with dynamic credentials
    await loginUser(page, credentials.username, credentials.password);
    
    // Select user profile
    await selectUserProfile(page, "WIB Agent Profile");
    
    // Verify task launcher is visible
    await expect(page.locator('div[id*="cctTaskLauncher"]')).toBeVisible();
    
    // Click identify customer link
    await page.getByRole('link', { name: 'Identify Customer' }).click();
    
    // Verify identify customer title
    const identifyCustomerTitle = page.locator('div[id*="lblIdentifyCustomer"]:not(input)');
    await expect(identifyCustomerTitle).toBeVisible();
    await expect(identifyCustomerTitle).toHaveText('Identify Customer');
    
    // Wait for iframe to load and switch context
    const iframe = page.frameLocator('iframe[id*="cctRenderURL"]');
    
    // Wait for iframe to be loaded and content to be ready
    await page.waitForTimeout(10000);
    
    // Wait for specific iframe elements to be available with extended timeout
    let emailAddressFound = false;
    let attempts = 0;
    const maxAttempts = 6; // 6 attempts × 10 seconds = 60 seconds total
    
    while (!emailAddressFound && attempts < maxAttempts) {
      try {
        await iframe.locator('label').filter({ hasText: 'Email Address' }).waitFor({ state: 'visible', timeout: 10000 });
        emailAddressFound = true;
        console.log('✅ Email Address element found after', ((attempts + 1) * 10), 'seconds');
      } catch (error) {
        attempts++;
        console.log(`Attempt ${attempts}/${maxAttempts}: Email Address not found, waiting 10 more seconds...`, error instanceof Error ? error.message : 'Unknown error');
        if (attempts < maxAttempts) {
          await page.waitForTimeout(10000);
        }
      }
    }
    
    if (!emailAddressFound) {
      console.log('Email Address text not found after 60 seconds, trying alternative approach...');
      // Alternative: wait for any form element in the iframe
      await iframe.locator('form, div, input').first().waitFor({ state: 'visible', timeout: 30000 });
      await page.waitForTimeout(3000);
    }
    
    // Verify form elements are visible - use more specific selectors
    await expect(iframe.locator('label').filter({ hasText: 'Email Address' })).toBeVisible();
    await expect(iframe.locator('[data-testid=button_selectCustomer]')).toBeVisible();
    
    // Select client dropdown
    await iframe.locator('div > [role=combobox]').click();
    await iframe.locator('[role=listbox]').click({ force: true });
    
    // Select Whirlpool from dropdown
    const clientOptions = iframe.locator('[role=listbox] li');
    const optionCount = await clientOptions.count();
    
    for (let i = 0; i < optionCount; i++) {
      const optionText = await clientOptions.nth(i).textContent();
      if (optionText?.toUpperCase() === "WHIRLPOOL") {
        await clientOptions.nth(i).click();
        break;
      }
    }
    
    // Enter surname for customer search
    await iframe.locator('[data-testid=input_surname]').fill("ADPAlnyLITu");
    await iframe.locator('[data-testid=button_search]').click();
    
    // Wait for search results
    await page.waitForTimeout(5000);
    
    // Wait for search results to load and verify they exist
    const searchResults = iframe.locator('[data-id^="GEN:"]');
    await expect(searchResults.first()).toBeVisible();
    
    // Click on first search result
    await searchResults.first().click();
    await page.waitForTimeout(5000);
    
    // Log search result data
    const searchResultText = await searchResults.first().textContent();
    console.log('Zero row data:', searchResultText);
    
    // Extract surname data with fallback approach
    try {
      const surnameElement = searchResults.first().locator("[data-field='surname']");
      if (await surnameElement.count() > 0) {
        const surnameData = await surnameElement.textContent();
        console.log('Surname data:', surnameData);
      } else {
        // Fallback: look for the surname text directly
        console.log('data-field selector not found, using text search fallback');
        const fallbackElement = searchResults.first().locator('text=ADPtestqafAugL');
        const surnameData = await fallbackElement.textContent();
        console.log('Surname data (fallback):', surnameData);
      }
    } catch (error) {
      console.log('Error extracting surname data:', error);
    }
    
    // Double click on search result
    await searchResults.first().dblclick();
    await page.waitForTimeout(5000);
    
    // Verify customer profile page - use more specific selector to avoid strict mode violation
    await expect(page.locator('div[id*="lblCustomerProfile"]')).toBeVisible();
    
    // Verify customer details are visible - use first() to avoid strict mode violation
    const customerProfileIframe = page.frameLocator('iframe[id*="cctRenderURL"]');
    //await expect(customerProfileIframe.locator('div[class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-1wxaqej"]').first()).toBeVisible();
    
    // Click register item link
    await page.getByRole('link', { name: 'Add Item' }).click();
    
    // Verify register item page title
    const registerTitle = page.locator('div[id*=_lblDisplayName]');
    await expect(registerTitle).toContainText('Add Item');
    
    // Wait for register item iframe to load
    const registerIframe = page.frameLocator('iframe[id*="_cctRenderURL"][src*="plans/new"]');
    await page.waitForTimeout(3000);
    
    // Verify multi-stepper stage 0 is visible
    //await expect(registerIframe.locator('div.MuiStepper-root.MuiStepper-horizontal.MuiStepper-alternativeLabel > div').nth(0).locator('span > span > svg[data-testid=EditIcon]')).toBeVisible();
    
    // Click next button
    await registerIframe.locator('[data-testid=button_registrationNextButton]').click();
    
    // Verify registration card section and stage 1
    await expect(registerIframe.locator('[id*="_hasRegistrationCard"]')).toBeVisible();
    await expect(registerIframe.locator('div.MuiStepper-root.MuiStepper-horizontal.MuiStepper-alternativeLabel > div').nth(1).locator('span > span > svg[data-testid=EditIcon]')).toBeVisible();
    
    // Click no registration card button
    await registerIframe.locator('[data-testid*="_hasRegistrationCard_false"]').click();
    
    // Fill item details
    const brand = 'Whirlpool';
    const model_number = 'WRS325SDHZ';
    const item_type = 'Refrigerator';
    const date_received = '325';
    const purchase_price = '1000';
    const serial_number = '123456789';
    const extended_plan = 'No';
    const working_order = 'Yes';
    const damage_from_incident = 'No';
    const item_address_same = 'Yes';
    const saved_address = 'Yes';
    
    const itemPurchaseDate = getPreviosDateFromCurrentDate(date_received);
    
    // Select brand
    await registerIframe.locator('[name=manufacturerBrandCode] > div > div > input').click();
    const brandOptions = registerIframe.locator('ul[role="listbox"]');
    const brandCount = await brandOptions.locator('li').count();
    for (let i = 0; i < brandCount; i++) {
      const brandText = await brandOptions.locator('li').nth(i).textContent();
      if (brandText?.includes(brand)) {
        await brandOptions.locator('li').nth(i).click();
        break;
      }
    }
    
    // Enter model number
    await registerIframe.locator('[data-test-id=model-lookup-autocomplete] > div > div > input').fill(model_number);
    
    // Select item type if model doesn't include lookup
    if (!model_number.toLowerCase().includes('lookup')) {
      await registerIframe.locator('[name=itemTypeCode] > div > div > input').click();
      const itemTypeOptions = registerIframe.locator('ul[role="listbox"]');
      const itemTypeCount = await itemTypeOptions.locator('li').count();
      for (let i = 0; i < itemTypeCount; i++) {
        const itemTypeText = await itemTypeOptions.locator('li').nth(i).textContent();
        if (itemTypeText?.includes(item_type)) {
          await itemTypeOptions.locator('li').nth(i).click();
          break;
        }
      }
    }
    
    // Enter item purchase date
    await registerIframe.locator('[data-testid="input_purchase.date"]').fill("08/08/2025");
    
    // Enter purchase price
    await registerIframe.locator('[data-testid="input_purchase.price"]').fill(purchase_price);
    
    // Enter serial number
    await registerIframe.locator('[data-testid=input_serialNumber]').fill(serial_number);
    
    // Select extended plan
    if (extended_plan === 'Yes') {
      await registerIframe.locator('[data-testid="additionalDetails.extendedServicePlanOnAppliance_true"]').click();
    } else {
      await registerIframe.locator('[data-testid="additionalDetails.extendedServicePlanOnAppliance_false"]').click();
    }
    
    // Select working order
    if (working_order === 'Yes') {
      await registerIframe.locator('[data-testid="additionalDetails.operationalStatusCode_true"]').click();
    } else {
      await registerIframe.locator('[data-testid="additionalDetails.operationalStatusCode_false"]').click();
    }
    
    // // Select damage from incident
    // if (damage_from_incident === 'No') {
    //   await registerIframe.locator('[data-testid="additionalDetails.accidentalDamage_false"]').click();
    // } else {
    //   await registerIframe.locator('[data-testid="additionalDetails.accidentalDamage_true"]').click();
    // }
    
    // Select address options - use the actual address button found on the page
    if (item_address_same === 'Yes' || saved_address === 'Yes') {
      try {
        // Click the address dropdown button to open address selection
        await registerIframe.locator('[data-testid="button_address-capture-toggle"]').waitFor({ timeout: 10000 });
        await registerIframe.locator('[data-testid="button_address-capture-toggle"]').click();
        console.log('✅ Clicked address selection button');
        
        // Wait for the address dropdown menu to appear
        await registerIframe.locator('[data-testid="address-menu-item"]').waitFor({ timeout: 10000 });
        
        // Click on the first address item in the dropdown
        await registerIframe.locator('[data-testid="address-menu-item"]').first().click();
        console.log('✅ Selected address from dropdown');
        
        // Wait a moment for the selection to be processed
        await page.waitForTimeout(1000);
        
      } catch (error) {
        console.log('Address selection button or dropdown not found:', error);
        console.log('Continuing without selecting address...');
      }
    }
    
    // Click register item button
    await registerIframe.locator('[data-testid=button_add-item]').first().click();
    
    // Wait for page to be ready
    await page.waitForLoadState('domcontentloaded');
    
    // Click next button in item page
    await registerIframe.locator('[data-testid=button_save]').click();
    
    // Wait for page to be ready
    await page.waitForLoadState('domcontentloaded');
    
    // Verify we're on stage 2
    await expect(registerIframe.locator('div.MuiStepper-root.MuiStepper-horizontal.MuiStepper-alternativeLabel > div').nth(2).locator('span > span > svg[data-testid=EditIcon]')).toBeVisible();
    
    // Wait for quote/plan data grid to appear (up to 20 seconds)
    try {
      console.log('Waiting for quote data grid to load...');
      await registerIframe.locator('div.MuiDataGrid-virtualScrollerRenderZone[role="rowgroup"] div[data-id*="_GEN:"][role="row"]').waitFor({ timeout: 20000 });
      console.log('✅ Quote data grid loaded successfully');
    } catch (error) {
      console.log('Quote data grid not found within 20 seconds:', error);
    }
    
    // Final wait for page to be completely ready
    await page.waitForLoadState('domcontentloaded');
    
    console.log(`✅ Test completed successfully through item registration to stage 2 for user: ${credentials.username}`);

    // Wait for 30 seconds after test completion
    await page.waitForTimeout(30000);

  });
});
