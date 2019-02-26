---
pagename: Validate identity of consumers during conversations
categoryName: Security & regulations
subCategoryName: Security
indicator: chat
subtitle: Validate the identity of a consumer during a conversation using the ID&V
  widget
level3: ''
permalink: security-regulations-security-validate-identity-of-consumers-during-conversations.html
isTutorial: false
isNew: false
date: 2019-01-23 13:54:57 +0000

---
The Identification and Verification (ID&V) solution enables customer care professionals (CCPs) to validate the identity of visitors during a chat.  At any time in a conversation, agents can decide to send an ID&V question to the visitor, requesting them to enter two random characters from their PIN or password, or any identifiable number or code, which they can then verify with the CRM system.

The ID&V solution works seamlessly for both desktop and mobile web.

## Benefits of using ID&V during chat

The ID&V widget provides brands with an extra security and validation layer when providing services regarding sensitive or financial information.

This extra verification can complement an automatic authentication process to ensure that the person chatting is the same person on the account.

For cases where a chat is deployed in a non-authenticated space, using the ID&V widget will provide agents with a form of verification.

To ensure extra security, only two characters are required from the visitor, so the agent is not exposed to the entire number and code. Moreover, The data is masked on the visitor side, to offer an additional protection layer.

## How the ID&V solution works

Described below is the step-by-step flow for agents and visitors. The ID&V solution is conducted via a designated button in the [agent workspace](agent-manager-workspace-agent-tools-for-live-chat-agent-workspace-for-live-chat.html).

![](/img/Validate-identity-consumers-during-conversations1.png)

The agent clicks the ID&V button in the agent workspace, and then completes the required indices and the string referred to, for example, PIN/Password.

{: .notice}  
The agent must complete all the required fields before the form can be sent to the visitor.

A dialog with the message: “Enter characters ___ and ___  from your ___ ” is displayed to the visitor in the chat transcript, along with both submit and cancel buttons.

![](/img/Validate-identity-consumers-during-conversations3.png)

Once the visitor clicks submit, the data is sent to the agent. If the visitor clicks cancel, they are returned to the chat and no data is sent.

{: .notice}  
If the visitor cancels the request, the agent receives a message indicating that the visitor closed the dialog and that an answer should not be expected. To get the ID&V information, the agent must resend the ID&V question.

The agent receives a notification indicating which information was submitted by the visitor, for example, visitor entered: 2 and 4.

![](/img/Validate-identity-consumers-during-conversations4-1.png)

The data is displayed as masked in the visitor transcript and in the database.

### Setting up the ID&V Solution

To set up the ID&V solution on your account, please contact LivePerson support.