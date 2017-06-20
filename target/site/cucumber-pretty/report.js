$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/Weather.feature");
formatter.feature({
  "line": 1,
  "name": "User gets the weather by city name",
  "description": "",
  "id": "user-gets-the-weather-by-city-name",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "I enter city name and get the weather",
  "description": "",
  "id": "user-gets-the-weather-by-city-name;i-enter-city-name-and-get-the-weather",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I hit the service endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I get the response",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I get the status code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I get following info in the response",
  "rows": [
    {
      "cells": [
        "main.temp",
        "282.15"
      ],
      "line": 10
    },
    {
      "cells": [
        "main.pressure",
        "1030"
      ],
      "line": 11
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "WeatherSteps.i_hit_the_service_endpoint()"
});
formatter.result({
  "duration": 3476842001,
  "status": "passed"
});
formatter.match({
  "location": "WeatherSteps.i_get_the_response()"
});
formatter.result({
  "duration": 103350895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 22
    }
  ],
  "location": "WeatherSteps.i_get_the_status_code(int)"
});
formatter.result({
  "duration": 4723357,
  "status": "passed"
});
formatter.match({
  "location": "WeatherSteps.i_get_following_info_in_the_response(DataTable)"
});
formatter.result({
  "duration": 3108876,
  "status": "passed"
});
});