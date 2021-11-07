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
    cy.get(':nth-child(2) > button').click()
    cy.get(':nth-child(4) > :nth-child(2)').contains('has 1')
  })
})