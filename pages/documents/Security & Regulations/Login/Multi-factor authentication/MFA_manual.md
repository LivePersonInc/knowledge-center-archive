---
pagename: Multi-factor authentication user manual
categoryName: Security & regulations
subCategoryName: Login
indicator: both
subtitle: "Configure MFA for your user login"
level3: Multi-factor authentication
permalink: security-regulations-login-multi-factor-authentication-user-manual.html
isTutorial: false
isNew: false
date:
---

Multi-factor authentication is an additional step of verification which take place by a code which provided on the individual personal device (smartphone) on a dedicated authenticator app and being entered by him on the second login step (right after entering his credentials) in LiveEngage login process.

## Glossary

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

* Google Authenticator ([App Store](https://itunes.apple.com/app/google-authenticator/id388497605?mt=8) / [Google Play](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2))

* Authy ([App Store](https://itunes.apple.com/us/app/authy/id494168017) / [Google Play](https://play.google.com/store/apps/details?id=com.authy.authy))

* Okta Verify ([App Store](https://itunes.apple.com/us/app/okta-verify/id490179405?mt=8) / [Google Play](https://play.google.com/store/apps/details?id=com.okta.android.auth&hl=en))

## FAQs

### Q: Which authenticator app can I use?

**A:** You can use any authenticator app that implements TOTP (unless otherwise specified by your brand admin).

### Q: What should I do if for some reason I can't use my authenticator app configuration? (I have replaced my mobile device or reinstalled my authenticator app, for example)

**A:** You should ask your account admin to reset your multi-factor authentication settings. Once done, you will be able to access LivePerson's login page and reconfigure your MFA as if you were doing so for the first time (see step 1 above).
