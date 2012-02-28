describe("BasicApp - First Screen", function() {
 	var target = UIATarget.localTarget();
 	var mainWindow = target.frontMostApp().mainWindow();

	it("should tap the Click me button", function() {
		var clickMeButton = mainWindow.buttons()["Click me"];
		clickMeButton.tap();
	});  

	it("should flick the switch on and off", function() {
		var basicSwitch = mainWindow.switches()[0];
		expect(basicSwitch.value()).toEqual(0);
		basicSwitch.setValue(1);
		expect(basicSwitch.value()).toEqual(1);
	}); 

	it("should change the slider value to be 80 out of 100", function() {
		var basicSlider = mainWindow.sliders()[0];
		basicSlider.dragToValue(0.8);
	}); 

	it("should be able to switch to the second screen", function() {
		var secondButton = mainWindow.tabBar().buttons()["Second"];
		secondButton.tap();
		mainWindow.logElementTree();
		expect(mainWindow.staticTexts()["Second View"].isVisible()).toBeTruthy();
		expect(secondButton.value()).toEqual(1);
	}); 
});