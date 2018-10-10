Feature: Calculate

  Scenario: Add two numbers
    Given the input "2+2"
    When the calculator is run
    Then the output should be 4

  Scenario: Subtract two numbers
    Given the input "9-4"
    When the calculator is run
    Then the output should be 5

  Scenario Outline: Multiply two numbers
    Given the numbers <input1> and <input2>
    When they are multiplied together
    Then the result should be <result>

    Examples:
      | input1 | input2 | result |
      | 2      | 5      | 10     |
      | 3      | 1      | 3      |
      | 6      | 12     | 92     |