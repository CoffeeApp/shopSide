Feature: Test start button
  As a shop owner,
  I want to let my customer know when I have started their coffee order

@watch
  Scenario: I want to see my current coffee orders
    Given I am viewing the page at "/"
    And I can see that the element with the id "currentShopNameElem" is not ""
    When I click on the button with value "BEING PROCESSED"
    Then I can see status change to "BEING PROCESSED"
