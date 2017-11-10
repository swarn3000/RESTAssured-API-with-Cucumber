Feature: User gets the weather by city name

  @First
  Scenario: User enter a city name with appid to check its weatherT
    Given Existing cityT with name "Auckland" and appid "ff1196b05786b07d2cb71c37f142adbe"
    When User gets the weather by city nameT
    Then The status code isT 200
    And Response has the following infoT
      | main.temp     | 282.15 |
      | main.pressure | 1025   |
