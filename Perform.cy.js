import login from "../Pom/LoginPage";
import performancePanel from "../POM/Perform";

describe('Orange HRM', () => {
    it('Check the functionality of the Performance tag / button', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loging = new login();
        const userName = 'Admin';
        const Password = 'admin123';
        const expectedText = 'Dashboard';
        loging.executelogin(userName, Password, expectedText);
        const panel = new performancePanel();
        const heading = 'My Performance';
        panel.visibility(heading);
    });
});