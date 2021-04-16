package page;

import org.openqa.selenium.By;

import CoreAppium.BasePage;


public class LoginPage extends BasePage {


	public void fazerLogin() {
		escrever(By.className("android.widget.EditText"), "matheus@mails.com");

		// click no botao
		click(By.xpath("//android.widget.TextView[@text='Acessar']"));
	}
}
