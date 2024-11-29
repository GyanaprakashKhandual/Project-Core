class search {
    searchText = '//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/div/div/input';
    searchEq = '//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li/a/span';
    searchIn(content, outputText){
        cy.xpath(this.searchText).type(content);
        cy.xpath(this.searchEq).should('have.text',outputText)
    }
}
export default search;