describe("BasicApp - First Screen", function() {
 
   it("flick the switch on and off", function() {
      UIATarget.localTarget().frontMostApp().mainWindow().switches()["switch"].setValue(true);
   });  
});