import panelAdmin from "../POM/Admin";
import login from "../POM/LoginPage";

describe('Orange HRM', () => {
    it('Checking the functionality of Admin anchor tag/button', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loging = new login();
        const userName = 'Admin';
        const Password = 'admin123';
        const expectedText = 'Dashboard';
        loging.executelogin(userName, Password, expectedText);
        const heading = "AdminUser Management";
        const panel = new panelAdmin();
        panel.visibility(heading);

    });
});
