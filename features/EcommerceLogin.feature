
Feature: E-commerce order flow

  Scenario: Login, purchase product and verify order
    Given login to the application using "venkatesh_e@gmail.com" and "Vision@1617"
    When search the product "ZARA COAT 3" and add to cart
    Then verify the product "ZARA COAT 3" in the cart
    When place the order and verify the email "venkatesh_e@gmail.com"
    Then get the orderID
    And verify the order in the order table