---
pagename: HAR files web requests and web traffic
categoryName: Troubleshooting
subCategoryName: ''
indicator: chat
subtitle: How to generate HAR Files and analyze web requests for troubleshooting
level3: ''
permalink: troubleshooting-har-files-web-requests-and-web-traffic.html
isTutorial: false
isNew: false
date: 2019-04-02 11:01:50 +0000

---
When troubleshooting complex issues, it's sometimes necessary for our support agents to get some additional information from you in order to troubleshoot the issue further. For example, when we receive a report of performance trouble when using LiveEngage there are a lot of different factors that may contribute to the problem. To narrow down the cause of the performance problem, we need more data.

Google Chrome, in particular, makes it relatively easy to capture all the data we need using what's called a HAR file. For this reason, we may ask you to generate a HAR file to help troubleshoot the trouble you're experiencing. Please see the following directions for how to generate a HAR file.

Below are instructions for generating a HAR file from different browsers.

## Generating a HAR File from Chrome

Chrome can generate HAR files using the Chrome Developer Tools. To learn more about Chrome's developer tools, see[ Chrome DevTools Overview](https://developer.chrome.com/devtools).

1. Open Chrome and enable the Developer Tools from Tools-->Developer Tools.
2. Select the Network tab.
3. Check “Preserve log” and “Disable cache”
4. Load the page with the issue.
5. Please capture a full page load so we can see the requests made prior to the problem we're analyzing.
6. Complete the steps that trigger or demonstrate your issue.
7. Right click the Development Tool on one of the requests on the left and select “Save all as HAR with content”.
8. Check the HAR file:

* Open another chrome instance
* Enable its Developer Tools
* Select the Network tab
* Drag and drop the HAR file to check that Chrome has saved it correctly

  9\. Zip and send the file to the Support case.

## Generating a HAR File from Firefox

Firefox can generate HAR files using the Chrome Developer Tools. To learn more about Firefox's developer tools, see[ Firefox DevTools Overview](https://developer.mozilla.org/en-US/docs/Tools).

1. Open Firefox and enable the Developer Tools from Menu-->Web Developer-->Toggle Tools.
2. Select the Network tab.
3. Check “Persist Logs” and “Disable cache”
4. Load the page with the issue.
5. Please capture a full page load so we can see the requests made prior to the problem we're analyzing.
6. Complete the steps that trigger or demonstrate your issue.
7. Right click the Development Tool on one of the requests on the left and select “Save all as HAR with content”.
8. Check the HAR file:

* Open another Firefox instance
* Enable its Developer Tools
* Select the Network tab
* Drag and drop the HAR file to check that Chrome has saved it correctly

  9\. Zip and send the file to the Support case.

## Generating a NetXML File from Internet Explorer

Internet Explorer supports the NetXML file format which is similar to HAR.

## Network Issues

Microsoft's[ Using Windows Internet Explorer Developer Tools Network Capture](http://msdn.microsoft.com/en-us/library/gg130952(v=vs.85).aspx) KB can be used to identify how to diagnose network issues.

## Providing Information to Support

1. Open IE and enable the Developer Tools by pressing F12 or from the Cog menu icon
2. Select the Network tab.
3. To persist the logs through page refreshes make sure this button is set to OFF
4. Press the green triangle to start recording network traffic
5. Load the page with the issue.
6. Please capture a full page load so we can see the requests made prior to the problem we're analyzing.
7. Complete the steps that trigger or demonstrate your issue.
8. Click on the floppy disk icon to save
9. Zip and send the file to the Support case.

## Generating a HAR File from Safari

Safari comes with its own [Safari Web Development Tools](https://support.apple.com/en-il/guide/safari-developer/dev073038698/mac).

## Recording web traffic with Fiddler

{: .notice}  
Fiddler is not part of LivePerson's product set. Although we recommend using it, LivePerson does not provide support for Fiddler.

### Instructions:

The two main steps required to record web traffic with Fiddler are:

* Setting Up Fiddler
* Recording a Session

### How to set up fiddler

Before recording a session, make sure the HTTPS option is checked as follows:

1\. Download Fiddler (free software) from [Download Fiddler Web Debugging Tool for Free by Telerik.](https://www.telerik.com/download/fiddler)

2\. Open Fiddler and click Tools  -> Fiddler Options.

 3. Click the HTTPS tab.

 4. Select the options Capture HTTPS CONNECTS and Decrypt HTTPS traffic; then click OK to complete the setup.

 5. On the WARNING: Sharp Edges window that opens, click Yes to trust the Fiddler Root Certificate.

 6. On the Security Warning window, click Yes to install the Fiddler Root Certificate.

### Recording a session

1\. Click File -> Capture Traffic to begin capturing traffic.

2\. Once you've finished recording, click File -> Save -> All Sessions.

 3. If a Privacy Notice displays, click OK to approve. (A notice may display, the first time you save a session.)

 4. Enter a name for the recording file and click Save. The session is saved to the file you specified.
