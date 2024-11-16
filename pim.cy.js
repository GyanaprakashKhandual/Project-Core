// Cheking the PIM dashboard
describe('OrangeHRM', () => {
    it('Cheking the PIM dashboard', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').type('Admin');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').type('admin123');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Dashboard');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]').should('have.text','PIM');
    });
});
// Checking the configure button in the PIM dashboard
describe('OrangeHRM', () => {
    it('Checking the configure button in the PIM dashboard', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').type('Admin');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').type('admin123');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Dashboard');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]').should('have.text','PIM');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[1]/span').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[1]/ul/li[1]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]').should('have.text','Configuration');
    });
});
// Checking the Add Employee tag in the PIM section
describe('OrangeHRM', () => {
    it('Checking the Add Employee tag in the PIM section', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').type('Admin');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').type('admin123');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Dashboard');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]').should('have.text','PIM');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[1]/span').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[3]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/h6').should('have.text','Add Employee');
    });
});
// Checking the My employee list in the PIM section
describe('OrangeHRM', () => {
    it('Checking the My employee list in the PIM section', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').type('Admin');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').type('admin123');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Dashboard');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]').should('have.text','PIM');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[1]/span').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[2]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[1]/div[1]/h5').should('have.text','Employee Information');
    });
});
// Checking the reports tag in the PIM section
describe('OrangeHRM', () => {
    it('Checking the reports tag in the PIM section', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').type('Admin');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').type('admin123');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Dashboard');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]').should('have.text','PIM');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[1]/span').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[4]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[1]/div[1]/h5').should('have.text','Employee Reports');
    });
});
//Checking the help button in the PIM section
describe('OrangeHRM', () => {
    it('Checking the help button in the PIM section', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').type('Admin');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').type('admin123');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Dashboard');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]').should('have.text','PIM');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[1]/span').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[4]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[1]/div[1]/h5').should('have.text','Employee Reports');
    });
});
//Checking the help button in the PIM section
describe('OrangeHRM', () => {
    it('Checking the help button in the PIM section', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').type('Admin');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').type('admin123');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Dashboard');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]').should('have.text','PIM');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[1]/span').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[4]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[1]/div[1]/h5').should('have.text','Employee Reports');
    });
});
//Checking the help button in the PIM section
describe('OrangeHRM', () => {
    it('Checking the help button in the PIM section', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').type('Admin');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').type('admin123');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Dashboard');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]').should('have.text','PIM');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[1]/span').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/div/button').click();
    });
});
