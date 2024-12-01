import login from "../POM/LoginPage";
import timePanel from "../POM/Time";


describe('Orange HRM', () => {
    it('Checking the functionality of the Time tag/button', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const loging = new login();
    const userName = 'Admin';
    const Password = 'admin123';
    const expectedText = 'Dashboard';
    loging.executelogin(userName, Password, expectedText);
    const heading = 'Time';
    const panel = new timePanel();
    panel.visibility(heading);
    });
});