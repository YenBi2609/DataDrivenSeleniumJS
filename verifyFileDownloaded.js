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
var dir = "C://Users/Admin/Downloads";
const { join } = require('path');

var files = fs.readdirSync(dir)
  .filter((file) => fs.lstatSync(join(dir, file)).isFile())
  .map((file) => ({ file, mtime: fs.lstatSync(join(dir, file)).mtime }))
  .sort((a, b) => b.mtime.getTime() - a.mtime.getTime());
  for( var i in files){
    var a = (/[.]/.exec(files[i].file)) ? /[^.]+$/.exec(files[i].file) : undefined
    if(a[0]=='xlsx'){
    console.log(a.input);
    }
  }
// var inboundWorkbook = new Excel.Workbook();
// for (var i in files) {
//   if (path.extname(files[i]) === ".xlsx") {
//     console.log(files[i]);
//      console.log(i);
//     //  stats = fs.statSync(resolve(join('C://Users/Admin/Downloads', files[i])));
//     //  sort((a, b) => b.mtime.getTime() - a.mtime.getTime());
//     //  console.log(stats.mtime.getTime());
//     //  console.log(stats.ctime);
//     //  inboundWorkbook.xlsx.readFile('C://Users/Admin/Downloads/' + files[i] + '').then(async function () {
//     //   var inboundWorksheet = inboundWorkbook.getWorksheet(1); //or name of the worksheet
//     //   var row = inboundWorksheet.actualRowCount;
//     //   console.log(row);
//     // });
//   }
// }

