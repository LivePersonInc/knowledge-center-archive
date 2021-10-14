---
pagename: WhatsApp quick start
categoryName: Getting started
subCategoryName: ''
indicator: messaging
subtitle: Connect with consumers on WhatsApp
level3: ''
permalink: getting-started-quick-start-guides-whatsapp-quick-start.html
isTutorial: true
date: '2021-10-12T00:00:00.000+00:00'
isNew: true
---

Connect WhatsApp to the Conversational Cloud.

## Requirements:

1. You must have a verified Facebook Business. To learn more about business verification click [here](https://www.facebook.com/business/help/2058515294227817?id=180505742745347). In case you business is not yet verified you can only send test messages in a trial experience to a limited range of numbers.
2. The user adding the number in Conversational Cloud must have the Campaign Manager or Administrator roles.
3. The user adding the number must be a manager of the Facebook Business.
4. Have the phone number ready that you plan to use for WhatsApp Business. This number should not yet be registered on WhatsApp messsenger or the WhatsApp Business App. In case it was registered on the WhatsApp Business app, please either follow [this guide](https://developers.facebook.com/docs/whatsapp/guides/phone-number#migrate), or request manual onbarding using the [WhatsApp Registration and Setup Form](https://www.liveperson.com/whatsapp-form/).
5. You must be able to receive phone calls or SMS on the phone number that you plan to use for WhatsApp Business. For example, routing the call may not be possible for some IVR (Interactive Voice Response) systems. In the case that you are unable to receive the call or SMS for verification, please fill out the [WhatsApp Registration and Setup Form](https://www.liveperson.com/whatsapp-form/) and we will assist you in using documented proof of ownership for the number.
6. Adding a number is not possible on trial accounts of Conversational Cloud.


## Step 1: Setup WhatsApp as a data source

Login to the [Conversational Cloud](https://authentication.liveperson.net/) and click on the **Campaign Builder** tab located in the left navigation bar. Click on **Data Sources** in the Campaign Builder footnote.

![](img/whatsapp-campaign-screen.png)

Click **Connect** in the WhatsApp Business tile.

![](img/whatsapp-data-sources.png)

## Step 2: Follow the embedded sign up process

Click on the **Add New Number** button and log in to Facebook. If you are already logged in, a window will pop-up asking if you would like to "Continue as `<your name>`"? Click to proceed.

Please follow the instructions in the pop-up window to create a new Facebook business or to select an existing one. After that, you'll be asked to create a new WhatsApp Business Account. In the last step, you will have to create a new WhatsApp Business Profile during which you'll have to verify the phone number that you plan to use for WhatsApp. Please note that it is not possible to change the display name yourself after it has been created. If it does ever needs to be changed, a support ticket must be raised to WhatsApp.  

Once the process is completed, the pop-up closes and a dialog will be presented that asks you to confirm the phone number and to select the main language of the account. Click on **Next** to complete the setup.

![](img/whatsapp-number-language-list.png)

It can take upto 10 minutes to deploy and configure the WhatsApp connector, the status is shown with a loading spinner. 

![](img/whatsapp-deployment.png)

## Step 3: Configure your business profile
Lookup your number in the table and click on "Edit Profile" in order to configure the Business profile that consumers will see in the WhatsApp app when messaging with your business.

![](img/whatsapp-edit-profile.png)

## Step 4: Configure additional settings
Lookup your number in the table and click on "Settings" in order to configure the following settings:

- **Show Customer Profile:** Show the customers profile (Name and profile picture) in the Conversational Cloud
- **Show Agent Name:** Show the name of the agent on the consumer side as part of every agent message

In addition to that, you can configure automated responses that are sent back to consumers.

![](img/whatsapp-edit-settings.png)

## Step 5: Send and receive messages from WhatsApp
Look up your number in the table and click on "Test Utilities" to open a popup containing link and QR to open the chat with the number. You can now test the setup by sending a WhatsApp message to the WhatsApp number that you connected to Conversational Cloud. When the message shows up in the Agent Workspace, you can respond as an agent and see the response in the WhatsApp App. 


Note that you can only send numbers to a limited range of numbers until your Facebook Business, Whatsapp Business account and display name have been approved. You can review the status of the WhatsApp Business account and the display name when you hover over the phone number entry in the table. To review the status of the Facebook Business verification, please log in to the Facebook Business Manager. 

![](img/whatsapp-test-utilities.png)
