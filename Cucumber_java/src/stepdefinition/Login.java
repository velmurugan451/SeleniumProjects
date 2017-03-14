package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login {
	WebDriver driver;

	@Given("^User is on Home Page$")
	public void user_is_on_Home_Page() throws Throwable {
		driver = new FirefoxDriver();
		driver.get("https://www.facebook.com/");
	}

	@When("^User enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_UserName_and_Password(String s1, String s2)
			throws Throwable {
		driver.findElement(By.xpath(("//*[@id='email']"))).sendKeys(s1);
		driver.findElement(By.xpath("//*[@id='pass']")).sendKeys(s2);
	}

	@Then("^Message displayed Login Successfully$")
	public void message_displayed_Login_Successfully() throws Throwable {
		driver.findElement(By.xpath("//*[@id='u_0_l']")).click();
		driver.quit();
	}

}
