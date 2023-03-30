Feature: Main screen

Scenario: Access to Join our team option
Given I am on the Main screen
When I click on the link "Join our team"
Then I go to the web page "https://boards.greenhouse.io/rainapp"

Scenario: Access to Employers Access option
Given I am on the Main screen
When I click on the link "Employers Access"
Then I go to the link "https://employer.rain.us/#/login"

Scenario: Access to the first article
Given I am on the Main screen
When I scroll down to the Latest Articles section
And I click on the first article link 
Then I go to the url "https://www.rainapp.com/us-blog/forbes-rain-raises-116m-hourly-workers-pay-cycles"