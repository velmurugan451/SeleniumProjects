Feature: LogIn Action Test
  Description: This feature will test a LogIn and LogOut functionality

  Scenario Outline: Successful Login with Valid Credentials
    Given User is on Home Page
    When User enters "<UserName>" and "<Password>"
    Then Message displayed Login Successfully

    Examples: 
      | UserName      | Password |
      | vel@gmail.com | vel222   |
      | vel@gmail.com | vel222   |
      | vel@gmail.com | vel222   |
      | vel@gmail.com | vel222   |

      