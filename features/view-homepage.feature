Feature: View shopSide homepage
  As a shop owner,
  I want to see my coffee orders for my shop

@watch
  Scenario: I want to see my current coffee orders
    Given I am viewing the page at "/"
    Then I can see that the element with the id "currentShopNameElem" is not ""
    And I can see the element with the id "shopImageElem"
    And I can see that the element with the id "totalOrdersElem" is not ""
