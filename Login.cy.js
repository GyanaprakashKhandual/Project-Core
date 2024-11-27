import login from "../POM/LoginPage";

describe('Orange HRM', () => {
    it('Verify with correct details on login page', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loging = new login();
        const userName = 'Admin';
        const Password = 'admin123';
        const expectedText = 'Dashboard';
        loging.executelogin(userName, Password, expectedText);
    });
    it('Verify with incorrect details on login page', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loging = new login();
        const userName = 'Chris';
        const Password = 'chris123';
        const expectedText = 'Dashboard';
        loging.executelogin(userName, Password, expectedText);
    });
    it('Verify with no details on login page', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loging = new login();
        const userName = '';
        const Password = '';
        const expectedText = 'Dashboard';
        loging.executelogin(userName, Password, expectedText);
    });
    it('Verify with corretc password but empty password  on login page', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loging = new login();
        const userName = '';
        const Password = 'admin123';
        const expectedText = 'Dashboard';
        loging.executelogin(userName, Password, expectedText);
    });
    it('Verify with correct id and empty password on login page', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loging = new login();
        const userName = 'admin';
        const Password = '';
        const expectedText = 'Dashboard';
        loging.executelogin(userName, Password, expectedText);
    });
    it('Verify with incorrect password but correct id on login page', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loging = new login();
        const userName = 'Admin';
        const Password = 'chris123';
        const expectedText = 'Dashboard';
        loging.executelogin(userName, Password, expectedText);
    });
    it('Verify with correct password but incorrect id on login page', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loging = new login();
        const userName = 'Chris';
        const Password = 'admin123';
        const expectedText = 'Dashboard';
        loging.executelogin(userName, Password, expectedText);
    });
    it('Verify with incorrect verify text on login page', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loging = new login();
        const userName = 'Chris';
        const Password = 'chris123';
        const expectedText = 'Console';
        loging.executelogin(userName, Password, expectedText);
    });
});


