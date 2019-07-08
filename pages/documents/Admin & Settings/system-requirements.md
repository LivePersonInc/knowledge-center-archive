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
For the best LivePerson experience, customers are required to use one of the certified operating systems and browser versions listed below. Using the latest browsers ensures better encryption, privacy support by default, and access to the full functionality of LiveEngage.

LivePerson is constantly expanding its matrix of supported operating systems and browser versions.

1. We fully support only the generally available (GA) browser versions.
2. To benefit from the full functionality of LivePerson, cookies must be enabled.

<br/>
We have two primary levels of support for the items listed in the tables below:

**Supported:** Items marked with an asterisk ( * ) meet the minimum requirements, with no known issues. Any new bugs will be evaluated and resolved on a case by case basis.

**Certified:** Unmarked items have been tested thoroughly by LivePerson. We are committed to resolving any bugs or issues based on the SLAs defined across LiveEngage.

{: .notice}  
We recommend using certified systems for the best possible experience while using LiveEngage.

## Visitor side: mobile web requirements

The tables below list the browsers LivePerson supports for visitors on mobile web assets (smartphones and tablets).

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
| Internet Explorer | 11x* | 11x* | 11x* |
| Microsoft Edge | N/A | N/A | Latest available version (N)* , Version N-1 |
| Safari |  | Not supported |  |

### Mac

|  | OS X 10.10 | OS X 10.11 | macOS Sierra |
| --- | --- | --- | --- |
| Safari | Safari 8 | Safari 9 | Safari 10, Safari 11* |
| Chrome |  | Latest available version (N)* ,  Version N-1 |  |
| Mozilla Firefox |  | Latest available version (N)* ,  Version N-1 |  |

## Visitor side: unsupported browsers

We do not support incognito / private browsing in any browser.

Some browsers are not supported at all due to experience or security reasons.  When consumers arrive to your website from certain browsers, LiveEngage will not display any chat buttons or invitations, for example on:

* Internet Explorer 7, 8, 9 and 10
* Line browsers

## LivePerson workspace requirements

The tables below list the browsers that Agents, Agent Managers, Admins, and Campaign Managers can use when accessing the LiveEngage workspace.

### Windows

|  | Windows 7 | Windows 8.1 | Windows 10 |
| --- | --- | --- | --- |
| Chrome | Latest available version (N)* , Version N-1 | Latest available version (N)* , Version N-1 | Latest available version (N)* , Version N-1 |
| Mozilla Firefox | Latest available version (N)* ,  Version N-1, ESR (N and N-1) | Latest available version (N)* ,  Version N-1, ESR (N and N-1) | Latest available version (N)* ,  Version N-1, ESR (N and N-1) |
| Internet Explorer | 11x* | 11x* | 11x* , Edge* |
| Microsoft Edge | Not supported | Not supported | Latest available version (N)* |
| Safari | Not supported | Not supported | Not supported |

### Mac

|  | OS X 10.8 | OS X 10.9 | OS X 10.10 |
| --- | --- | --- | --- |
| Safari | 6x | 7x* | 8x* |
| Chrome | Latest available version (N)* ,  Version N-1 | Latest available version (N)* ,  Version N-1 | Latest available version (N)* ,  Version N-1 |
| Mozilla Firefox | Latest available version (N)* ,  Version N-1, ESR (N and N-1) | Latest available version (N)* ,  Version N-1, ESR (N and N-1) | Latest available version (N)* ,  Version N-1, ESR (N and N-1) |

## Desktop notifications

LiveEngage desktop notifications do not support the following browsers:

* Internet Explorer 11x

## Reporting

LiveEngage BI Dashboards do not support the following browsers:

* Internet Explorer 11x
* Microsoft Edge

While these browsers do support LiveEngage they do not support, and will not support, the BI dashboard. Users accessing the BI dashboards using these browsers may experience unexpected behaviors, such as missing scroll bars. The data in the dashboards may seem incomplete or missing when reviewing it without using scroll bars. To overcome this and see the full data, users can use the keyboard arrows.

## Bandwidth requirements

### LivePerson workspace

* Initial download speed: approximately 6MB GZIPPED for complete agent workspace download (includes scripts, html, CSS and images).
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

_Live person recommends hosting up to 30 Agent users per Citrix server with following specification:_

* Hosted VMWare
* Internal network 10 GB
* Network to WAN 200/200 (Up/Down)
* 6 VCPU (2.2 ghz minimum)
* 16 GB memory
* 256 Video Card Memory
* Windows server 2012 R2
* Xenapp 7.15 

Upon the above set up the below describes the resource consumption fro each profile:_

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