import login from "../POM/LoginPage";
import search from "../POM/Search";
describe('Orange HRM', () => {
    it('Checking the search functionality with valid search option for Admin', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loging = new login();
        const userName = 'Admin';
        const Password = 'admin123';
        const expectedText = 'Dashboard';
        loging.executelogin(userName, Password, expectedText);
        const searching = new search();
        const content = 'Admin';
        const outputText = 'Admin'
        searching.searchIn(content, outputText);
    });
    it('Checking the search functionality with valid search option for Time', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loging = new login();
        const userName = 'Admin';
        const Password = 'admin123';
        const expectedText = 'Dashboard';
        loging.executelogin(userName, Password, expectedText);
        const searching = new search();
        const content = 'Time';
        const outputText = 'Time'
        searching.searchIn(content, outputText);
    });
    it('Checking the search functionality with valid search option for PIM', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loging = new login();
        const userName = 'Admin';
        const Password = 'admin123';
        const expectedText = 'Dashboard';
        loging.executelogin(userName, Password, expectedText);
        const searching = new search();
        const content = 'PIM';
        const outputText = 'PIM'
        searching.searchIn(content, outputText);
    });
    it('Checking the search functionality with valid search option for My Info', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loging = new login();
        const userName = 'Admin';
        const Password = 'admin123';
        const expectedText = 'Dashboard';
        loging.executelogin(userName, Password, expectedText);
        const searching = new search();
        const content = 'My Info';
        const outputText = 'My Info'
        searching.searchIn(content, outputText);
    });
    it('Checking the search functionality with valid search option for Performance', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loging = new login();
        const userName = 'Admin';
        const Password = 'admin123';
        const expectedText = 'Dashboard';
        loging.executelogin(userName, Password, expectedText);
        const searching = new search();
        const content = 'Performance';
        const outputText = 'Performance'
        searching.searchIn(content, outputText);
    });
    it('Checking the search functionality with valid search option for Leave', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loging = new login();
        const userName = 'Admin';
        const Password = 'admin123';
        const expectedText = 'Dashboard';
        loging.executelogin(userName, Password, expectedText);
        const searching = new search();
        const content = 'Leave';
        const outputText = 'Leave'
        searching.searchIn(content, outputText);
    });
    it('Checking the search functionality with valid search option for Dashboard', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loging = new login();
        const userName = 'Admin';
        const Password = 'admin123';
        const expectedText = 'Dashboard';
        loging.executelogin(userName, Password, expectedText);
        const searching = new search();
        const content = 'Dashboard';
        const outputText = 'Dashboard'
        searching.searchIn(content, outputText);
    });
    it('Checking the search functionality with valid search option for Directory', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loging = new login();
        const userName = 'Admin';
        const Password = 'admin123';
        const expectedText = 'Dashboard';
        loging.executelogin(userName, Password, expectedText);
        const searching = new search();
        const content = 'Directory';
        const outputText = 'Directory'
        searching.searchIn(content, outputText);
    });
    it('Checking the search functionality with valid search option for Maintenance', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loging = new login();
        const userName = 'Admin';
        const Password = 'admin123';
        const expectedText = 'Dashboard';
        loging.executelogin(userName, Password, expectedText);
        const searching = new search();
        const content = 'Maintenance';
        const outputText = 'Maintenance'
        searching.searchIn(content, outputText);
    });
    it('Checking the search functionality with valid search option for Claim', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loging = new login();
        const userName = 'Admin';
        const Password = 'admin123';
        const expectedText = 'Dashboard';
        loging.executelogin(userName, Password, expectedText);
        const searching = new search();
        const content = 'Claim';
        const outputText = 'Claim'
        searching.searchIn(content, outputText);
    });
    it('Checking the search functionality with valid search option for Buzz', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loging = new login();
        const userName = 'Admin';
        const Password = 'admin123';
        const expectedText = 'Dashboard';
        loging.executelogin(userName, Password, expectedText);
        const searching = new search();
        const content = 'Buzz';
        const outputText = 'Buzz'
        searching.searchIn(content, outputText);
    });
    it('Checking the search functionality with valid search option for Recruitment', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loging = new login();
        const userName = 'Admin';
        const Password = 'admin123';
        const expectedText = 'Dashboard';
        loging.executelogin(userName, Password, expectedText);
        const searching = new search();
        const content = 'Recruitment';
        const outputText = 'Recruitment'
        searching.searchIn(content, outputText);
    });
    it('Checking thr search functionality with invalid search option like outside content', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loging = new login();
        const userName = 'Admin';
        const Password = 'admin123';
        const expectedText = 'Dashboard';
        loging.executelogin(userName, Password, expectedText);
        const searching = new search();
        const content = 'Chris';
        const outputText = 'Chris'
        searching.searchIn(content, outputText);
    });
    it('Checking thr search functionality with invalid search option like outside content', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loging = new login();
        const userName = 'Admin';
        const Password = 'admin123';
        const expectedText = 'Dashboard';
        loging.executelogin(userName, Password, expectedText);
        const searching = new search();
        const content = '879591798199099971';
        const outputText = '0'
        searching.searchIn(content, outputText);
    });
    it('Checking thr search functionality with invalid search option like outside content', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loging = new login();
        const userName = 'Admin';
        const Password = 'admin123';
        const expectedText = 'Dashboard';
        loging.executelogin(userName, Password, expectedText);
        const searching = new search();
        const content = 'gyanaprakash@gmail.com';
        const outputText = 'emailid'
        searching.searchIn(content, outputText);
    });
});