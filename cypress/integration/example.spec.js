
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('body tag', ()=>{
            cy.get('body').should('be.visible');
        });
    });
});