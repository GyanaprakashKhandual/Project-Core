class recruitmentPanel {

    recruitmentTag = '//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[5]/a';
    checkTag = '//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]';

    visibility(heading){
        cy.xpath(this.recruitmentTag).click();
        cy.xpath(this.checkTag).should('have.text', heading);

    }
}


export default recruitmentPanel;