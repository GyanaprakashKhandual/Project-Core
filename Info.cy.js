import login from "../POM/LoginPage";
import infoPanel from "../POM/Info";

describe('Orange HRM', () => {
    it('Checking the functionality of the My Info tag / button', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loging = new login();
        const userName = 'Admin';
        const Password = 'admin123';
        const expectedText = 'Dashboard';
        loging.executelogin(userName, Password, expectedText);
        const panel = new infoPanel();
        const heading = 'PIM';
        panel.visibility(heading);
    });
});