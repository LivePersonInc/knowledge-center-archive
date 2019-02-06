---
pagename: 'Week of October 22nd '
categoryName: Release notes
subCategoryName: 2018
indicator: chat
subtitle: LiveEngage Release Notes
level3: October
permalink: 'Release-notes-2018-october-week-of-october-22nd.html '
isTutorial: false
isNew: false
date: 2019-02-06 13:56:51 +0200
published: false

---
: 

These release notes include new features arriving to LiveEngage during October 2018. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

***Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

_Note: The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change._

**New Functionalities**

| --- | --- | --- |
| Category | Name | Relevant for messaging? |
| Messaging Operations | Skill ID on Conversation Info event | Yes |
| Photo Sharing - When viewing image on the entire screen, click the background to dismiss | Yes |

**Technical Features**

| --- | --- | --- |
| Category | Name | Relevant for messaging? |
| Messaging Operations | Messaging - Automatic Messages - adding support of "\\n" | Yes |

**Bug Fixes**

| --- | --- | --- |
| Category | Name | Relevant for messaging? |
| Messaging Operations | Dutch Translation - Email and Print Transcript | Yes |
| French abbreviations for date/month in visitor chat window are incorrect | Yes |
| Window goes blank in conversation when refreshing page | Yes |
| IE11 Placeholder Text continues to show once consumer selects the field | Yes |

# New Functionality

## Messaging Operations

### Skill ID on Conversation Info event (LE-94149)

| --- | --- | --- | --- | --- | --- | --- | --- |
| Web Messaging | Mobile App Messaging | SMS | Facebook | ABC | Line | Google My Business | Chat |
| Yes | No | No | No | No | No | No | No |

The Skill ID in the Conversation_Info event is now exposed. The event should be triggered when a conversation is transferred to an agent with a different skill.

### Photo Sharing - When viewing image on the entire screen, click the background to dismiss (LE-94140)

| --- | --- | --- | --- | --- | --- | --- | --- |
| Web Messaging | Mobile App Messaging | SMS | Facebook | ABC | Line | Google My Business | Chat |
| Yes | No | No | No | No | No | No | No |

After the consumer sends an image to an agent, and clicks on the thumbnail, the image will open in the entire window. To close this view, the consumer can click on the entire background, and not just on the “x” on the upper right corner.

  
![](https://lh3.googleusercontent.com/5_fSCg2JT9goPkjvKYWxsFVQg41uRC4l9v1la7530kwBa9qyMsm1AKu_SKXW21m2afq5sTktkL_GnJ071zLqqMKG_wrzIzJETU9diVpRIH7LHHE3IhHWjOVXh7vZgPLiXCp35fh3 =603x384)

# Technical Features

## Messaging Operations

### Messaging - Automatic Messages - adding support of "\\n" (LE-93733)

| --- | --- | --- | --- | --- | --- | --- | --- |
| Web Messaging | Mobile App Messaging | SMS | Facebook | ABC | Line | Google My Business | Chat |
| Yes | No | No | No | No | No | No | No |

Unified Window needs to align the code to support "\\n" in Messaging Automatic Messages. Backward compatibility should be taken into account for cases of brands that are already using "\\n" inside their predefined content/automatic messages.

# 

# Bug Fixes

## Messaging Operations

### Dutch Translation - Email and Print Transcript (LE-92669)

| --- | --- | --- | --- | --- | --- | --- | --- |
| Web Messaging | Mobile App Messaging | SMS | Facebook | ABC | Line | Google My Business | Chat |
| Yes | No | No | No | No | No | No | Yes |

In the Engagement Window Action Menu the word ‘Transcript’ in Dutch is spelled with two s’s, while it should only be spelled with one ‘s’.

This is true for both ‘Print transcript’ and ‘Email transcript’.

The text that shows: ‘Transscript per e-mail’ and ‘Transscript afdrukken’.

The text that should show: ‘Transcript per e-mail’ and ‘Transcript afdrukken’.

This issue has now been resolved.

### French abbreviations for date/month in visitor chat window are incorrect (LE-93926)

| --- | --- | --- | --- | --- | --- | --- | --- |
| Web Messaging | Mobile App Messaging | SMS | Facebook | ABC | Line | Google My Business | Chat |
| Yes | No | No | No | No | No | No | Yes |

August is displaying as Aoû in the engagement window, which is not a valid abbreviation for August in French. It should be spelled Août in the engagement window. This is now resolved.

### Window goes blank in conversation when refreshing page (LE-94606)

| --- | --- | --- | --- | --- | --- | --- | --- |
| Web Messaging | Mobile App Messaging | SMS | Facebook | ABC | Line | Google My Business | Chat |
| Yes | No | No | No | No | No | No | No |

A conflict was discovered in code between the window and the customer’s page, causing the window to show as blank after a new page loaded (e.g. refresh), and to show only new messages from the consumer. This issue has been resolved.

### IE11 Placeholder Text continues to show Once Consumer Selects the Field (LE-94424)

| --- | --- | --- | --- | --- | --- | --- | --- |
| Web Messaging | Mobile App Messaging | SMS | Facebook | ABC | Line | Google My Business | Chat |
| Yes | No | No | No | No | No | No | Yes |

In IE11, if you attempt to type a message in the Unified Window, the placeholder text continues to show, and it doesn't clear when the consumer attempts to type their message. This bug is now resolved.