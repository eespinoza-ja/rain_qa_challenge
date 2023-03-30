export class MainScreen {

    navigateToHome() {
        cy
            .visit({
                method: "GET",
                url: "https://rain.us/blog",
                failOnStatusCode: false
            })
            .wait(3000);
    }

    clickJoinLink(){
        cy
            .get(".hero-prime--button")
            .invoke('attr', 'target', '_self')
            .click();
    }

    clickEmployersLink(){
        cy
            .get(".nav-menu--right > .employers-button")
            .invoke('attr', 'target', '_self')
            .click();
    }

    clickFirstArticle(){
        cy
            .get(":nth-child(1) > .blog-card > .blog-link > .description-block > .blog-description > .blog-title")
            .click();
    }

    scrollArticlesSection(){
        cy
            .get(".main-collection--list")
            .scrollIntoView();
    }

    validateWebPage(expectedWebPage){
        cy  
            .wait(2000)
            .url()
            .should('eq', expectedWebPage);
   }

}