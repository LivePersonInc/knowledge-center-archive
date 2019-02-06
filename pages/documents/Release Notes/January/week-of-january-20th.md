---
pagename: Week of January 20th
categoryName: Release notes
subCategoryName: 2019
indicator: both
subtitle: ''
level3: January
permalink: release-notes-2019-january-week-of-january-20th.html
isTutorial: false
isNew: false
date: 2019-02-06 12:09:11 +0200
published: false

---
These release notes include new features arriving to LiveEngage during January 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

***Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}

The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## New functionality

### Report Builder: Time zone support (90133)

<table> <thead> <tr class="categoryrow"> <th><img class="tableIcon" src="img/Web_Messaging.png" /></th> <th><img class="tableIcon" src="img/mobileappmessaging.svg" /></th> <th><img class="tableIcon" src="img/sms.png" /></th> <th><img class="tableIcon" src="img/fb-messenger.svg" /></th> <th><img class="tableIcon" src="img/abc.svg" /></th> <th><img class="tableIcon" src="img/line.svg" /></th> <th><img class="tableIcon" src="img/google-rsc.svg" /></th> <th><img class="tableIcon" src="img/whatsapp.svg" /></th> <th><img class="tableIcon" src="img/web-messaging.svg" /></th> </tr> </thead> <tbody> <tr> <td>Yes</td> <td>Yes</td> <td>Yes</td> <td>Yes</td> <td>Yes</td> <td>Yes</td> <td>Yes</td> <td>Yes</td> <td>No</td> </tr> </tbody> </table>

Enterprise brands often have a global operation with contact centers in different regions. Each contact center is managed locally and by a global team.

To support both local agent managers in each region and global teams situated in the account’s timezone, Report Builder users will be able to change the time zone of a dashboard to analyze performance in their local time. In this release, we are adding this capability to two predefined dashboards: the **Skill Activity** and the **Messaging Performance.**

Before running a dashboard, the user is presented with a selection of time offsets from the default timezone of the account. This causes the data to be presented in the local time zone of the user.

Users that do not require any change in view from the account default time zone setting will not need to choose anything in the pop-up prompt before running the dashboard (the default offset is TZ+0 which is a zero hour offset from the account default setting).

**How to enable  
**The time zone offset feature is available to all users within the predefined dashboard folder on two dashboards: the **Skill Activity** and the **Messaging Performance**.

  
![](/img/week-of-january-20th-1.png)

**Please note:**

* Time offset is only possible for full hours. This means that users that are in time zones that are variations of half hours from GMT (such as certain places in India), will need to choose the full hour before or after. Half hour or quarter hour increments will not be supported.
* The drop down window that displays the time offsets available for the user to choose from, can only display 30 entries. Since there are 48 variations from GMT, there are two ‘pages’ of the dropdown.
* To support the time shift capability, the time related attributes have been altered to show an hour level granularity.
* For users with customization privileges (LPAs and brands with “edit access” feature), the attributes will now appear with the derived (fx) icon with the naming convention of the previous date/time related attributes. The naming convention of the previous attributes have been altered to be “_xxx__old” and moved out of the predefined attribute list for edit users to access. These can be reached from the hidden attribute list.
* There should be no impact or change to existing user copies. User copies created prior to this release will not display the offset functionality and therefore will not have the changes to the attributes mentioned in the note above.

### Queue health metrics by chat center (Operational Realtime API)

<table> <thead> <tr class="categoryrow"> <th><img class="tableIcon" src="img/Web_Messaging.png" /></th> <th><img class="tableIcon" src="img/mobileappmessaging.svg" /></th> <th><img class="tableIcon" src="img/sms.png" /></th> <th><img class="tableIcon" src="img/fb-messenger.svg" /></th> <th><img class="tableIcon" src="img/abc.svg" /></th> <th><img class="tableIcon" src="img/line.svg" /></th> <th><img class="tableIcon" src="img/google-rsc.svg" /></th> <th><img class="tableIcon" src="img/whatsapp.svg" /></th> <th><img class="tableIcon" src="img/web-messaging.svg" /></th> </tr> </thead> <tbody> <tr> <td>N/A</td> <td>N/A</td> <td>N/A</td> <td>N/A</td> <td>N/A</td> <td>N/A</td> <td>N/A</td> <td>N/A</td> <td>Yes</td> </tr> </tbody> </table>

An additional parameter has been added to the Queue Health method in the Operational Realtime API to allow retrieval of data per chat center.

Brands with multiple chat centers can now have a clear and separate view of the queue state and health for each chat center (usually operated by different vendors).

The queue health API allows retrieval of information on the queue state at the skill, account and at the contact center level. The metrics provided include number of connected or abandoned engagements, time to answer or abandon, queue size etc. This feature is available to all customers.

**How to enable**

To receive the metrics by chat contact center, one must also pass chatGroupID as a query parameter.

* When chatGroupID parameter is provided, the response will include data per skill, only for the skills associated with the chat Group.
  * Skills that are not associated with the chat group will not be included in the response.
* When chatGroupID parameter is provided, and also specific skill\\s - the response will include data per skill, only for the skills associated with the chat group.
  * If the chat group doesn’t have one of the requested skills associated with it, that skill will no be returned in the response.
* If no chatGroupID is provided, the response will provide data on all skills (as today).
    
 {: .note}
The chat center IDs can be retrieved using the [Skills API](https://developers.liveperson.com/administration-skills-appendix.html) (agentGroupId).