Feature: Test weather by city name

  @Second
  Scenario: User enter a city name with appid to check its weather
    Given Existing city with name "Wellington" and appid "ff1196b05786b07d2cb71c37f142adbe"
    When User gets the weather by city name
    Then The status code is 200
    And Response has the following info
      | main.temp     | 290.15 |
      | main.pressure | 1017   |
      | main.humidity | 93    |

















