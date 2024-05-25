describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://kitchen.applitools.com/')
    cy.get('[href="/ingredients/iframe"]').should('be.visible').click()
    cy.get('#youtube-table-cypress').should('exist').wait(2000)
    cy.get('#youtube-table-cypress').should('exist').chkiFrameLoaded()
    .find('button[aria-label="Play"]').should('exist').click()
    
  })
})