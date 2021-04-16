package page;

import org.openqa.selenium.By;

import CoreAppium.BasePage;

public class DicasPage extends BasePage {
	
	public void passarDicas() {
			// passando pelas dicas
			click(By.xpath("//android.widget.TextView[@text='Próximo']"));
			click(By.xpath("//android.widget.TextView[@text='Próximo']"));
			click(By.xpath("//android.widget.TextView[@text='Próximo']"));
			click(By.xpath("//android.widget.TextView[@text='Próximo']"));
			click(By.xpath("//android.widget.TextView[@text='Acessar']"));
	}
}
