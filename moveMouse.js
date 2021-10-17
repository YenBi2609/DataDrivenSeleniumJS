const { Builder, By, Key, Button, Origin } = require('selenium-webdriver');
var chrome = require("selenium-webdriver/chrome");

   
var chromeOptions = new chrome.Options();
chromeOptions.excludeSwitches("enable-automation");
chromeOptions.addArguments("start-maximized");
chromeOptions.addArguments('log-level=3');

var driver = new Builder()
             .forBrowser("chrome")
             .setChromeOptions(chromeOptions)
             .build();
debugger
driver.get('http://www.google.com')
.then(() => driver.findElement(By.className('gb_3 gb_4 gb_3d gb_3c')).then(async elem => {
             await driver.actions().move({origin:elem}).contextClick().perform();
         //    await driver.actions().contextClick(elem).perform();
             await driver.sleep(5000);
            // elem.click();

}));