function batchTranslate() {
  var targetSpredsheet = SpreadsheetApp.openById("<Sheet ID>");
  var targetSheet = targetSpredsheet.getSheetByName("sheet1");

  for (var i = 1; i <= 10; i++) {
    var sourceDoc = targetSheet.getRange("A" + i).getValue();
    var destRange = targetSheet.getRange("B" + i);
    var translate = LanguageApp.translate(sourceDoc, "en", "ja");
    destRange.setValue(translate);
    Utilities.sleep(10);
  }
}
