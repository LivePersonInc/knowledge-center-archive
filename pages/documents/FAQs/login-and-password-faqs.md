---
pagename: Login & password
categoryName: FAQs
subCategoryName: ''
indicator: both
subtitle: Questions and answers relating to credentials and logging in
level3: ''
permalink: faqs-login-password.html
isTutorial: false
isNew: false
date: 2019-02-26 12:34:43 +0000
redirect_from:
  - troubleshooting-login-password.html

---

You can log in to your account [here](https://authentication.liveperson.net/). To reset your password, please [click here](https://authentication.liveperson.net/forgotMyPassword.html). If you encounter any issues with resetting your password, please see the frequently asked questions below.

## Why do I keep getting logged out of the platform?

* Network connectivity issues: check speeds at https://www.speedtest.net/ and verify whether a more stable connection is available.
* You’re being timed out based on account configurations. To resolve this, you can either interact with the platform before the agent inactivity period is met, or update the account configurations with the account team so that the user has a bigger window of time before being logged out.
* You're attempting to log in on another instance (e.g., Mobile App) and *only one session at a time is permitted per user.*

## Why am I getting a “process failed” error when trying to reset my password?

If your user is disabled, you will get a “process failed” error when trying to reset your password. Before you can reset your password, your user must be re-enabled.

## The Captcha on the forgot password window isn’t working.

If you are returned to the **forgot password window**, or you receive the error “**Captcha error There is a problem with the Captcha service.**” after selecting the **Captcha** checkbox (to the left of “**I’m not a robot**”) and clicking on the **Submit** button, please take these steps to resolve the issue:

1. Refresh the page, fill in the form again, and select the **Captcha** checkbox.
2. Wait for the Captcha to be approved (a green checkmark is displayed in the checkbox).
3. Click the **Submit** button.

   ![](/img/troubleshooting-password2.png)

## I didn’t receive the password reset email. How can I reset my password?

![](/img/troubleshooting-password3.png)

If after submitting the **Forgot password** form, you received the "**Request submitted**" message but you didn’t receive an email, please follow these instructions:

1. Double check your **Inbox** for an email from **LivePerson Support "selfsupport@liveperson.com" .**
2. Check your **Spam/Junk** email folder for an email from **LivePerson Support "selfsupport@liveperson.com" .**
3. If you were unable to locate the email in your email folders, and you are not an admin user, please contact your local administrator for assistance.
4. If you’re an admin user of a small to medium-sized brand, you can do one of the following:  
   – If you are able to provide **validation** (your account’s credit card number/most recent invoice), please contact LivePerson Support for help.  
   – If you **cannot validate** your account, please contact another local admin for help.
5. If you are an admin user of an enterprise account, you can do one of the following:  
   – Reach out to another **local admin** for help enabling your user.  
   – Contact your LivePerson **account team** for help.  
   – Contact LivePerson Support and ask them to **open a case** for your account team, requesting that they contact you regarding your login issue. Your account manager will validate your request and help you enable your user.
   
For details on how to enable a user, [click here](troubleshooting-enable-a-user.html). 

## The reset password button in the email doesn’t work; it takes me back to the forgot password page.

I received the password reset email but when I click on the **password reset button** in the email, it just takes me back to the forgot password page. If I click on the **forgot password** again, I am taken back to the **forgot password** page. It seems to be a continuous loop.

![](/img/troubleshooting-password4.png)

The reason for this error is that your company’s mail service security settings are most likely flagging links in your emails, including the **Reset Password** link.

Mail security services, such as Office 365 ATP Safe Links, often send an organization’s clicked links via their own services to check if the link is safe. You can identify this by a change in the URL of the **Reset Password** button within the email (not the URL in the address bar after the redirect).

Please contact your local system administrator and ask them to add ".liveperson.net" and ".liveperson.com" to the company’s security mechanism **Safe List**.

For more information on Office 365 ATP Safe Links, your admin can refer to [Office 365 ATP Safe Links](https://docs.microsoft.com/en-us/office365/securitycompliance/atp-safe-links) and set up a custom do-not-rewrite URLs list using Office 365 ATP Safe Links on the Microsoft web site.

## Why can’t I log into the Conversational Cloud from Chrome?

Your Chrome browser may have an unsupported extension installed (e.g. Ghostery) that is known to block cookies and other functionality. You must disable the extension in order to sign in to the Conversational Cloud.

{: .notice}  
Unsupported extensions can cause issues on all browsers.

## My password reset limit has been reached

This is usually caused by too many changes to a user's password within a 24-hour time frame. 
You will not be able to change the password until the 24-hour timeframe passes. As a workaround, you can reach  out to a local administrator for the account and ask them to create a duplicate user for you, while you are waiting for the original user’s password cooldown to pass.

## What timezone is being used in the workspace? 
 
The timestamps visible in both the Agent and Manager workspaces will reflect the timezone relating to the specific device with which the viewer is accessing the Conversational Cloud.

* Report Builder - the timezone of the account
* Web History - Local Computer Time
* Campaign BI - the timezone of the account
* Export Web History - GMT
