

describe('validate the login functionality',function(){

    it('login with valid credential',()=>{

        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
        cy.get('input[id="email"]').type('ytiwari.ecs@gmail.com')
        cy.get('input[id="passwd"]').type('yagya123')
        cy.get('button[name="SubmitLogin"]').click()
        cy.get('h1[class="page-heading"]').should('be.visible')
    })

    it('login with invalid credential',()=>{

        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
        cy.get('input[id="email"]').type('ytiwari.ecs@gmail.com')
        cy.get('input[id="passwd"]').type('yagya13')
        cy.get('button[name="SubmitLogin"]').click()
        cy.get('ol > li').should('be.visible')
    })

    it('validate the navigation tab',()=>{


        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
        cy.get('a[title="Women"]').should('have.text','Women')  //'be.visible' = 'have.text','value' *in this case
        cy.get('a[title="Women"]').should('have.attr', 'class')  //alternative
        cy.get('a[title="T-shirts"]').should('be.visible')
        cy.get('a[title="Dresses"]').should('be.visible')
    })

    it('validate the logo on homepage',()=>{


        cy.visit('http://automationpractice.com/index.php')
        cy.get('img[alt="My Store"]').should('be.visible')
    })

    it.only('validate the logo on homepage',()=>{

        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
        cy.get('input[id="email"]').type('ytiwari.ecs@gmail.com')
        cy.get('input[id="passwd"]').type('yagya123')
        cy.get('button[name="SubmitLogin"]').click()
        cy.get('a[title="Log me out"]').click()
        cy.get('h1[class="page-heading"]').should('be.visible')


    })
})