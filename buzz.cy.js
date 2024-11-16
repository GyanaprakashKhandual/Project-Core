describe('OrangeHRM', () => {
    it('Check the visibility of the claim functionality', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').type('Admin');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').type('admin123');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Dashboard');
        cy.xapth('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[12]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]').should('have.text','Buzz')
    });
});