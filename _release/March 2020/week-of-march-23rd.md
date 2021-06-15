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
![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/RB4.3_1.png) 
![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/RB4.3_2.png)

## [Conversation Builder] Bot Groups
### Enhancement 

Conversation Builder has introduced the concept of “bot groups.” With this feature, customers can organize a set of bots into a bot group. This provides better management and collaboration between bots. For example, a banking customer can group its Checking bots and Saving bots into respective groups. The bots are organized and displayed under their respective groups providing more efficiency and better accessibiilty. A bot developer from the Checking business division doesn’t have to search through tens of bots to find the specific bot - it can be quickly accessed from the Checking group.

Bot collaboration is another advantage of bot groups. Bots in a group can automatically discover other bots (within the same group) and collaborate with them. 

{: .notice}
If you want to support collaboration, you should enable that setting when you create the group and assign bots to it.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/CBMarch1.png)

As a member of a group with collaboration enabled, whenever a bot receives a request that it can’t handle itself, it automatically checks within its group for a bot that can. If the bot discovers a capable bot, the transfer of the conversation happens automatically. When the bots collaborate, information about the conversation (i.e. the matched intent and user message) is transferred seamlessly.

Bot collaboration is designed to simplify your automation model and make it more robust. Because all bots within a bot transfer group can talk to one another (automatically transferring requests when necessary), you don't need a "router" bot for routing user interactions between bots. 

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/CBMarch2.png)

## [Conversation Builder] Agent Transfer interactions
### Enhancement

Conversation Builder introduces a new Agent Transfer interaction. This is useful when you want to transfer a conversation from a bot to a live agent or from a bot in one bot group to a bot in a different group.

With the addition of this new interaction type, there are two ways to implement an escalation:
1. You can add an Agent Transfer interaction.
2. You can add an Integration interaction that uses a supporting LivePerson Agent Escalation integration.

There is no difference between the two approaches when it comes to performance. However, the use of the Agent Transfer interaction is a simpler, more convenient approach because it specifies all necessary information in the interaction itself. If the Agent Transfer interaction is used, a supporting integration does not need to be created.

Regardless of which transfer approach is used, a new Transfer Bot Context check box will appear.
 
![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/CBMarch4.png)

The Transfer Bot Context check box supports manual, bot-to-bot transfers only. If you check this, when the conversation is transferred from one bot to another, the matched intent or user message is automatically sent from the sender bot to the receiver bot. This lets the receiver bot know the appropriate dialog to start after the transfer enabling a smooth transition.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/CBMarch5.png)

## [Conversation Builder] - Auto escalation
### Enhancement

A new Auto Escalation dialog type has been introduced with the purpose of freeing the consumer from being stuck within a question. This can happen when the bot doesn't recognize the consumer's input. Because the bot can't determine the next step that should happen, the fallback response is sent, and the consumer is returned to the place where the failure occurred. The fallback response is repeated after each unrecognizable input, resulting in a stuck conversation. 

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/CBMarch6.png)

The Auto Escalation dialog solves this problem by offering the consumer the option of being transferred to a live agent (or another bot). The number of times that the fallback response should be sent within a question can be ocnfigured. Once that threshold is reached, the Auto Escalation dialog is triggered automatically.

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/CBMarch7.png)

## Conversation Builder - URL shortening
### Enhancement

Conversation Builder has added a new shorten URLs bot setting, which you can use to enable the shortening of all URLs for a bot.

As an example, if URL shortening is enabled, a URL like this...
	
http://www.myexample.com/folder1/folder2/veryverylongstringhere.html

...is shortened to this:
	
	http://{abbreviate domain}/{unique code}

If you enable URL shortening, it’s applied to all URLs (for websites, images, etc.) in all types of interactions. The default value is Disabled (Off).

The shortened domain that’s used varies by region and might need to be whitelisted (e.g in channels like Facebook). The domain to whitelist appears below the setting. For more information on whitelisting, see the Conversation Builder documentation in the [Developers’ Community](https://developers.liveperson.com/liveperson-functions-development-whitelisting-domains.html)

![](//ce-sr.s3.eu-west-1.amazonaws.com/knowledge/img/CBMarch8.png)

{: .notice}
To support backwards compatibility, button interactions use URL shortening even though the new Shorten URLs setting is set initially to off. To disable URL shortening for buttons, enable the setting, save the change, disable the setting, and then save the change again. From this point forward, button interactions will respect the value of the setting and work like all other interactions.

## Conversation Builder - Granular permissions
### Enhancement
Two new granular permissions have been added:
1. Release Creator - Users with this permission can only create and delete versions, and create releases.
2. Release Acceptor - Users with this permission can only create versions and accept releases (i.e.upgrade bots).
These permissions are add-on permissions, not stand-alone permissions. 
Use these with the Bot Builder and/or Bot Builder Lite permissions as you require.

{: .notice}
The Bot Builder and Bot Builder Lite permissions can only view versions and releases. You’ll need to add on the new permissions above in order to grant bot developers the ability to create and manage versions and releases. (Administrators continue to have full privileges.)





