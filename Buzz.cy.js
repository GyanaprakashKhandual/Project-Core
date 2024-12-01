import login from "../POM/LoginPage";
import buzzPanel from "../POM/Buzz";

describe('Orange HRM', () => {
    it('Check the functionality of the Buzz tag / button', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loging = new login();
        const userName = 'Admin';
        const Password = 'admin123';
        const expectedText = 'Dashboard';
        loging.executelogin(userName, Password, expectedText);
        const panel = new buzzPanel();
        const heading = 'Buzz';
        panel.visibility(heading);
    });
});