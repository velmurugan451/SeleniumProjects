package org.facebook.login;

import org.facebook.java.Base;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class FacebookLogin extends Base {
	WebDriver driver;
	@FindBy(id = "email")
	private WebElement txtName;
	@FindBy(id = "pass")
	private WebElement txtPassword;

	@FindBy(id = "u_0_q")
	private WebElement btnCreate;

	public FacebookLogin() {
		PageFactory.initElements(Base.getDriver(), this);

	}

	public String getTxtName() {
		System.out.println(txtName.getAttribute("value"));
		return txtName.getAttribute("value");
	}

	public void setTxtName(String name) {
		txtName.clear();
		txtName.sendKeys(name);
	}

	public String getTxtPassword() {
		return txtPassword.getAttribute("value");
	}

	public void setTxtPassword(String pass) {
		txtPassword.clear();
		txtPassword.sendKeys(pass);
	}

	public WebElement getBtnCreate() {
		return btnCreate;
	}
}
