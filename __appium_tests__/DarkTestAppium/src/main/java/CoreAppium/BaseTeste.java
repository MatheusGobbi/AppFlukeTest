package CoreAppium;

import org.junit.After;
import org.junit.AfterClass;

public class BaseTeste {

	@AfterClass
	public static void finalizaClasse() {
		DriverFactory.killDriver();
	}

	@After
	public void tearDown() {

		DriverFactory.getDriver().resetApp();
	}
}
