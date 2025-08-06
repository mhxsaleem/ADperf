class ManageBillPage {
  BillingTab() {
    return (
      cy
        .iframe('iframe[id*="_cctRenderURL"][src*="customers"]')
        // .find('[data-testid=table_registered-items]');
        .find('[role=tablist] > button')
        .eq(1)
    );
  }

  productVariantId() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="customers"]').find('[data-testid=input_productVariantId]');
  }

  clientCode() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="customers"]').find('[data-testid=input_clientCode]');
  }

  itemTypeCode() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="customers"]').find('[data-testid=input_itemTypeCode]');
  }
  manufacturerBrandCode() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="customers"]').find('[data-testid=input_manufacturerBrandCode]');
  }
  model() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="customers"]').find('[data-testid=input_model]');
  }
  serialNumber() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="customers"]').find('[data-testid=input_serialNumber]');
  }
  purchaseDate() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="customers"]').find('[data-testid=input_purchaseDate]');
  }
  purchasePrice() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="customers"]').find('[data-testid=input_purchasePrice]');
  }
  effectiveDate() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="customers"]').find('[data-testid=input_effectiveDate]');
  }
  expectedRenewalDate() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="customers"]').find('[data-testid=input_expectedRenewalDate]');
  }
  statusCode() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="customers"]').find('[data-testid=input_statusCode]');
  }
  term() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="customers"]').find('[data-testid=input_term]');
  }
  warrantyStatus() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="customers"]').find('[data-testid=input_warrantyStatus]');
  }
  warrantyParts() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="customers"]').find('[data-testid=input_warrantyParts]');
  }
  warrantyLabour() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="customers"]').find('[data-testid=input_warrantyLabour]');
  }
  totalPremiumWithTax() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="customers"]').find('[data-testid=input_totalPremiumWithTax]');
  }
  appliedDiscount() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="customers"]').find('[data-testid=input_appliedDiscount]');
  }
  paymentMethodCode() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="customers"]').find('[data-testid=input_paymentMethodCode]');
  }
  premiumFrequency() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="customers"]').find('[data-testid=input_premiumFrequency]');
  }
  billingAccName() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="customers"]').find('[data-testid=input_billingAccName]');
  }
  paymentMethod() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="customers"]').find('[data-testid=input_paymentMethod]');
  }
  bankAccountNumber() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="customers"]').find('[data-testid=input_bankAccountNumber]');
  }
  paymentHistoryNoRow() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="customers"]')
      .find('div[role=grid] > div:nth-child(2) > div:nth-child(2) > div > div');
  }
  commonTableRole() {
    return (
      cy
        .iframe('iframe[id*="_cctRenderURL"][src*="customers"]')
        // .find('[data-testid=table_plans]');
        .find('[role=rowgroup]')
    );
  }

  expandCancellation() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="customers"]').find('[data-testid=ArrowRightIcon]').eq(1);
  }

  getcancelReasonCode() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="customers"]').find('[data-testid=input_cancelReasonCode]');
  }

  getcancelReasonDate() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="customers"]').find('[data-testid=input_cancelReasonDate]');
  }
}
export default ManageBillPage;
