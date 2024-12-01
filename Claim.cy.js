import login from "../POM/LoginPage";
import claimPanel from "../POM/Claim";

describe('Orange HRM', () => {
    it('Check the functionality of the Claim tag / button', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loging = new login();
        const userName = 'Admin';
        const Password = 'admin123';
        const expectedText = 'Dashboard';
        loging.executelogin(userName, Password, expectedText);
        const panel = new claimPanel();
        const heading = 'Claim';
        panel.visibility(heading);
    });
});