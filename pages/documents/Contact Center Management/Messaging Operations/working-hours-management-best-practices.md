---
pagename: Working hours management best practices
categoryName: Contact center management
subCategoryName: Messaging operations
indicator: messaging
subtitle: " In-depth information on working hours management limitations, clarifications
  and best practices "
level3: ''
permalink: contact-center-management-messaging-operations-working-hours-management-best-practices.html
isTutorial: false
date: '2019-01-17T13:13:10.000+00:00'
redirect_from:
- shift-scheduler-limitations.html

---
### Workdays

The configuration of scheduled [Workdays](https://developers.liveperson.com/account-configuration-workdays-overview.html) allows you to set hours of operation for specific days of the week and assign them as the account's default settings or for each individual skill, which overrides the default settings.

During the specified hours of operation, consumers will receive working hours **auto messages** and the **expected time to response** message for the skill as defined in the account. Outside of the specified hours of operation, consumers will receive off hours auto messages and the expected time to response including the time until the next shift begins. See more on shifts in our [shift scheduler guide](/contact-center-management-messaging-operations-shift-scheduler-configuration-guide.html).

The expected time to response is also available for the agent, so it is clear to him when the consumer is expecting his reply.

### Special occasions

The configuration of [Special Occasions](https://developers.liveperson.com/account-configuration-special-occasions-overview.html) allows you to set specific dates in which there is an exception to the hours of operation defined by the Workdays API or through the LiveEngage UI. For example: working hours during public holidays. The expected behavior on the visitor side as far as automatic messages and time to response is exactly the same as Workdays.

{: .notice}
Special occasions do not modify hours of operation defined by Workdays, but instead override them.

## Terminology

**SLA = Service Level Agreement:** The response time configured within LiveEngage to handle messaging conversations for either all conversations (default), urgent conversations, or first time consumers. The SLA can be set per the account level (default) or be overridden per skill. To enable SLA per skill, please contact your account manager.

![](/img/working-hours-1.png)

**TTR = Time To Response**: This time is set according to the current shift status (online/off hours). If the shift is currently active, the TTR equals 0. If the shift is currently inactive, the TTR equals the time until the next shift will start.

**ETTR** = Expected Time To Response. The expected response time when the consumer will be answered by an agent. The ETTR is displayed to consumers during a messaging conversation via the automatic messages mechanism. ETTR = TTR + SLA.  **For example:**

* If the default SLA is 1 hour and the account is currently on an active shift, the ETTR = SLA = 1 hour.
* If the default SLA is 1 hour and the account is currently offline, and the next shift will begin in 12 hours from now, the ETTR = 12 + 1 = 13 hours.
* If the default SLA is 2 hour and the account is currently online, but the shift will end sooner than the SLA (i.e., in 1 hour rather than 2 hours), and the next shift will begin in 12 hours from now, then the ETTR = 12 - 1 = 11 hours. ETTR = time to next shift - (SLA - SLA that has already passed during original shift)

Head to [Shift Scheduler configuration guide](https://knowledge.liveperson.com/contact-center-management-messaging-operations-shift-scheduler-configuration-guide.html#configuration) to learn more on how to configure automated ETTR messages settings. 

## Clarifications

* If Workdays or Special Occasions are configured on the account level (as default), all the account’s skills will be working according to the account configuration, unless otherwise specified.

  This means:
  * If you wish to have a skill without special occasions, for example, you’ll need to set the skill’s special occasions field with a new special occasion item to override the account level configuration. This item should have an empty list of occasions.
  * Same goes for workdays - in order to override a skill’s workdays, you’ll need to set the skill’s workdays field with a new workdays item to override the account level configuration. This item should state the skill’s working hours.
* Time to respond is presented to the consumer in some of the automatic messages (e.g. welcome message), if the brand decides to add the time to respond dynamic text. If the calculated time to respond is due after the next shift’s end time: _The calculation of the time to respond =  time until the next next shift + (response time per skill - response time per skill that already passed in the current shift)_
* Setting multiple shifts or multiple occasions on the same days and hours will result in the following aggregation behavior:
  * Setting up multiple shifts on the same day: Overlapping working hours will be aggregated in runtime. e.g:  2 shifts are configured on Sunday: 10:00-15:00 and 12:00-18:00. The outcome: Sunday working hours are between 10:00-18:00.
  * Setting up multiple occasions on the same day:
    * Overlapping occasions will be aggregated in runtime.  
      e.g:  2 special occasions are configured on May 1st: working between 10:00-15:00 and 10:00-18:00.  
      The outcome: On May 1st, working hours are between 10:00-18:00.
    * In case 2, if contradicting special occasions have been defined on the same day, the runtime priority will be as follows:  
      First priority: Not working occasion  
      Second priority: Working occasion  
      e.g:  2 special occasions are configured on May 1st: working between 10:00-15:00 and not working all day long.  
      The outcome: May 1st will be a non working day.
  * No aggregation between working hours and special occasion hours on the same day. Special occasions override the working hours configuration.
* For customers who are using the “off hours by number of logged in agents” temporary workaround (to detect working hours according to the number of logged in agents), it is advised to **turn the temporary workaround OFF**, otherwise there is no guarantee that the expected time to response calculation will be accurate in all scenarios. The working hours feature is the permanent solution to the use case this workaround was intended for.

{: .notice}

Customers who keep the workaround ON will have the following experience (in most use cases, not 100% sure for edge cases):

* If the account has a default workdays configuration - this will be the configuration considered in runtime
* If the account has no default workdays configuration:
  * Skills that have their own working hours configuration → will work according to their own working hours
  * Skills that have no working hours configuration → working hours will be calculated according to the number of logged in agents
  * This behavior is not 100% guaranteed in some edge cases

## Limitations

### Limitations for both API and UI

The maximum length for a special occasion with shift status set to OFF is 30 days. This limitation applies when using the Working hours functionality both via the API and via the LiveEngage workspace.

## Best practices

In order to create ‘overnight’ shifts (e.g shifts that start at 9:00 pm and end at 1:00 am), they must be split into 2 separate shifts (first shift: 9:00 pm to 11:59 pm, second shift 12:00 am to 1:00 am)

## FAQs

**Q:** What happens when agent managers manually set off-hours while automatic scheduling rules exist?

**A:** When automatic scheduling rules exist, but the brand decides to go back to manual mode, the ETTR changes according to the manual configuration.

In the example above: If the agent manager manually changed to off hours in the middle of a conversation, the ETTR displayed to consumers will be according to the off hours configuration.

**Q:** Does the actual availability of agents on a LiveEngage account impact the working hours? If an agent is online in a skill during "off hours", what happens?

**A:** The agent’s availability does not affect the working hours. As stated above, the ETTR is affected by the configuration only and not according to the number of logged in agents.  
In the example above: If it’s currently the off hours and an online agent answers a messaging conversation, the consumer will still get the ETTR as if the account is currently off.

**Q:** Will the workdays and special occasions configuration affect the campaigns and engagements behavior? Meaning, if my account is currently on off hours, will engagements still be displayed to consumers?

**A:** The Workdays and Special Occasions configuration only affects the TTR messages sent to consumers via the automatic messages mechanism and does not affect the campaign timeframe and when engagements will be offered to consumers.

Engagements are displayed to consumers based on their related campaign timeframe only. If your campaign timeframe matches the workdays configuration, engagements will not be displayed. However, if you created a campaign available 24/7, it will still be displayed to consumers (even during off hours), and the ETTR messages will be displayed accordingly.