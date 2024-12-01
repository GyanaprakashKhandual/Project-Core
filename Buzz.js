class buzzPanel {

    buzzTag = '//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[12]/a';
    checkTag = '//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]';

    visibility(heading){
        cy.xpath(this.buzzTag).click();
        cy.xpath(this.checkTag).should('have.text', heading);
    }
}

export default buzzPanel;