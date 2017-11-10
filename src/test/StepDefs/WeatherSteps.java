import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.mapper.ObjectMapper;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import java.util.List;
import java.util.Map;

import static io.restassured.RestAssured.given;
import static org.hamcrest.core.IsEqual.equalTo;

/**
 * Created by Swarn on 6/20/2017.
 */
public class WeatherSteps {
    private Response response;
    private RequestSpecification request;


    private String URL = "http://api.openweathermap.org/data/2.5/weather";
    //private int statuscode;

    @Given("^Existing cityT with name \"([^\"]*)\" and appid \"([^\"]*)\"$")
    public void existingCityTWithNameAndAppid(String arg0, String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @When("^User gets the weather by city nameT$")
    public void userGetsTheWeatherByCityNameT() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Then("^The status code isT (\\d+)$")
    public void theStatusCodeIsT(int arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^Response has the following infoT$")
    public void responseHasTheFollowingInfoT() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
}




