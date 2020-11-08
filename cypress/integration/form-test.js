describe('Single Page Application Sprint Test', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    describe('Entering data in name input', () => {

        cy.get('nameinput').type('Grey').should('have.value', 'Grey')        

    })

    describe('Selecting multiple toppings', () => {

        cy.get(`[type="checkbox"]`).check()

    })

    describe('Can submit the form', () => {

        cy.contains('Add to Order').click()

    })
    
});