// Checking the visibity of the leave function
describe('OrangeHRM', () => {
    it('Checking the visibity of the leave function', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').type('Admin');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').type('admin123');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Dashboard');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[3]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Leave');
    });
});
// Checking the Apply tag in the leave section
describe('OrangeHRM', () => {
    it('Checking the Apply tag in the leave section', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').type('Admin');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').type('admin123');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Dashboard');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[3]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Leave');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[1]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/h6').should('have.text','Apply Leave');
    });
});
// Checking the My leave tag in the leave section
describe('OrangeHRM', () => {
    it('Checking the My leave tag in the leave section', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').type('Admin');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').type('admin123');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Dashboard');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[3]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Leave');
        cy.xpath('/html/body/div/div[1]/div[1]/header/div[2]/nav/ul/li[2]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[1]/div[1]/h5').should('have.text','My Leave List');
    });
});
// Cheking the Enitiltments in the Leave section
describe('OrangeHRM', () => {
    it('Cheking the Enitiltments in the Leave section', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').type('Admin');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').type('admin123');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Dashboard');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[3]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Leave');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[3]/span').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[3]/ul/li[1]/a').click();
    });
});
// Checking the reports in the leave section
describe('OrangeHRM', () => {
    it('Checking the reports in the leave section', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').type('Admin');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').type('admin123');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Dashboard');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[3]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Leave');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[4]/span').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[4]/ul/li[1]/a').click();
    });
});
// Checking the configure tag in the Leave section
describe('OrangeHRM', () => {
    it('Checking the configure tag in the Leave section', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').type('Admin');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').type('admin123');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Dashboard');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[3]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Leave');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[5]/span').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[4]/ul/li[1]/a').click();
    });
});
// Checking the leave list tag in the Leave section
describe('OrangeHRM', () => {
    it('Checking the leave list tag in the Leave section', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').type('Admin');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').type('admin123');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Dashboard');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[3]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Leave');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[6]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[1]/div[1]/h5').should('have.text','Leave List')
    });
});
// Checking the Assign Leave in the Leave section
describe('OrangeHRM', () => {
    it('Checking the Assign Leave in the Leave section', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').type('Admin');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').type('admin123');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Dashboard');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[3]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Leave');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[7]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/h6').should('have.text','Assign Leave')
    });
});