package page;

import org.openqa.selenium.By;

import CoreAppium.BasePage;
import io.appium.java_client.MobileBy;

public class PrincipalPage extends BasePage {

	public void pacoteTeste() {

		click(By.xpath("//android.widget.Button//android.widget.TextView[@text='Pacote']"));

		scroll(0.85, 0.5);

		tap(930, 1400);
		tap(930, 1600);
		tap(930, 1400);

		click(By.xpath("//android.widget.TextView[@text='Comprar']"));
		
		//entrando no FAQ
		tap(980, 100);
		
		click(By.xpath("//android.widget.TextView[@text='1. O que é o Fluke App?']"));
		
		tap(980, 100);
		
		click(By.xpath("//android.widget.Button[@content-desc=\"TabNavigator, back\"]"));
		
	}

	public void historicoTeste() {

		click(By.xpath("//android.widget.Button//android.widget.TextView[@text='Histórico']"));

		click(By.xpath("//android.widget.TextView[@text='Selecione uma data']"));

		click(MobileBy.AccessibilityId("06 August 2020"));

		click(By.xpath("//android.widget.Button[@text='OK']"));

		click(By.xpath("//android.widget.TextView[@text='Selecione uma data']"));

		click(MobileBy.AccessibilityId("11 August 2020"));

		click(By.xpath("//android.widget.Button[@text='OK']"));
	}
	
	public void homeTeste() {
		swipe(0.9, 0.1);
	}
	
}
