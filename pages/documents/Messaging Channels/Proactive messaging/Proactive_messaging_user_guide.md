---
pagename: Proactive messaging user guide
categoryName: Messaging channels
subCategoryName: Proactive messaging
indicator: messaging
subtitle: ''
level3: ''
permalink: messaging-channels-proactive-messaging-proactive-messaging-user-guide.html
isTutorial: false
isNew: false

---
LivePersons proactive messaging tool allows brands to engage in two-way conversations with their consumers by creating targeted outbound campaigns using rich channels. Consumer responses are routed into the LivePerson agent workspace, where conversations can be handled by humans, automation, or a mix of both. 

Proactive messaging enables brands to increase their ability to connect with a targeted consumer base leading to a higher probability of achieving goals. It enables a richer and more personalized consumer experience, while utilizing all the LiveEngage capabilities. SMS and WhatsApp are the two supported channels with more coming in the near future.

{: .notice}  
Proactive Messaging is currently available as part of an early adopter program. To join this program, please fill out [this form](https://forms.gle/wDBkzsCtT4CCQMFR9).

## Permissions
The LiveEngage administrator and campaign manager profile inherit Proactive administrator permissions, once the account has been enabled by a LivePerson Admin (assuming the brand has Twilio and Whatsapp).

## Login and access
Brands can access the Proactive Messaging tool from within LiveEngage via the Quick App Launch.

![](img/Proactive_userguide1.png)

Proactive Messaging supports role-based access. Currently, only users with Campaign Manager or Administrator user profile can access the tool. All other users (those with only Agent or Agent Manager user profile) will not see the tool in the Quick Launch menu.

## Navigation

### Landing page
![](img/Proactive_Messaging.png)

* After logging into the Proactive Messaging tool, users will be routed to the landing page by default.
* Users will see a list of the most recent proactive campaigns. This includes campaigns created by all users who have access to the tool. Within the list, users can see the campaign details such as campaign title, messaging channel i.e. SMS or WhatsApp, the number of recipients the message was sent out to, the launch date and the status of whether it was successfully delivered or failed.
* The landing page also shows high level metrics including:
 * Success rate - Percentage of total sent messages that are successfully delivered to the selected messaging gateway. In the    future, this will represent those delivered to the consumer.
 * Response rate - Percentage of the number of messages that get response over the total number of messages successfully          delivered to the messaging gateway.
 * Opt-outs - The number of consumers who opted out from receiving messages over the total number of consumers who received      the Proactive outbound messages.

### Analytics page
![](img/Proactive_userguide2.png)

* From the navigation bar, users have the option to click on Analytics tab to access the reporting metrics for Proactive Messaging. The current metrics are aggregated data at the brand level and not per campaign level. 
Please note, metrics per campaign level will be coming soon.
* The data can be filtered on this page by date by:
  * Date range from MM/DD/YYYY to MM/DD/YYYY
  * Quick date range, select: Today, This Week, This Month, Last 30/60/90 days, or Year to date
  * Skills - by default all skills are select but you can also select a single or a set of skills. When data is filtered to the full date range for the brand i.e. from the day they onboard to current date

* These are the metrics available:
  * **Success rate** - Percentage of the number of messages successfully delivered to the messaging gateway over the total number of messages sent. Soon, this will be updated to be the percentage of the number of messages successfully delivered to the consumer over the total number of messages sent.
  * **Response rate -** Percentage of the number of messages that get response over the total number of messages successfully delivered to the messaging gateway.
  * **Delivery Status** - This chart shows the total number of messages sent, the number of messages successfully delivered to the messaging gateway i.e. SMS-Twilio or WhatsApp and the number of messages failed to get delivered.
  * **Response Status -** This chart shows the total number of messages delivered, the number of messages delivered that got a response and the number of messages delivered that did not get a response.
  * **Messages Sent -** This chart shows the number of messages sent (success vs failed) per month/day and the number of responses per month/day. Message Sent chart reflects the data either on a daily basis when filter is for 2 or more days or hour basis when data is displayed for 1 day.

## Create a new proactive campaign

To create a new proactive campaign, users can click on New Campaign on the landing page and follow the 4-steps below:

### Step 1 - Compose Message

![](img/Proactive_userguide3.png)

* **Campaign Name** - Users need to define the campaign name. Choosing a good name for the campaign can be helpful for the agents who get assigned to the conversation once a consumer responds. For example, a campaign named “Subscription renewal for all North America users with licenses expired by 12/31/29019” will be helpful to the agents who receives the consumer response and differentiate it with other outbound campaign.

* **Channel** - Select the channel in which the outbound message should be sent on. Currently, there are three options.
  * SMS: SMS with Twilio Gateway
  * WhatsApp: WhatsApp or Prioritized
  * Prioritized: Prioritized is the step down capability from WhatsApp to SMS. This means that a message will initially be sent to the consumer via WhatsApp channel. If the consumer’s phone number isn’t eligible on WhatsApp, then the message will attempt to send via SMS text instead.

From number - Select the number you would like to send the outbound message from. If you onboard more than one number to the messaging channel, the
  
* **Route to skill** - Select the skill which the consumer responses should be routed to. These are skills created inside LiveEngage. Currently, not all LiveEngage skills will appear here. Only the skills that brands have specifically requested to be onboarded for Proactive messaging when setting up will appear will appear

{: .notice}  
Users can search for the skill in the dropdown. If the skill does not appear, please contact your LivePerson account team to have it added. In the future, all skills will be displayed.

* **Message content - SMS** 
The content of the outbound message for SMS can be typed in by users. For SMS, 42 characters are reserved by default for the opt-out text, which is required. This helps ensure that consumers who receive the outbound message have instructions on how to opt-out from receiving any future outbound messages if they choose to.

* **Messaging content - WhatsApp** 
The content of the outbound message on WhatsApp channel must be approved by WhatsApp first. Users will need to create an outbound message template (MTM), submit to WhatsApp. Once approved, then LivePerson will onboard the message templates users would like to use in Proactive Messaging tool.
 - WhatsApp message template may contain one or more variables. They have a format of {{1}}. After selecting a WhatsApp      message template with variable(s), make sure to replicate the variable(s) with an actual content i.e. ‘Hello {{1}}’ with ‘Hello Jane Doe’
- Users can create a WhatsApp message template and submit it to WhatsApp for approval via Proactive Messaging tool. Please    see section on “Creating WhatsApp message template” below for more information.

### Step 2 - Define Recipients
![](img/Proactive_userguide6.png)

Users can define recipients by two different methods, uploading the list of recipients via .csv file or typing in the recipient phone numbers and possible message content (if the user would like to have a different message per phone number).

#### Requirements:

* One recipient per line
* Recipient’s phone number must start with country code, then area code i.e. US phone number would be 1XXXXXXX
* For WhatsApp message template that has variable(s),users must enter the value(s) for the variable(s) as well. For .csv file, each variable is specified in a column immediately follow the phone number column. For typing in the recipients, each variable’s value is separated by a comma immediately followed the phone number.
* There is a 140 character limit for messages. This includes the opt-out text.
* Phone numbers must include country code and area code and can be added in the following formats:
  * 16001234567
  * +16001234567
  * 1(600)1234567
  * +1(600)1234567
* Once users specify a list of recipients, whether via .csv upload or typing them in, click Parse button to get a preview of the message being sent per phone number.
* If there are any syntax errors, users will see the highlighted phone number with the error.

{: .notice}  
When uploading a .csv file with a list of recipient, if there are any errors, changes will need to be made in the .csv file and re-uploaded. It is not possible to make a manual change inside the tool.

### **Examples**:
#### SMS example
Typing in 2 recipients would be:
12223334444
12223334445

#### WhatsApp example 
“Hello {{1}}, your credit card ending in {{2}} is about to expire. Reply back to chat with an agent to help you update this info”
Typing in 2 recipients would be:
12223334444, Nancy, 9999
12223334445, Bob, 8888

Uploading a .csv file with two recipients would look like this:
![](img/Proactive_userguide5.png)

### Step 3 - Schedule Campaign

Once the campaign has been created, it can be sent out.
In the future, users will have the capability to:
  * Schedule a proactive campaign at a future date
  * Specify the send rate i.e. 1 message per second
  * Guardrails will be available to specify the time and days of the week messages can be sent in. Messages will not be sent outside of the specified hours/times. This is to ensure brands can follow compliance for when they can reach out to the consumers.

### Step 4 - Preview & Launch

![](img/Proactive_userguide7.png)
* The final step is to review the details of the campaign before publishing, including the skill routing, the opt out text, the message content and the recipients.
* Users must check the box which states that they are responsible for collecting opt-in consent from consumers before reaching out to them and legally abide by the TCPA and GDPR compliance laws.

## **Customizing messages per recipient**

Whether users select SMS or WhatsApp, they can customize the message content per recipient.

### Via .csv upload: 
#### For SMS:
![](img/Proactive_userguide8.png)

#### For WhatsApp:
WhatsApp message template with two variables “Hello {{1}}, your credit card ending in {{2}} is about to expire. Would you like some help with renewal?”

![](img/Proactive_userguide9.png)

### Via typing in directly: 
For SMS:
12223334444, Hi Jane your subscription is about the expire …
12223334445, Hi Bob, your subscription is about to expire ...

For WhatsApp message template with two variables:
12223334444, Jane, 9999…
12223334445, Bob, 8888

## Skill Routing

* Skills need to be set up first in the LiveEngage Platform in order for them to be available in the Proactive Messaging tool. For more information on skills please click [here](https://knowledge.liveperson.com/admin-settings-skills-groups-connect-visitors-to-agents-by-skills.html).
* Once a new skill has been created, please reach out to your CSM and have them add this skill to the API.
* Once the skill is available to use, it will show up in the "skill" dropdown list on the proactive tool.
* The context of the initial outbound message will be visible to the agent in an agent widget when the consumer responds.

{: .notice}  
In the future, Proactive Messaging will be automatically populated with pre existing skills from within LiveEngage.

## Reporting

There is an analytics section built into the tool. Users can access this by clicking on the "analytics" tab on the top right of the screen. These metrics are aggregated for the entire brand/siteID. See Analytics section above <link>.

{: .notice}  
Reporting will soon be enabled per proactive campaign via Report Builder.

## Downloading Reports

* On the landing page, an ellipsis next to +New Campaign can be found that will allow users to download the details of all campaigns created from the date of the particular account/siteID.
* If the user clicks on a proactive campaign to view the details, there is also an ellipsis to download the detailed list of all recipients and messages in that campaign.

{: .sidebyside}
![](img/Proactive_userguide10.png)![](img/Proactive_userguide11.png)

## Receiving incoming messages

* When a consumer responds to an outbound message created from Proactive Messaging tool, a conversation is created within LiveEngage and is routed to an available agent with the assigned specific skill to which the Proactive campaign was created.
* The context of the initial outbound message will be visible to the agent through an agent widget.

{: .notice}  
Coming soon, the context of the outbound message will be part of the conversation transcript.

## Opt Out/In

* Opt In - This is managed by the brand entirely.
* Opt-out - SMS opt out is handled through Twilio pre-built opt out standards, and WhatsApp opt out is supported through the "block" in-built function. In future, we will have a LivePerson owned opt out feature.
* For Twilio opt out, please refer to this [article](https://support.twilio.com/hc/en-us/articles/223134027-Twilio-support-for-opt-out-keywords-SMS-STOP-filtering-).
* For WhatsApp opt out, please refer to this [article](https://faq.whatsapp.com/en/android/21080506/).

## Limitations

Proactive Messaging is currently launched in early adopters and will continue to be enhanced. In the meantime, the following are the currently known limitations:

1. Number of lines entered into the text area is limited to 100 lines.
If you choose to manually enter phone numbers rather than use a .csv file upload, there is a limit of 100 numbers that can be added. We suggest using a .csv file upload rather than manually typing out numbers for larger call list volumes.
2. The CSV file is limited today to 1000 recipients. This will be increased soon to 200k.
3. When Prioritized is selected as a channel, there is no opt-out text sent for SMS. For example, if brand configures WhatsApp as primary channel and SMS as fallback channel, when brand detects a consumer isn’t eligible for WhatsApp, we will attempt to send the same message to SMS channel, however there is no opt-out text included in the SMS text messaging being sent i.e. ‘To stop receiving messages just reply STOP’.
4. For SMS, there is a limit of 140 characters for the message content. This is to ensure your outbound message is sent in a single text instead of being split into two different text messages. When the message is over 140 characters, it will go out over 2 messages.

## FAQs

**If I have a LiveEngage account, can I automatically access Proactive Messaging?**
No, today we require brands to onboard first before they can start using Proactive Messaging. It is a powerful tool and only authorized users should have access to it. Once onboarded, only users with Campaign Manager or Admin user profile can access this tool from LiveEngage’s Quick Launch.

**Can anyone access Proactive Messaging?**
Proactive Messaging is accessed directly within LiveEngage from the quick launch menu. This option will only appear to users with Campaign Manager or Admin user profile.
