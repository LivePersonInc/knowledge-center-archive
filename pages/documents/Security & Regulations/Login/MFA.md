---
pagename: Multi-factor authentication
categoryName: Security & regulations
subCategoryName: Login
indicator: both
subtitle: "Authenticate once to seamlessly access the LivePerson platform"
level3: ''
permalink: security-regulations-login-multi-factor-authentication.html
isTutorial: false
isNew: false
date:
---
## Overview

Brand’s can leverage LivePerson’s Multi-factor authentication capability to provide an additional layer of security for their agents’ login flows (that’s also includes others LE-Users such as admins etc...).

The Multi-factor authentication adds an extra layer of protection on top of Login name and password as a prerequisite for each login attempt.

Agents that will be having issues with their MFA login (locked/lost device/etc…) will be able to approach their administrator with a request to reset their MFA configuration.


**Glossary**

* MFA - Multi-factor authentication (sometime can be referred as 2-factor authentication)
* OTP/Token - one-time password (or one-time key)
* Time-based One-time Password (TOTP) - this is the support password algorithm on LiveEngage MFA.
* Authenticator apps - Apps (Usually for personal devices) which generates MFA codes (OTP).

## Flow

Upon LE-User login on the LivePerson’s login page (after providing his correct login credentials), the user will be presented with the Multi-factor authentication flow that will include the following steps:

### Step 1 - Configuring Multi-factor authentication (first time login)

A user goes through the MFA flow in the first time will see this page. a QR code which being presented by the login page (After finishing this on-boarding process he will not see this page again). ![](/img/Scan QR MFA.png)

#### TOTP mobile app
A time-based one-time password (TOTP) application automatically generates an authentication code that changes after a certain period of time. We recommend using cloud-based TOTP apps such as:
* Google Authenticator [App Store](https://itunes.apple.com/app/google-authenticator/id388497605?mt=8), [Google Play Store](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)
* [Authy](https://authy.com/download/)
* [Okta Verify](https://help.okta.com/en/prod/Content/Topics/Mobile/Okta_Verify_Using.htm)

### Step 2 - Retrieve code

User opens up the authenticator mobile app and scans the QR code. After scanning, the authenticator app displays a six-digit code that you can enter on LiveEngage.
![](/img/OTK Code.png)

### Step 3 - Submit code
User will get an input area where he should submit the six-digit code he received on the authenticator app and submit. This page will be presented on to an agent on every login process right after submitting his login credentials (Login name & Password).

![](/img/Submit OTK.png)

## FAQs

### Q: Which authenticator app can I use?

**A:** You can use any authenticator app that implement TOTP (unless specified else by your brand admin).

### Q: What should I do if for some reason I can't use my authenticator app configuration? (I have replaced my mobile device or reinstalled my authenticator app )

**A:** You should ask your account admin to reset your Multi-factor authentication settings. once done, you will be able to access LivePerson's login page and reconfiguring MFA (Step 1).
