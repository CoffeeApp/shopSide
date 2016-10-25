Feature: Test start button
  As a shop owner,
  I want to let my customer know when I their coffee order is ready

@watch
  Scenario: I want to see my current coffee orders
    Given I am viewing the page at "/"
    And I can see that the element with the id "currentShopNameElem" is not ""
    When I click on the button with value "READY"
    Then I can see status change to "READY"
