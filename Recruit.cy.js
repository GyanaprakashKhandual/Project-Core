import login from "../POM/LoginPage";
import recruitmentPanel from "../POM/Recruitment";

describe('Orange HRM', () => {
    it('Check the functionality of the Recruitment tag / button', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loging = new login();
        const userName = 'Admin';
        const Password = 'admin123';
        const expectedText = 'Dashboard';
        loging.executelogin(userName, Password, expectedText);
        const heading = 'Recruitment';
        const panel = new recruitmentPanel();
        panel.visibility(heading);
        
    });
});