class login {
    UsernameText = '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input';
    PasswordText = '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input';
    SubmitBtn = '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button';
    verification = '//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6';

    executelogin(userName, Password, expectedText){
        cy.xpath(this.UsernameText).type(userName);
        cy.xpath(this.PasswordText).type(Password);
        cy.xpath(this.SubmitBtn).click();
        cy.xpath(this.verification).should('have.text',expectedText);
    }
}
export default login;