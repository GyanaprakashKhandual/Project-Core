class buzzPanel {

    buzzTag = '//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[12]/a';
    checkTag = '//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]';

    postText = '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div/div[1]/div[1]/div[2]/form/div/textarea';
    postBtn = '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div/div[1]/div[1]/div[2]/form/div/div/button';
    checkPost = '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div/div[3]/div[1]/div/div[2]/div/p[1]';

    heartBtn = '#heart';
    likeCount = '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div/div[3]/div[2]/div/div[3]/div[2]/div[1]/p';

    commentBtn = '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div/div[3]/div[1]/div/div[3]/div[1]/button[1]';
    writeComment = '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div/div[3]/div[2]/div/div[4]/div/form/div/div[2]/input';

    visibility(heading){
        cy.xpath(this.buzzTag).click();
        cy.xpath(this.checkTag).should('have.text', heading);
    }
    posting(post, postContent){
        cy.xpath(this.postText).type(postContent);
        cy.xpath(this.postBtn).click();
        cy.xpath(this.checkPost).should('have.text', post);
    }
    like(likes){
        cy.get(this.heartBtn).click();
        cy.xpath(this.likeCount).should('have.text', likes)
    }
    comment(comments){
        cy.xpath(this.commentBtn).click();
        cy.xpath(this.writeComment).type(comments);
    }
    
}

export default buzzPanel;
