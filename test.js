const { Builder, By, Key } = require('selenium-webdriver');
var chrome = require("selenium-webdriver/chrome");

var Excel = require('exceljs');
const video = require('wdio-video-reporter');
   
var chromeOptions = new chrome.Options();
chromeOptions.excludeSwitches("enable-automation");
chromeOptions.addArguments("start-maximized");
chromeOptions.addArguments('log-level=3');

driver = new Builder()
             .forBrowser("chrome")
             .setChromeOptions(chromeOptions)
             .build();

var inboundWorkbook = new Excel.Workbook();
inboundWorkbook.xlsx.readFile("./data.xlsx").then(async function () {
    var inboundWorksheet = inboundWorkbook.getWorksheet(1); //or name of the worksheet
    //  a = inboundWorksheet.getRow(2).getCell('B').value;
    //  console.log(a);
    //  var row = inboundWorksheet.actualRowCount;
    //  console.log(row);
    //  var column = inboundWorksheet.actualRowCount;
    //  console.log(column);
    //  b = inboundWorksheet.getColumn(1).values;
    //  console.log(b);

     driver.get(inboundWorksheet.getCell('A2').value);

 
       await driver.findElement(By.name("q")).sendKeys(inboundWorksheet.getCell('B2').value,Key.RETURN);
 
       var title = await driver.getTitle();
       console.log('Title is:',title);
    //    driver.takeScreenshot().then(
    //     function(image) {
    //         require('fs').writeFileSync('captured_image_3.png', image, 'base64');
    //     }
    // );
    var a = await driver.executeScript("return document.body.scrollHeight;");
    console.log(a);
    await driver.executeScript("window.scrollBy(0,250)", "");

    await driver.sleep(10000);
    await driver.quit();
});


   


