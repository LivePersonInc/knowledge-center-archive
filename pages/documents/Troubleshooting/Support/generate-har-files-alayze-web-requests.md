---
pagename: 'Generate HAR files and analyze web requests '
categoryName: Troubleshooting
subCategoryName: Support
indicator: chat
subtitle: How to generate HAR Files and analyze web requests for troubleshooting
level3: ''
permalink: troubleshooting-support-generate-har-files-analyze-web-requests.html
isTutorial: false
isNew: false
date: 2019-04-01 11:56:48 +0300
published: false

---
When troubleshooting complex issues, it's sometimes necessary for our Support agents to get some additional information from you in order to troubleshoot the issue further. For example, when we receive a report of performance trouble when using LiveEngage there are a lot of different factors that may contribute to the problem. To narrow down the cause of the performance problem, we need more data. Google Chrome, in particular, makes it relatively easy to capture all the data we need using what's called a HAR file. For this reason, we may ask you to generate a HAR file to help troubleshoot the trouble you're experiencing. Please see the following directions for how to generate a HAR file.  

Below are instructions for generating a HAR file from different browsers. 

## Generating a HAR File from Chrome 

It is recommended to use Chrome to generate HAR files using the Chrome Developer Tools that facilitate this. 

To learn more about the Chrome's developer tools, see[ Chrome DevTools Overview.](https://developers.google.com/web/tools/chrome-devtools/?utm_source=dcc&utm_medium=redirect&utm_campaign=2018Q2) 

1\. Open Chrome and enable the Developer Tools. 

2\. Select the Network tab. 

3\. Load the page with the problem. 

4\. Please capture a full page load so we can see the requests made prior to the problem we're analyzing. 

5\. Complete the steps that trigger or demonstrate your issue. 

6\. Right click the Development Tool and select Save as HAR with content. 

7\. Send the file to the Support case. 

## Generating a HAR File from Firefox 

Firefox Developer Tools does not come with an option to save the output to a HAR file. 

Some extensions are required on Firefox in order to generate a HAR file. 

### Providing Information to Support 

1\. Install the Firefox extension Firebug. 

2\. Install the Firebug extension NetExport. This enables export in HAR format. Be sure to install the latest version from the releases page. 

{: .notice}  
Installing the extensions may contribute to browser performance. If you have performance problems after installing the extension, please try removing the plugin. This guide is targeted at troubleshooting and the plugin is a third-­party plugin. Consequently, LivePerson does not provide support for them. 

3\. Open the Firebug console using one of these methods: 

* Click the Firebug Icon at the top right of the browser window: 
* Press Ctrl + F12 (Windows) or CMD + F12 (Mac) to open Firebug in a new window. 

4\. Navigate to the Net tab in the Firebug console. 

5\. Refresh the page to start capturing traffic between the browser to the server. 

6\. Please capture a full page load so we can see the requests made prior to the problem we're analyzing. 

7\. Complete the steps that trigger or demonstrate your issue. 

8\. Click Export followed by Save As... to save the HAR file 

9\. Send the file to the Support case. 

## Generating a HAR File from Internet Explorer 

Internet Explorer supports the Developer Toolbar. Additionally, [Fiddler](https://www.telerik.com/fiddler) is a third-party application that's often used for debugging browser problems. 

## Network Issues 

Microsoft's [Using Windows Internet Explorer Developer Tools Network Capture](https://docs.microsoft.com/en-us/previous-versions//gg130952(v=vs.85)) KB can be used to identify how to diagnose network issues. 

## Providing Information to Support 

Occasionally, we'll need to ask for a copy of that data so we can review it. To provide the data, please do the following: 

If using IE 9, follow the steps in IE9 Developer Tools: Network Tab to save an XML file and provide it to us. 

 If using IE 11, follow the steps in Analyzing your webpage's network traffic, and use Export captured traffic. 

## Generating a HAR File from Safari 

Safari comes with its own [Safari Web Development Tools . ](https://developer.apple.com/safari/tools/)