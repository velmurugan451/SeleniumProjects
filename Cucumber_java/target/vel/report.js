$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "LogIn Action Test",
  "description": "Description: This feature will test a LogIn and LogOut functionality",
  "id": "login-action-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action-test;successful-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"\u003cUserName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "login-action-test;successful-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 10,
      "id": "login-action-test;successful-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "vel@gmail.com",
        "vel222"
      ],
      "line": 11,
      "id": "login-action-test;successful-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "vel@gmail.com",
        "vel222"
      ],
      "line": 12,
      "id": "login-action-test;successful-login-with-valid-credentials;;3"
    },
    {
      "cells": [
        "vel@gmail.com",
        "vel222"
      ],
      "line": 13,
      "id": "login-action-test;successful-login-with-valid-credentials;;4"
    },
    {
      "cells": [
        "vel@gmail.com",
        "vel222"
      ],
      "line": 14,
      "id": "login-action-test;successful-login-with-valid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action-test;successful-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"vel@gmail.com\" and \"vel222\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 9438630984,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vel@gmail.com",
      "offset": 13
    },
    {
      "val": "vel222",
      "offset": 33
    }
  ],
  "location": "Login.user_enters_UserName_and_Password(String,String)"
});
formatter.result({
  "duration": 270423146,
  "status": "passed"
});
formatter.match({
  "location": "Login.message_displayed_Login_Successfully()"
});
formatter.result({
  "duration": 2147221811,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action-test;successful-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"vel@gmail.com\" and \"vel222\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 8016894972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vel@gmail.com",
      "offset": 13
    },
    {
      "val": "vel222",
      "offset": 33
    }
  ],
  "location": "Login.user_enters_UserName_and_Password(String,String)"
});
formatter.result({
  "duration": 116730713,
  "status": "passed"
});
formatter.match({
  "location": "Login.message_displayed_Login_Successfully()"
});
formatter.result({
  "duration": 1563092234,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action-test;successful-login-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"vel@gmail.com\" and \"vel222\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 7338207804,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vel@gmail.com",
      "offset": 13
    },
    {
      "val": "vel222",
      "offset": 33
    }
  ],
  "location": "Login.user_enters_UserName_and_Password(String,String)"
});
formatter.result({
  "duration": 128880724,
  "status": "passed"
});
formatter.match({
  "location": "Login.message_displayed_Login_Successfully()"
});
formatter.result({
  "duration": 1484497629,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action-test;successful-login-with-valid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"vel@gmail.com\" and \"vel222\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 6942382137,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vel@gmail.com",
      "offset": 13
    },
    {
      "val": "vel222",
      "offset": 33
    }
  ],
  "location": "Login.user_enters_UserName_and_Password(String,String)"
});
formatter.result({
  "duration": 121180488,
  "status": "passed"
});
formatter.match({
  "location": "Login.message_displayed_Login_Successfully()"
});
formatter.result({
  "duration": 1476614124,
  "status": "passed"
});
});