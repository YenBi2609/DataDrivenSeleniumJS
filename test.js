const { Builder, By, Key } = require('selenium-webdriver');
var Excel = require('exceljs');

let driver = new Builder().forBrowser("chrome").build();

var inboundWorkbook = new Excel.Workbook();
inboundWorkbook.xlsx.readFile("C:/data.xlsx").then(async function () {
    var inboundWorksheet = inboundWorkbook.getWorksheet(1); //or name of the worksheet

      driver.get(inboundWorksheet.getCell('A2').value);

 
        await driver.findElement(By.name("q")).sendKeys(inboundWorksheet.getCell('B2').value,Key.RETURN);
 
        var title = await driver.getTitle();
        console.log('Title is:',title);
 
        await driver.quit();
});


   


