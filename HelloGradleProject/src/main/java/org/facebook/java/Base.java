package org.facebook.java;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Base {
	private static WebDriver driver;

	public Base() {
		if (driver == null) {
			driver = new FirefoxDriver();
			driver.manage().window().maximize();
			openUrl();
		}
	}

	public static WebDriver getDriver() {
		return driver;
	}

	public void openUrl() {
		driver.get("https://www.facebook.com/");

	}

}
