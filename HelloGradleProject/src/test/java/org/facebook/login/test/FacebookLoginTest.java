package org.facebook.login.test;

import org.facebook.java.Base;
import org.facebook.login.FacebookLogin;
import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.BeforeClass;
import org.junit.Test;

public class FacebookLoginTest {
	static FacebookLogin fb;

	@BeforeClass
	public static void setUp() {
		fb = new FacebookLogin();
	}

	@Test
	public void verifyTxtName() {
		fb.setTxtName("vel");
		Assert.assertEquals("vel", fb.getTxtName());
	}

	@Test
	public void verifyTxtPassword() {
		fb.setTxtPassword("123");
		Assert.assertEquals("123", fb.getTxtPassword());
	}

	@Test
	public void verifyBtnCreate() {
		Assert.assertTrue(fb.getBtnCreate().isDisplayed());
	}

	@AfterClass
	public static void closeApp() {
		Base.getDriver().quit();
	}

}
