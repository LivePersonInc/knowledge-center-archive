---
pagename: System requirements
categoryName: Admin & settings
subCategoryName: ''
indicator: both
subtitle: LivePerson is constantly expanding its matrix of supported operating systems
  and browser versions.
level3: ''
permalink: admin-settings-system-requirements.html
isTutorial: false
isNew: false
date: '2019-01-28T13:20:27.000+00:00'

---
The Conversational Cloud platform aims to provide the best engagement experiences for consumers and brands. To do so, LivePerson constantly advances its technology and always uses the most up-to-date innovative tools which enable the rich engagement experiences we wish to provide our customers.

For the best LivePerson experience, customers are required to use one of the certified operating systems and browser versions listed below. Using the latest browsers ensures better encryption, privacy support by default, and access to the full functionality of the Conversational Cloud.

LivePerson is constantly expanding its matrix of supported operating systems and browser versions.

1. We fully support only the generally available (GA) browser versions.
2. To benefit from the full functionality of LivePerson, cookies must be enabled.

<br/>
We have two primary levels of support for the items listed in the tables below:

**Supported:** Items marked with an asterisk ( * ) meet the minimum requirements, with no known issues. Any new bugs will be evaluated and resolved on a case by case basis.

**Certified:** Unmarked items have been tested thoroughly by LivePerson. We are committed to resolving any bugs or issues based on the SLAs defined across the Conversational Cloud.

{: .notice}  
We recommend using certified systems for the best possible experience while using the Conversational Cloud.

## Visitor side: mobile web requirements

The tables below list the browsers LivePerson supports for visitors on mobile web assets (smartphones and tablets).

