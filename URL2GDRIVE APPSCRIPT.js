//CODED BY LEMONG CHINGSHAK
function doPost(e) {

    var result = UrlFetchApp.fetch(e.parameter.URL);
    var rc = result.getResponseCode();
    if(rc == 200) {
    var fileBlob = result.getBlob();
    var folder = DriveApp.getFolderById(e.parameter.FID);
    if(folder != null) {
      var fileID = folder.createFile(fileBlob).getId();
      return ContentService.createTextOutput(fileID);
//DON'T CHANGE ANY PARAMETER , ELSE IT WON'T WORK 
    }
   } 
}