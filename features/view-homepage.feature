Feature: View shopSide homepage
  As a shop owner,
  I want to see my coffee orders

@watch
  Scenario: I want to see my current coffee orders
    Given I am viewing the page at "/"
    Then I can see the cafe name "Fidel's Cafe"
