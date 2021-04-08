Feature: Home Page Sanity Check

  Scenario Outline: As a user, I want to visit testfire page

    Given I am an user
    When I write the login page of testfire in the browser
    Then I see the page loaded in the browser
