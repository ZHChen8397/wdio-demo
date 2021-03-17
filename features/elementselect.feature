Feature: test
  Scenario: element selector
    Given I select h1 tag
    Then I can get text of h1

  Scenario: element selector2
    Given I select h2 tag
    Then I can get text of h2

#   Scenario Outline: element selector

#     Given I choose <tagname> tag
#     Then I can get <text> of that tag

#     Examples:
#       | tagname  | text                    | 
#       | h2       | Available Examples      |
#       | h1       | Welcome to the-internet | 
