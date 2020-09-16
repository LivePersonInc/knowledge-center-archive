---
pagename: Week of September 21st
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-september-week-of-september-21st.html
isTutorial: false
isNew: false
date: '2020-09-09'

---

These release notes include new features arriving September 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Mobile SDK version 4.6.0 is now available (Android release with support for legacy library - not Android X) 
### Environment Requirements

The Android Mobile Messaging SDK version 4.6.0 uses:
* Minimum API version 19
* Compile API version 28
* Target API version 28
* Maps SDK "com.google.android.gms:play-services-maps:16.1.0"
(unchanged from version 4.5.0)

## Mobile SDK version 5.4.0 is now available (variant of Android 4.5 with support for Android 10 and Android X)
### Environment Requirements

The Android Mobile Messaging SDK version 5.4.0 uses:
* Minimum API version 19
* Compile API version 29
* Target API version 29
* Maps SDK "com.google.android.gms:play-services-maps:16.1.0"
(unchanged from version 5.3.0)

## Auto Logout - Improve logout options
### Type: New functionality (Android SDK v4.6/5.4)

An SDK enhancement has been added that will prevent a second customer from viewing the chat history of the customer who chatted before them, while optimizing the flow in a way that clears just the necessary set of user information in a quick manner. This new feature adds an additional layer of security to our brand’s while verifying that conversation history and information will only be available to the consumer that was logged in to the app at the time of the conversation. 


**Please note - there a branding.xml attribute update:**
lp_hide_ui_until_auth is removed. Previous conversations will now not be displayed automatically until the consumer's authentication information is validated. 

## Android SDK crash due to empty recycler view object
### Type: Bug fix (Android SDK v4.6/5.4)

A crash that occurred when onSaveInstanceState method is called in SDK has been fixed. 

## "link_preview_enable_feature" configuration is not working as expected 
### Type: Bug fix (Android SDK v4.6/5.4)

A bug was discovered that “link_preview_enable_feature” config can’t disable link preview. The configuration now supports enabling and disabling the link preview in the conversation. 

## Failed to reconnect if LP token not expired
### Type: Bug fix (Android SDK v4.6/5.4)

A bug was discovered that caused Messaging.reconnect() not to work when the ‘token is expired’ flag was set to false. The new flow will include a reconnect method when the token is expired and the flag is not turned on, which means that the reconnect will be performed on any other IDP errors that are not expired JWT. 

## iOS SDK version 6.0.1 is now available 

**Environment Requirements:**
* The iOS Mobile Messaging SDK version 6.0.1 is supported on iOS versions 11 through 13.
* XCFramework is supported on CocoaPad versions 1.9.0 and greater.

**Content:**
* iOS SDK 6.0.1 contains same changes as [v6.0.0](release-notes-2020-august-week-of-august-31st.html)
* This is an additional version that also compiles on the XCode 12 beta
