import { MainScreen } from "../../page-objects/main-screen";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const mainScreen = new MainScreen()

beforeEach(() => {
    cy.viewport(1280, 720)
})

//Access to Join our team option
Given('I am on the Main screen', () => {
    mainScreen.navigateToHome();
})

When('I click on the link "Join our team"', () => {
    mainScreen.clickJoinLink();
})

Then('I go to the web page {string}', (expectedWebPage) => {
    mainScreen.validateWebPage(expectedWebPage)
})

//Access to Employers Access option
Given('I am on the Main screen', () => {
    mainScreen.navigateToHome();
})

When('I click on the link "Employers Access"', () => {
    mainScreen.clickEmployersLink();
})

Then('I go to the link {string}', (expectedWebPage) => {
    mainScreen.validateWebPage(expectedWebPage)
})

//Access to the first article
Given('I am on the Main screen', () => {
    mainScreen.navigateToHome();
})

When('I scroll down to the Latest Articles section', () => {
    mainScreen.scrollArticlesSection();
})

When('I click on the first article link', () => {
    mainScreen.clickFirstArticle();
})

Then('I go to the url {string}', (expectedWebPage) => {
    mainScreen.validateWebPage(expectedWebPage)
})