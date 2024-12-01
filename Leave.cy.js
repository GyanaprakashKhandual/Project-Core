import login from "../POM/LoginPage";
import leavePanel from "../POM/Leave";



describe('Orange HRM', () => {
  it('Checking the functionality of the Leave tag/button', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const loging = new login();
    const userName = 'Admin';
    const Password = 'admin123';
    const expectedText = 'Dashboard';
    loging.executelogin(userName, Password, expectedText);
    const heading = 'Leave';
    const panel = new leavePanel();
    panel.visibility(heading);
    
  });
})
