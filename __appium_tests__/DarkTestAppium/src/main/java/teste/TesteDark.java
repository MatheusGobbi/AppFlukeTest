package teste;

import java.net.MalformedURLException;
import java.util.concurrent.TimeUnit;

import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.support.ui.Sleeper;

import CoreAppium.BaseTeste;
import CoreAppium.DriverFactory;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import page.DicasPage;
import page.LoginPage;
import page.PrincipalPage;

public class TesteDark extends BaseTeste {
	
	private AndroidDriver<MobileElement> driver;
	
	private LoginPage login = new LoginPage();
	
	private DicasPage dicas = new DicasPage();
	
	private PrincipalPage principal = new PrincipalPage();
	

	//inicializando Appium buscando o getDriver() da classe DriverFactory
	@Before
	public void inicializarAppium() throws MalformedURLException {
		driver = DriverFactory.getDriver();
		
		login.fazerLogin();
	}
	
	
	@Test
	public void devePassarDicas() throws MalformedURLException, InterruptedException {
	
		dicas.passarDicas();

		principal.homeTeste();
		
		principal.pacoteTeste();
	    
		principal.historicoTeste();
		
		TimeUnit.SECONDS.sleep(5);
		
		
	}

}
