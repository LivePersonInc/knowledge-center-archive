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

Brands can leverage LivePerson’s multi-factor authentication capability in order to provide an additional layer of security for their LiveEngage logins. This includes both agent and admin login flows, for example. Multi-factor authentication adds an extra layer of protection to a simple request for a login name and password. This can be set as a prerequisite for each login attempt, making sure the extra layer of protection is always present.

Agents that will encounter issues with their MFA login (locked or lost device, deleted or missing app, etc.) will be able to approach their administrator with a request to reset their MFA configuration.


**Glossary**

* MFA - Multi-factor authentication (can sometimes be referred to as "two factor authentication")

* OTP/Token - one-time password (or one-time key)

* Time-based One-time Password (TOTP) - this is the supported password algorithm used by LiveEngage's MFA

* Authenticator apps - Apps (usually for personal devices) which generate MFA codes (OTP)

## Flow

When a LiveEngage user logs in from LivePerson’s login page (after providing their correct login credentials), the user will be presented with the multi-factor authentication flow. This flow includes the following steps:

### Step 1 - Configuring multi-factor authentication (first time login)

A user goes which through the MFA flow for the first time, will see the following page. This page includes a QR code which should be scanned using the authenticator app (see [this section](#totp-mobile-authenticator-app)) for first time configuration (after finishing this on-boarding process once, the user will not see this page again).

![](/img/Scan QR MFA.png)

### Step 2 - Retrieve code

Now the user should use one of the authenticator mobile apps listed above and scan the QR code. After scanning, the authenticator app displays a six-digit code that you can enter in LiveEngage (see next step).

![](/img/OTK Code.png)

### Step 3 - Submit code

LiveEngage will provide the user with an input area where they should submit the six-digit code they received from the authenticator app and submit. This page will be presented to an agent on every login attempt right after they submit their login credentials (login name & password).

![](/img/Submit OTK.png)

## TOTP mobile authenticator app

A time-based one-time password (TOTP) application automatically generates an authentication code that changes after a certain period of time. We recommend using cloud-based TOTP apps such as:

* Google Authenticator [Apple App Store](https://itunes.apple.com/app/google-authenticator/id388497605?mt=8), [Google Play Store](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)

* [Authy](https://authy.com/download/)

* [Okta Verify](https://help.okta.com/en/prod/Content/Topics/Mobile/Okta_Verify_Using.htm)

## FAQs

### Q: Which authenticator app can I use?

**A:** You can use any authenticator app that implements TOTP (unless otherwise specified by your brand admin).

### Q: What should I do if for some reason I can't use my authenticator app configuration? (I have replaced my mobile device or reinstalled my authenticator app, for example)

**A:** You should ask your account admin to reset your multi-factor authentication settings. Once done, you will be able to access LivePerson's login page and reconfigure your MFA as if you were doing so for the first time (see step 1 above).
