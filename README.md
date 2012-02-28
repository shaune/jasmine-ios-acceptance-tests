UI Automation + Jasmine template
================================
A super simple way to create iOS acceptance tests and generate JUnit output that can be read by Jenkins.

This example was only possible because of the great work surrounding the following github projects.
- jasmine
- jasmine-reporters
- jasmine-iphone

My version of the jasmine-uiautomation.js script was taken from pivotal/jasmine-iphone I just removed the jasmine dep.

Usage
./runTests.sh ci.js <absolute path to app>/build/Debug-iphonesimulator/UITest.app
