Feature: Login and Logout

  Scenario Outline: As a user, I can login and logout into testfire page

    Given I am on the login page
    When I login with <username> and <password>
    And I verify that 2 accounts are visible under Account Details
    |800000 Corporate|
    |800001 Checking|
    And I do logout
    Then I come back to home page

    Examples:
      | username | password |
      | admin    | admin    |
