class PimPanel{

    pimTag = '//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a/span';
    checkTag = '//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6';

    visibilityPIM(heading){
        cy.xpath(this.pimTag).click();
        cy.xpath(this.checkTag).should('have.text', heading);
    }
}

export default PimPanel;