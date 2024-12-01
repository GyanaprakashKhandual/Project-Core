import login from "../POM/LoginPage";
import PimPanel from "../POM/PIM";

describe('Orange HRM', () => {
    it('Checking the functionality of the PIM anchor tag / button', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loging = new login();
        const userName = 'Admin';
        const Password = 'admin123';
        const expectedText = 'Dashboard';
        loging.executelogin(userName, Password, expectedText);
        const visibility = new PimPanel();
        const heading = "PIM";
        visibility.visibilityPIM(heading);
    });
});