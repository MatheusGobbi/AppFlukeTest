package CoreAppium;

import static CoreAppium.DriverFactory.getDriver;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;

import io.appium.java_client.TouchAction;
import io.appium.java_client.touch.offset.PointOption;

public class BasePage {

	public void  escrever(By by, String texto) {
		getDriver().findElement(by).sendKeys(texto);
	}
	
	public void click(By by) {
		getDriver().findElement(by).click();
	}
	
	public void tap(int x, int y) {
		new TouchAction(getDriver()).tap(PointOption.point(x, y)).perform();
	}
	
	public void scroll(double inicio, double fim) {
		Dimension size = getDriver().manage().window().getSize();
		
		int x = size.width / 2;
		
		int start_y = (int) (size.height * inicio);
		int end_y = (int) (size.height * fim);
		
		new TouchAction(getDriver())
			.press(PointOption.point(x, start_y))
			.moveTo(PointOption.point(x, end_y))
			.release()
			.perform();
		
		}
	
	public void swipe(double inicio, double fim) {
		Dimension size = getDriver().manage().window().getSize();
		
		int y = size.height / 2;
		
		int start_x = (int) (size.width * inicio);
		int end_x = (int) (size.width * fim);
		
		new TouchAction(getDriver())
		.press(PointOption.point(start_x, y))
		.moveTo(PointOption.point(end_x, y))
		.release()
		.perform();
		
	}
}
