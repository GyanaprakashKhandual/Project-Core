import login from "../POM/LoginPage";
import buzzPanel from "../POM/Buzz";

describe('Orange HRM', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loging = new login();
        const userName = 'Admin';
        const Password = 'admin123';
        const expectedText = 'Dashboard';
        loging.executelogin(userName, Password, expectedText);
    });
    beforeEach(() => {
        const panel = new buzzPanel();
        const heading = 'Buzz';
        panel.visibility(heading);
    });
    it('Check the functionality of the Buzz tag / button', () => {
        const panel = new buzzPanel();
        const heading = 'Buzz';
        panel.visibility(heading);
    });
    it('Check the posting functionality with the valid input', () => {
        const panel = new buzzPanel();
        const post = 'I am Chris';
        const postContent = "I am Chris";
        panel.posting(post, postContent);
    });
    // First bug on the Orange HRM website
    it('Check the functionality of the like button', () => {
        const panel = new buzzPanel();
        const likes = '1 Like';
        panel.like(likes);
    });
    it('Check the comment functionality in the posts', () => {
        const panel = new buzzPanel();
        const comments = 'You are Handsome {enter}';
        panel.comment(comments);
    });
});
