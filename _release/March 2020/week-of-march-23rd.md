---
pagename: Week of March 23rd
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-march-week-of-march-23rd.html
isTutorial: false
isNew: false
date: '2020-03-18'

---

These release notes include new features arriving to LiveEngage during March 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## [Report Builder 4.3] Repeat Contact Rate KPIs in the predefined Messaging Performance dashboard 
### Enhancement 

<div class="tablecontainer">
<table class="releasenotes">
<thead>
<tr class="categoryrow">
<th>Web Messaging</th>
<th>Mobile App Messaging</th>
<th>Twilio</th>
<th>Facebook Messenger</th>
<th>ABC</th>
<th>Line</th>
<th>Google RCS</th>
<th>Google My Business</th>
<th>WhatsApp Business</th>
<th>CM</th>
<th>WeChat</th>
<th>Chat</th>
</tr>
</thead>
<tbody>
<tr>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>No</td>
</tr>
</tbody>
</table>
</div>

The‘Messaging Performance Dashboard’ will be enhanced to include the Repeat contact Rate KPIs allowing brands to measure resolution rates, the amount of labor time the brand is spending due to unresolved conversations, which Skills/Groups have the highest RCR and are my Auto-close settings causing premature closures.

The RCR page was added to the Brand level chapter to allow analyzing the RCR rates on the brand and skill levels.
The RCR has several KPIs, according to the predefined buckets (RCR 1 hour, RCR 1 day, RCR 3 days etc).
![](img/RB4.3_1.png) 
![](img/RB4.3_2.png)

## [Conversation Builder] Bot Groups
### Enhancement 
Conversation Builder - Bot groups

{: .notice}
This feature is available to all Conversatiob Builder enabled customers - Exact delivery dates might vary, and, therefore, brands might not have immediate access to all features on the date of publication. Please contact your LivePerson account team for the exact dates on which you will have access to the features.

Conversation Builder has introduced the concept of “bot groups.” With this feature, customers can organize a set of bots into a bot group. This provides better management and collaboration between bots. For example, a banking customer can group its Checking bots and Saving bots into respective groups. The bots are organized and displayed under their respective groups providing more efficiency and better accessibiilty. A bot developer from the Checking business division doesn’t have to search through tens of bots to find the specific bot - it can be quickly accessed from the Checking group.

Bot collaboration is another advantage of bot groups. Bots in a group can automatically discover other bots (within the same group) and collaborate with them. 

{: .notice}
If you want to support collaboration, you should enable that setting when you create the group and assign bots to it.

![](img/CBMarch1.png)

As a member of a group with collaboration enabled, whenever a bot receives a request that it can’t handle itself, it automatically checks within its group for a bot that can. If the bot discovers a capable bot, the transfer of the conversation happens automatically. When the bots collaborate, information about the conversation (i.e. the matched intent and user message) is transferred seamlessly.

Bot collaboration is designed to simplify your automation model and make it more robust. Because all bots within a bot transfer group can talk to one another (automatically transferring requests when necessary), you don't need a "router" bot for routing user interactions between bots. 

![](img/CBMarch2.png)

## [Conversation Builder] Agent Transfer interactions

Conversation Builder introduces a new Agent Transfer interaction. This is useful when you want to transfer a conversation from a bot to a live agent or from a bot in one bot group to a bot in a different group.

With the addition of this new interaction type, there are two ways to implement an escalation:
1. You can add an Agent Transfer interaction.
2. You can add an Integration interaction that uses a supporting LivePerson Agent Escalation integration.

There is no difference between the two approaches when it comes to performance. However, the use of the Agent Transfer interaction is a simpler, more convenient approach because it specifies all necessary information in the interaction itself. If the Agent Transfer interaction is used, a supporting integration does not need to be created.

Regardless of which transfer approach is used, ya new Transfer Bot Context check box will appear.
 
![](img/CBMarch4.png)

The Transfer Bot Context check box supports manual, bot-to-bot transfers only. If you check this, when the conversation is transferred from one bot to another, the matched intent or user message is automatically sent from the sender bot to the receiver bot. This lets the receiver bot know the appropriate dialog to start after the transfer enabling a smooth transition.

[](img/CBMarch5.png)
