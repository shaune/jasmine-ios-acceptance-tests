// Script copied from https://github.com/mczenko/UIAutomation-jasmine-iphone.git
// mczenko
//
// UIAutomation does not define these functions.  Define them as no-ops here
// because Jasmine tries to manipulate them.
function setTimeout() {}
function clearTimeout() {}
function setInterval() {}
function clearInterval() {}

/* The new jasmine version uses exports if the type of window variable is 
undefined - I do not know it for sure but it seems to me that UIAutomation does not like exports at all. For this reasone I am declaring window here so 
that it is no longer undefined
*/
var window = false;
