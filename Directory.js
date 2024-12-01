class directoryPanel {

    directoryTag = '';
    checkTag = '';

    visibility(heading){
        cy.xpath(this.directoryTag).click();
        cy.xpath(this.checkTag).should('have.text', heading);

    }
}

export default directoryPanel;