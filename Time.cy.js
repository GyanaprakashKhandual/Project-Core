// Checking the visibility of the time tag
describe('OrangeHRM', () => {
    it('Checking the visibility of the time tag', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').type('Admin');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').type('admin123');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Dashboard');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[4]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]').should('have.text','TimeTimesheets');
    });
});
// Checking the time sheet function in Time section
describe('OrangeHRM', () => {
    it('Checking the time sheet function in Time section', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').type('Admin');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').type('admin123');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Dashboard');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[4]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]').should('have.text','TimeTimesheets');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[1]/span').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[1]/ul/li[1]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/form/div[1]/div[1]/h6').should('have.text','My Timesheet')
    });
});
// Checking the attendance tag in the Time section
describe('OrangeHRM', () => {
    it('Checking the attendance tag in the Time section', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').type('Admin');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').type('admin123');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Dashboard');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[4]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]').should('have.text','TimeTimesheets');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[2]/span').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[2]/ul/li[1]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/h5').should('have.text','My Attendance Records');
    });
});
// Cheking the Reports tag in the Time section
describe('OrangeHRM', () => {
    it('Cheking the Reports tag in the Time section', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').type('Admin');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').type('admin123');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Dashboard');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[4]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]').should('have.text','TimeTimesheets');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[3]/span').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[3]/ul/li[1]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div[1]/div[1]/h5').should('have.text','Project Report');
    });
});
// Checking the project Info in the Time section
describe('OrangeHRM', () => {
    it('Checking the project Info in the Time section', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').type('Admin');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').type('admin123');
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text','Dashboard');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[4]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]').should('have.text','TimeTimesheets');
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[4]/span').click();
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[4]/ul/li[1]/a').click();
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div[1]/h6').should('have.text','Customers');
    });
});


