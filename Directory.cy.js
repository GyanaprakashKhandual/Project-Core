import login from "../POM/LoginPage";
import directoryPanel from "../POM/Directory";

describe('Orange HRM', () => {
    it('Check the functionality of Directory tag / button', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loging = new login();
        const userName = 'Admin';
        const Password = 'admin123';
        const expectedText = 'Dashboard';
        loging.executelogin(userName, Password, expectedText);
        const panel = new directoryPanel();
        const heading = 'Directory';
        panel.visibility(heading);
        
    });
});