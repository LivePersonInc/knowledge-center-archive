---
pagename: Find your Conversational Cloud account number
categoryName: Getting started
subCategoryName: ''
indicator: both
subtitle: 
level3: ''
permalink: getting-started-find-your-conversational-cloud-account-number.html
isTutorial: true
isNew: false
date: '2021-07-14T13:04:36.000+00:00'
---

The account number (aka Account ID) is your primary identifier in the Conversational Cloud. It is one of the three mandatory fields you must complete to successfully log in to your Conversational Cloud account, and should therefore be stored somewhere safe.

![](img/enter-your-credentials-login.png) 
 

## How to find your account number:

**1. If you're the account owner**  
When you first registered and your account was created, you should have received a registration email from LivePerson containing your account number. Search both your mailbox and your Spam folder for an email from **registration@liveperson.com**.

![](img/account-registration-email.png)

**2. If you’re not the account owner**  
If no one at your company is able to provide you with your Conversational Cloud account number, and/or in case of an emergency, follow the steps outlined below in order to obtain the Conversational Cloud account number for your brand. For further guidance, reference the GIF below which demonstrates these steps.

1. Navigate to your company website and enter a section/page where customers **can see** the messaging button.
2. Open up the browser developer tools console. Reference the following links for browser-specific instructions:
	1. **Safari**: [https://support.apple.com/en-il/guide/safari/sfri20948/mac](https://support.apple.com/en-il/guide/safari/sfri20948/mac)
	2. **Chrome**: [https://developer.chrome.com/docs/devtools/open/](https://developer.chrome.com/docs/devtools/open/)
	3. **Microsoft Edge**: [https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/open/?tabs=cmd-Windows#open-microsoft-edge-devtools-1](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/open/?tabs=cmd-Windows#open-microsoft-edge-devtools-1)
	4. **Microsoft Internet Explorer**: [https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/ie-mode/#launching-the-devtools-on-a-tab-in-ie-mode](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/ie-mode/#launching-the-devtools-on-a-tab-in-ie-mode)
	5. **Mozilla Firefox**: [https://developer.mozilla.org/en-US/docs/Tools](https://developer.mozilla.org/en-US/docs/Tools)
3. Search for a network file called: “tag.js”. 
4. Extract the account number from the query param “site=<account_number>”. (e.g.,  tag.js?site=8367445)


![](img/find_your_account_number.gif) 