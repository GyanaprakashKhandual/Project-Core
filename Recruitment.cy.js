// Checking the Recruitment panel visibility
describe('OrangeHRM', () => {
    it('Checking the Recruitment panel visibility', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').type('Admin');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').type('admin123');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Dashboard');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[5]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Recruitment');
    });
});
// Checking the Candiadtes tag in the Recruitment panel
describe('OrangeHRM', () => {
    it('Checking the Candiadtes tag in the Recruitment panel', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').type('Admin');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').type('admin123');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Dashboard');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[5]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Recruitment');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[1]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[1]/div[1]/h5').should('have.text','Candidates');
    });
});
// Checking the vacancies tag in the Recruitment panel
describe('OrangeHRM', () => {
    it('Checking the vacancies tag in the Recruitment panel', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').type('Admin');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').type('admin123');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Dashboard');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[5]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Recruitment');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[2]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[1]/div[1]/h5').should('have.text','Vacancies');
    });
});