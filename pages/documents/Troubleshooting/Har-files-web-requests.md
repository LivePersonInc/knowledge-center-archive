---
pagename: HAR files and Web requests
categoryName: Troubleshooting
subCategoryName: ''
indicator: chat
subtitle: How to generate HAR Files and analyze web requests for troubleshooting
level3: ''
permalink: Troubleshooting-har-files-and-web-requests.html
isTutorial: false
isNew: false
date: 2019-04-02 14:01:50 +0300
published: false

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
   1. Open another Firefox instance
   2. Enable its Developer Tools
   3. Select the Network tab
   4. Drag and drop the HAR file to check that Chrome has saved it correctly
9. Zip and send the file to the Support case.

**Generating a NetXML File from Internet Explorer**

Internet Explorer supports the NetXML file format which is similar to HAR.

**Network Issues**

Microsoft's[ Using Windows Internet Explorer Developer Tools Network Capture](http://msdn.microsoft.com/en-us/library/gg130952(v=vs.85).aspx) KB can be used to identify how to diagnose network issues.

**Providing Information to Support**

1. Open IE and enable the Developer Tools by pressing F12 or from the Cog menu icon
2. Select the Network tab.
3. **To persist the logs through page refreshes make sure this button is set to OFF:**
4. **![](https://lh5.googleusercontent.com/a0zjahF8ZL-OR2lHZm1gFT2RAK42dg2ZiyHIlR-dTFiRxOdfhG7rBQDEgHhKxSY4DucWPYdHpRmgebfLhKKMIb6rYT8RScV-AFHpr5-KPAJHK5ATC9JmFqvFCvtdONSxQctun5ui =624x401)**

 5. Press the green triangle to start recording network traffic
 6. Load the page with the issue.
 7. Please capture a full page load so we can see the requests made prior to the problem we're analyzing.
 8. Complete the steps that trigger or demonstrate your issue.
 9. Click on the floppy disk icon to save
10. Zip and send the file to the Support case.

**Generating a HAR File from Safari**

Safari comes with its own[ Safari Web Development Tools](https://developer.apple.com/technologies/safari/developer-tools.html) .

**Network Issues**

Take a look through the[ Safari Web Inspector Guide](https://developer.apple.com/library/IOS/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Instruments/Instruments.html#//apple_ref/doc/uid/TP40007874-CH4-SW1) documentation and follow the details there to look for any network errors.