Feature: Test start button
  As a shop owner,
  I want to be able to reset a order status

@watch
  Scenario: I want to see my current coffee orders
    Given I am viewing the page at "/"
    And I can see that the element with the id "currentShopNameElem" is not ""
    When I click on the button with value "ON HOLD"
    Then I can see status change to "ON HOLD"
