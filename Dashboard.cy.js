import login from "../POM/LoginPage";
import dashboardPanel from "../POM/Dashboard";

describe('Orange HRM', () => {
    it('Check the functionality of the Dashboard tag / button', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loging = new login();
        const userName = 'Admin';
        const Password = 'admin123';
        const expectedText = 'Dashboard';
        loging.executelogin(userName, Password, expectedText);
        const panel = new dashboardPanel();
        const heading = 'Dashboard';
        panel.visibility(heading);
        
    });
});