{: .notice}
For supported iOS and Android versions of our Mobile Messaging Window SDK, otherwise known as In-App Messaging, please see the respective release notes for the SDK version you are using. these can be found in our Developer Center for [Android](https://developers.liveperson.com/mobile-app-messaging-sdk-for-android-all-release-notes.html) and [iOS]( https://developers.liveperson.com/mobile-app-messaging-sdk-for-ios-all-releases-regular-releases.html).

### Android

|  | v5.X (Lollipop) | v6.X (Marshmallow) | V7.X(Nougat) |
| --- | --- | --- | --- |
| Chrome | Latest available version | Latest available version | Latest available version (N)* , Version N-1 |

### iOS

|  | iOS 9 | iOS 10 | iOS11 |
| --- | --- | --- | --- |
| Safari | Latest available version | Latest available version | Latest available version (N)* , Version N-1 |
| Chrome | Latest available version | Latest available version | Latest available version (N)* , Version N-1 |

## Visitor side: desktop requirements

The tables below list the browsers LivePerson supports for visitors on desktop web assets.

### Windows

|  | Windows 7 | Windows 8.1 | Windows 10 |
| --- | --- | --- | --- |
| Chrome |  | Latest available version (N)* , Version N-1 |  |
| Mozilla Firefox |  | Latest available version (N)* , Version N-1 |  |
| Microsoft Edge | N/A | N/A | Latest available version (N)* , Version N-1 |
| Safari |  | Not supported |  |


{: .notice}  
**Please note** Microsoft will end its support for Internet Explorer 11 and will move to support the new Microsoft Edge as such LivePerson is discontinuing support for IE11.

{: .notice}  
**Please note:** Windows 7 is no longer supported by Microsoft as of January 14, 2020. As a result, LivePerson no longer tests its various products on Windows 7. This means that we don't plan on fixing any Windows 7 specific issues that may arise but our products will still work on the operating system. For more information [click here]( https://support.microsoft.com/en-us/help/4057281/windows-7-support-ended-on-january-14-2020).

### Mac

|  | OS X 10.10 | OS X 10.11 | macOS Sierra |
| --- | --- | --- | --- |
| Safari | Safari 8 | Safari 9 | Safari 10, Safari 11* |
| Chrome |  | Latest available version (N)* ,  Version N-1 |  |
| Mozilla Firefox |  | Latest available version (N)* ,  Version N-1 |  |

{: .notice}  
**Please note:** Windows 7 is no longer supported by Microsoft as of January 14, 2020. For more information [click here]( https://support.microsoft.com/en-us/help/4057281/windows-7-support-ended-on-january-14-2020).

## Visitor side: unsupported browsers

We do not support incognito / private browsing in any browser.

Some browsers are not supported at all due to experience or security reasons.  When consumers arrive to your website from certain browsers, the Conversational Cloud will not display any chat buttons or invitations, for example on:

* Internet Explorer 7, 8, 9, 10, 11
* Line browsers

{: .notice}  
**Please note:** Microsoft will end its support for Internet Explorer 11 and will move to support the new Microsoft Edge by Nov 30th 2020 as such LivePerson is discontinuing support for IE11. Please see the Microsoft [announcement.](https://techcommunity.microsoft.com/t5/microsoft-365-blog/microsoft-365-apps-say-farewell-to-internet-explorer-11-and/ba-p/1591666)

The recommended browser for the LivePerson messaging workspace is Chrome.

## Visitor side: unsupported browser extensions

Due to the technical needs of the Conversation Cloud platform on the client-side, some browser extensions can not be supported.

| Extension name | Description | Reason |
| --- | --- | --- |
| Bitdefender Anti-tracker | Blocks URLs from loading on a page based on Bitdefender's anti-tracking blacklist | Bitdefender blocks our critical files from loading on the page |
| Ghostery – Privacy Ad Blocker | Blocks URLs from loading on a page | Ghostery blocks our critical files from loading on the page |

## Visitor side: Mobile SDK Requirements

The official support of the LP Mobile SDK version is for the latest version only at any given point of time. This is applicable for both iOS and Android SDK versions.

The support for new OS releases from Apple and Google (iOS and Android OS) for the LP SDK would be within max 6-8 weeks from the date of GA availability of the OS. Beta SDK release of the newer OS beta will be available before 2-4 weeks of the GA availability for the customers to try their hands on and report any early issues.

{:.important}
**Notice: Signup Flow has been deprecated** as of June 2019. All customers are advised to move to Auth Code, Implicit Auth, or Unauth flows to continue using the SDK without issues.

### Latest releases

Please refer here: [iOS](https://developers.liveperson.com/mobile-app-messaging-sdk-for-ios-release-notes-all-releases.html) and [Android](https://developers.liveperson.com/mobile-app-messaging-sdk-for-android-release-notes-all-release-notes.html)

### Android

Android SDK v4.6.1 and below excludes AndroidX support [supports API 21-30]

Android SDK v5.0.0 and above includes AndroidX support  [supports API 21-30]

**The SDK uses the following libraries:**
* Com.google.android.gms:play-services-maps:16.1.0
* Com.squareup.okhttp3:okhttp:3.9.1

### iOS

| SDK version | Swift | Xcode Version | iOS Version |
| --- | --- | --- | --- |
| 6.1.0 | 5.2.4+ | 12.0 | iOS 12 - 14 |
| 6.0.1 | 5.2.4+ | 11.5, 11.6 & 11.7 | iOS 11 - 13 |
| 5.22 | 5.1.3 & 5.2.4 | 11.3, 11.3.1, 11.5, 11.6 & 11.7 | iOS 11 - 13 |

The SDK is compiled as a XCFramework and was compiled with Swift version 5.2.4 (swiftlang-1103.0.32.9 clang-1103.0.32.53) which means it will work with Swift version 5.2.4 and above. For more information on XCFramework, see [Apple documentation.](https://help.apple.com/xcode/mac/11.4/#/dev6f6ac218b)

Official support for the latest iOS SDK versions will be N, N-1 and N-2 as shown in the table above. Official support for LivePerson iOS SDK version is only for the current Swift version (N) and previous Swift version (N-1).

All iOS OS beta releases will be provided approximately 1 month before the actual GA for the purpose of compilation only (no bug fixes or new iOS features supported). Once the GA is released, we will accept requests for new iOS features.
Currently, we only support Cocoapods dependency manager, frameworks can also be integrated manually using the XCFramework binary format. We do not support integration with Carthage or Swift package manager.

## LivePerson workspace requirements

The tables below list the browsers that Agents, Agent Managers, Admins, and Campaign Managers can use when accessing the workspace.

### Windows

|  | Windows 7 | Windows 8.1 | Windows 10 |
| --- | --- | --- | --- |
| Chrome | Latest available version (N)* , Version N-1 | Latest available version (N)* , Version N-1 | Latest available version (N)* , Version N-1 |
| Mozilla Firefox | Latest available version (N)* ,  Version N-1, ESR (N and N-1) | Latest available version (N)* ,  Version N-1, ESR (N and N-1) | Latest available version (N)* ,  Version N-1, ESR (N and N-1) |
| Microsoft Edge | Not supported | Not supported | Latest available version (N)* |
| Safari | Not supported | Not supported | Not supported |

{: .notice}  
**Please note:** Windows 7 is no longer supported by Microsoft as of January 14, 2020. As a result, LivePerson no longer tests its various products on Windows 7. This means that we don't plan on fixing any Windows 7 specific issues that may arise but our products will still work on the operating system. For more information [click here]( https://support.microsoft.com/en-us/help/4057281/windows-7-support-ended-on-january-14-2020).

### Mac

|  | OS X 10.8 | OS X 10.9 | OS X 10.10 |
| --- | --- | --- | --- |
| Safari | 6x | 7x* | 8x* |
| Chrome | Latest available version (N)* ,  Version N-1 | Latest available version (N)* ,  Version N-1 | Latest available version (N)* ,  Version N-1 |
| Mozilla Firefox | Latest available version (N)* ,  Version N-1, ESR (N and N-1) | Latest available version (N)* ,  Version N-1, ESR (N and N-1) | Latest available version (N)* ,  Version N-1, ESR (N and N-1) |

## Desktop notifications

Conversational Cloud desktop notifications do not support the following browsers:

* Internet Explorer 11x

## Reporting

Conversational Cloud BI Dashboards do not support the following browsers:

* Internet Explorer 11x
* Microsoft Edge

While these browsers do support Conversational Cloud they do not support, and will not support, the BI dashboard. Users accessing the BI dashboards using these browsers may experience unexpected behaviors, such as missing scroll bars. The data in the dashboards may seem incomplete or missing when reviewing it without using scroll bars. To overcome this and see the full data, users can use the keyboard arrows.

## Bandwidth requirements

### LivePerson workspace

* Initial download speed: approximately 6MB GZIPPED for complete Agent Workspace download (includes scripts, html, CSS and images).
* Average rate per CCP per second: 10-15KB for data.
* Max rate per CCP per second: 1.2MB - 1.5M.
* Browser resource requirements: Typical agent activities with max 3 concurrent chats, client resource requirements can be summarized as:
  * Processor: Any 6th Gen Intel i3 processor. (i3-6098P is lowest cost one and is more than sufficient)
  * RAM - 2G
  * Network - 1G

## CoBrowse visitor side

* Recommended upstream bandwidth: 1500 Kbit/s.
* Large rendered websites > 2 MB (DOM tree) can lead to a significant delay until the website is fully visible to the CCP (waiting time 15 sec. or more to view the page).
* Your website should make sparse use of background animations (animations without user interaction).

{: .notice}
The real-time experience is affected by several applications competing for upstream bandwidth on the consumer’s system._

## Citrix requirements

LivePerson recommends hosting up to 30 Agent users per Citrix server with following specification:

* Hosted VMWare
* Internal network 10 GB
* Network to WAN 200/200 (Up/Down)
* 6 VCPU (2.2 ghz minimum)
* Memory 16 GB
* 256 Video Card Memory
* Windows server 2012 R2
* Xenapp 7.15

Upon the above set up the below describes the resource consumption for each profile:

* CPU for Agent Manager role - minimum of 4500 ghz per user
* CPU for each Agent role - minimum of 800 ghz per user
* CPU wise - 1 Manager = 5 agents
* Steady set up can be 1 Manager with 10 Agents

CPU resources should be calculated according to above parameters.

## New device certification process

LivePerson examines new devices and operating systems on a case by case basis, and adds them to our certifications process. The certification cycle of a new device or operating system LOE is approximately two business weeks. Every new device or operating system which enters the certification process removes another device or operating system from the certification list.

Requests by customers for certification of a new device or operating system will be examined by LivePerson’s Product House. If a device or operating system is not in our roadmap, a request should be made to LivePerson using the ER (enhancement request) process. Please contact your account manager for more details.

{: .notice}  
LivePerson will neither support nor certify any device or operating system that is not currently available in the market or planned to be available within the following 6 months. For up-to-date information on which OS-Device combinations are currently available in the market, refer to [GSMArena.com](http://www.gsmarena.com/).
