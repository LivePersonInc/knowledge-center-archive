---
pagename: Log-in and password
categoryName: Troubleshooting
subCategoryName: ''
indicator: both
subtitle: Troubleshooting for all questions relating to logging in and passwords
level3: ''
permalink: troubleshooting-login-password.html
isTutorial: false
isNew: false
date: 2019-02-26 12:34:43 +0000

---
## Why am I getting a “process failed” error when I try to reset my password?

If your user is disabled, you will get a “Process failed” error when trying to reset your password. Before you can reset your password, your user must be re-enabled.

![](/img/troubleshooting-password1.png)

## The Captcha on the forgot password window isn’t working.

If after selecting the **Captcha** checkbox (to the left of **I’m not a robot**) and clicking the **Submit** button, you are returned to the **Forgot password window** or you receive the error “**Captcha error There is a problem with the Captcha service.**”:

1. Refresh the page, fill in the form again, and select the **Captcha** checkbox.
2. Wait for the Captcha to be approved (a green checkmark is displayed in the checkbox).
3. Click the **Submit** button.

   ![](/img/troubleshooting-password2.png)

## I didn’t receive the password reset email. How can I reset my password?

![](/img/troubleshooting-password3.png)

If after submitting the **Forgot password** form, you received the **Request submitted** message but you didn’t receive an email:

1. Double check your **Inbox** for an email from **LivePerson Support selfsupport@liveperson.com .**
2. Check your **Spam/Junk** email folder for an email from **LivePerson Support selfsupport@liveperson.com .**
3. If you were unable to locate the email in your email folders, and you are not an admin user, please contact your local admin user for help.
4. If you’re an admin user of a small to medium-size account, you can do one of the following:  
   – If you are able to provide **validation** (your account’s credit card number/most recent invoice), please contact LivePerson Support for help.  
   – If you **cannot validate** your account, please contact another local admin for help.
5. If you are an admin user of a large account, you can do one of the following:  
   – Reach out to another **local admin** for help enabling your user.  
   – Contact your LiveEngage **account team** for help.  
   – Contact LivePerson Support and ask them to **open a case** for your account team, requesting that they contact you regarding your login problems. Your account manager will validate your request and help you enable your user.

## The reset password button in the email doesn’t work; it takes me back to the “forgot password” page.

I received the password reset email but when I click the **password reset button** in the email, it just takes me back to the Forgot Password page. If I click **Forgot Password** again, I am taken back to the **Forgot Password** page. It seems to be a continuous loop.

![](/img/troubleshooting-password4.png)

#### Cause:

Your company’s mail service security settings are most likely modifying links in your emails, including the **Reset Password** link.

Mail security services (such as Office 365 ATP Safe Links) often send an organization’s clicked links via their own services to check if the link is safe. You can identify this by a change in the URL of the **Reset Password** button within the email (not the URL in the address bar after the redirect).

#### Solution:

Please contact your local system administrator and ask them to add *.liveperson.net and *.liveperson.com to the your company’s security mechanism **Safe List**.

For more information on Office 365 ATP Safe Links, your admin can refer to [Office 365 ATP Safe Links](https://docs.microsoft.com/en-us/office365/securitycompliance/atp-safe-links) and Set up a custom do-not-rewrite URLs list using Office 365 ATP Safe Links on the Microsoft web site.