Feature: Login into the application

  Scenario: Successfull login
    Given Ashimu has an active account
    When he sends his valid credentials
    Then he should have access to manage his account