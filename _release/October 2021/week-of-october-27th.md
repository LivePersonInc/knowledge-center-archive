---
pagename: Week of October 27th
categoryName: Release notes
subCategoryName: 
indicator: both
subtitle: ''
level3: October 2021
permalink: release-notes-2021-october-week-of-october-27th.html
isTutorial: false
isNew: false
date: '2021-10-27'

---

These release notes include new features arriving October 2021. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Conversation Builder bots now prevent consumer interruptions

### Type: Enhancement [Conversation Builder - Release 2021_11.0]

**Channels:** This enhancement is available for all channels supported by the Conversational Cloud platform.

**Availability:** All brands.

**Enablement:** This behavior is enabled by default. All new and existing bots now block “interrupt” messages from the consumer. No action or manual change by you is required to add support.

### Description
In this release of Conversation Builder, we make a change to all bots to prevent consumer interruptions. This means that, while a bot is responding to a consumer’s message, it now blocks(ignores) additional messages from the consumer until it has finished or until the default timeout of 15 seconds passes, whichever happens first. During this time, the bot doesn’t acknowledge any “interrupt” messages from the consumer. You can optionally configure a bot message to send in response, for example, “Please wait. I’m still responding to your last message. Thanks for your patience.”

Prior to this release, you had the option to stop consumer interruptions through a configuration change. Any bots that are already configured to handle interruptions will continue to work as they did previously. In this release, we simply change things so that this is the default behavior of all bots, both new and existing.

Please review the FAQs below for more information.

#### Why is LivePerson making this change?

Sometimes, a bot needs some time to respond to the consumer’s message. For example, to formulate its response, the bot might need time to make an API call to a third-party system.

We are making this change so that a bot is given sufficient time to send its response to the consumer. Without this “blocking” behavior, if the consumer were to send another message while the bot was still responding to their last message, the new message would be processed for matching intents and patterns. As a result, the bot could jump the consumer to an upcoming question in the current dialog, to another dialog, or even send a fallback response. This leads to a poor consumer experience.

Using this blocking behavior will help conversations stay the course and not get derailed inadvertently.

#### Can I customize the behavior?
Yes. To customize the behavior:
1. Add an environment that stores a set of **environment variables** for the bot. If the bot is already linked to an existing environment, skip this step and append the variables to the existing environment.
2. In the environment, add these three system environment variables:<br>
    **Name:** system_handleIntermediateUserMessage<br>
    **Description:** If true, the bot blocks(ignores) consumer messages while the bot is responding to the consumer’s last message. Keep this set to “true.”<br>
    **Type:** Boolean<br>
    **Default value:** true<br>

    **Name:** system_intermediateBotResponseTimeout<br>
    **Description:** This is the timeout period in milliseconds (e.g., 15000 = 15 seconds). Use this to customize how long the bot should block consumer messages.<br>
    **Type:** string<br>
    **Default value:** 15000<br>

    **Name:** system_intermediateBotMessage<br>
    **Description:** By default, while the bot blocks(ignores) consumer messages, it doesn’t acknowledge  them (i.e., this default value is BLANK_MESSAGE). Use this to specify a bot message to send in response to each consumer “interrupt” message, for example, “Please wait. I’m still responding to your last message. Thanks for your patience.”<br>
    **Type:** string<br>
    **Default value:** BLANK_MESSAGE<br>
    **Note:** If you want to customize the timeout period or bot message, you must add all three variables. In this case of customization, you can use all the default values or specify your own values, but not a mix of both.<br>
3. Link the environment to the bot if it isn’t already linked.

#### Can I disable the behavior?
Yes. To prevent the consumer’s context from changing inadvertently, LivePerson recommends that you keep the blocking behavior enabled. However, you can disable it if you want.

To disable the blocking behavior:

1. Add an environment that stores a set of **environment variables** for the bot. If the bot is already linked to an existing environment, skip this step and append the variable to the existing environment.
2. In the environment, add just this one environment variable:<br>
    **Name:** system_handleIntermediateUserMessage<br>
    **Description:** If true, the bot blocks(ignores) consumer messages while the bot is responding to the consumer’s last message. To disable the blocking behavior, set this to “false.” If false, every consumer message is processed by the bot for matching intents and patterns.<br>
    **Type:** Boolean<br>
    **Default value:** true<br>
3. Link the environment to the bot if it isn’t already linked.

#### Previously, I enabled this behavior by manually adding the environment variables discussed above to an environment. Does my implementation still work?
Yes. As mentioned above, in previous releases, the blocking behavior was existing functionality that you could manually enable by adding system_handleIntermediateUserMessage, system_intermediateBotMessage, and system_intermediateBotResponseTimeout to the environment that’s linked to your bot. If this is your case, your implementation still works, and no change is required by you. Your custom values for the variables are simply used to control the behavior. The feature will work as it did previously.

## Twitter self-service - Management console

### Type: New Feature [Social Messaging]

**Channels:**

<div class="tablecontainer">

<table class="releasenotes">

<thead>

<tr class="categoryrow">

<th>Web Messaging</th>

<th>Mobile App Messaging</th>

<th>Twilio</th>

<th>Facebook</th>

<th>Twitter</th>

<th>ABC</th>

<th>Line</th>

<th>RCS Business Messaging</th>

<th>Google My Business</th>

<th>WhatsApp Business</th>

<th>CM</th>

<th>Chat</th>

</tr>

</thead>

<tbody>

<tr>

<td>No</td>

<td>No</td>

<td>No</td>

<td>No</td>

<td>Yes</td>

<td>No</td>

<td>No</td>

<td>No</td>

<td>No</td>

<td>No</td>

<td>No</td>

<td>No</td>

</tr>

</tbody>

</table>

</div>

#### Description
Twitter configuration is now self-serviced via the Management Console. 

#### Availability: 
All brands.

![](img/week-of-october-27th-1.png)
![](img/week-of-october-27th-2.png)