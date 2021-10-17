var path = require('path');
var fs = require('fs');
var Excel = require('exceljs');
// fs.readdir(path, function(fileNames) {
//     for(var i = 0; i < fileNames.length; i++) {
//       var fileName = fileNames[i];
//       if(path.extname(fileName) === ".xlsx") {
//         fs.readfile(path.join(myPath,fileName), function(err,data) {
//           console.log(data);
//         });
//         break;
//       }
//     }
//   }
// );
var homedir = "C://Users/Admin/Downloads";

var files = fs.readdirSync(homedir);
var inboundWorkbook = new Excel.Workbook();
for (var i in files) {
  if (path.extname(files[i]) === ".xlsx") {
    //do something
    console.log(files[i]);
    console.log(i);
     inboundWorkbook.xlsx.readFile('C://Users/Admin/Downloads/' + files[i] + '').then(async function () {
      var inboundWorksheet = inboundWorkbook.getWorksheet(1); //or name of the worksheet
      var row = inboundWorksheet.actualRowCount;
      console.log(row);
    });
  }
}
