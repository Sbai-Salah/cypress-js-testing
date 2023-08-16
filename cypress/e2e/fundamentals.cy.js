describe('Fundamentals test', () => {
  beforeEach(()=>{
    cy.visit('/fundamentals')
  })
  it('contains correct header text', () => {
    // cy.visit('/fundamentals') : to avoid repeating this visit we use the BeforeEach 
    // cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i)
    // we customize this cy.get in the support/commands.js : 
    
    cy.getDataTest('fundamentals-header').should('contain.text', 'Testing Fundamentals')

  })

  it('Accordion works correctly', () => {
    // cy.visit('/fundamentals')
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')

  })
})