#! /bin/sh

TRACETEMPLATE="/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/Instruments/PlugIns/AutomationInstrument.bundle/Contents/Resources/Automation.tracetemplate"
BASE_TEST_SCRIPT=$1
APP_LOCATION=$2
DEVICE_ID=$3

if [ ! $# -gt 1 ]; then
	echo "You must specify the app location and the test file."
	echo "\t eg. ./build.sh suite.js <xcodeproject directory>/build/Debug-iphonesimulator/myapp.app"
	exit -1
fi

# Create junit reporting directory
if [ ! -d "test-reports" ]; then
  mkdir test-reports
fi

# Kick off the instruments build
instruments \
-w $DEVICE_ID \
-t $TRACETEMPLATE \
$APP_LOCATION \
-e UIASCRIPT $BASE_TEST_SCRIPT \
-e UIARESULTSPATH /var/tmp | grep "<"  > test-reports/test-results.xml

# cleanup the tracefiles produced from instruments
rm -rf *.trace

# fail script if any failures have been generated
if [ `grep "<failure>" test-reports/test-results.xml | wc -l` -gt 0 ]; then
        echo 'Build Failed'
        exit -1
else
        echo 'Build Passed'
        exit 0
fi


