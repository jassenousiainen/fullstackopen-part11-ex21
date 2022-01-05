/* eslint-disable no-undef */
describe('Anecdotes', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('Anecdotes')
    cy.contains('create new')
  })

  it('loads anecdote correctly and it can be voted', function() {
    cy.visit('http://localhost:5000')
    cy.contains('If it hurts, do it more often')
    cy.get(':nth-child(1) > .voting-container > .voting > .vote').click()
    cy.get(':nth-child(1) > .voting-container > .voting > .votes > p').contains('1')
  })
})