Feature: test
  Scenario Outline: element selector

    Given I choose <tagname> tag
    Then I can get <text> of that tag

    Examples:
      | tagname  | text                    | 
      | h2       | Available Examples      |
      | h1       | Welcome to the-internet | 
