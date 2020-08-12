---
pagename: The new Dialog Editor
categoryName: Getting started
subCategoryName: Conversation Builder
indicator: messaging
subtitle: The Conversation Builder has been enhanced with the enhanced dialog editor
level3: Getting started
permalink: ai-bots-automation-conversation-builder-the-new-dialog-editor.html
isTutorial: true
isNew: false
date: 2020-04-06
redirect_from: ai-bots-automation-conversation-builder-coming-soon-to-the-conversation-builder.html

---
<iframe style="max-width: 750px;" src="https://player.vimeo.com/video/404681489?autoplay=1&loop=1&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

LivePerson’s Conversation Builder provides brands with an easy-to-use bot builder that allows non-technical staff, often the people who best understand a brand’s voice, to create, optimize and visualize bots.

Our customers using the Conversation Builder have provided great feedback, specifically around working within the application’s Dialog Editor. Some of the feedback was around managing many dialogs, searching through dialogs & interactions and understanding the sequence of interactions.

LivePerson is redesigning the Dialog Editor within the Conversation Builder based on this feedback. Here’s an overview of the major changes coming soon in an upcoming release. These changes will simplify bot building & drastically increase a bot builder’s efficiency. They bring with them two key benefits:

1. A **scalable** user interface that lets you easily manage a large number of dialogs
2. A **self-guided** interface that lets you easily create rules, without the need for coding

## Backwards compatibility

All of the usability changes that we’re about to introduce are backwards compatible with existing functional implementations. When we release the new user interface, you won’t need to make any changes to port your existing implementations. 

## What’s changing? 
With this new Dialog Editor, bot building will become a lot faster, easier and more intuitive.

## Dialogs
Dialogs that are now listed at the bottom of the screen will be listed in a panel on the left side, making it simple to scroll through the list when you have many dialogs in a bot. Each dialog will expand to show the interactions contained within it. When combined with the existing capability to name dialogs and interactions, these changes make finding and accessing what you need much easier. You’ll also be able to use the Search box to search by dialog name, interaction name, and interaction content.

Before:
<img style="width:900px" src="img/CSCB1.png">

After:
<img style="width:900px" src="img/CSCB2.png">

## User Says interactions

We’re renaming the User Says interaction to “Dialog Starter” since its purpose is to trigger a dialog’s flow. More importantly, you’ll be able to specify a pattern or intent for the dialog starter directly from the interaction tile itself.

Before:
<img style="width:900px" src="img/CSCB17.png">

After:
<img style="width:600px" src="img/CSCB18.png">
<img style="width:600px" src="img/CSCB19.png">

## NLU Assist

NLU Assist will now be called Assist. It will remain right where you’ve always found it (just to the right of the selected interaction), but we’re enhancing its functionality to make it easier for you to find the best intent to associate with the dialog starter.

Currently, the sample user message that you enter directly onto the dialog starter tile is used by Assist to suggest an intent to associate. Coming soon, you no longer enter this message on the tile. Instead, you’ll be able to explicitly perform a search to find the intent. Simply enter a user message or a training phrase in the Search box that's provided, and Assist will return a list of suggested, available intents.

Before:
<img style="width:900px" src="img/CSCB20.png">

After:
<img style="width:900px" src="img/CSCB21.png">

## Response Match & Action 

Response Match & Action sets will be called custom rules. 

Once you add a rule, it will be displayed directly on the interaction tile itself, making this information visible and enabling you to readily understood what the next action is.

The new Add/Edit Next Action Rule pop-up includes a self-guided interface that allows you  to create rules without the need for coding. The window reads like a script, simplifying the process of defining the rule, and making it error-free.

Before:
![](/img/CSCB3.png)

After:
<img style="width:700px" src="img/CSCB22.png">
<img style="width:700px" src="img/CSCB23.png">
<img style="width:700px" src="img/CSCB24.png">

## Menu Bar
The menu bar will be moved from the upper-right side of the screen to the upper-left. You’ll find that additional menu options, *including Releases and Versions*, are now accessible via a vertical, 3-dot menu just beside the menu.

Before:
![](/img/CSCB6.png)

After:
<img style="width:900px" src="img/CSCB27.png">

## Toolbar
The toolbar that you currently access in the lower-right corner (for things like Preview and Debug) will be removed. In the upper-right corner, you'll be able to click **Preview** to display the Preview panel. Inside this panel, click **Bot Logs** to toggle the display to show the bot's logs.

Before:
![](/img/CSCB8.png)

After:
<img style="width:900px" src="img/CSCB28.png">

## Interaction Toolbar
The interaction toolbar will move from the left side of the screen to the right. You’ll be able to use the right-facing caret on the toolbar to collapse it so that only the interaction icons are displayed. You’ll also be able to filter the icons that are shown.

Before:
![](/img/CSCB10.png)

After:
<img style="width:1000px" src="img/CSCB29.png">

## Interactions
Currently, an interaction’s next action is displayed inside the interaction’s details. Interactions will now show the next interaction directly on the tile itself, making this information readily understood. 

If you need to move an interaction, you’ll be able to do so using the draggable handle in the upper-middle area of the selected interaction.

Before: 
![](/img/CSCB12.png)

After:
<img style="width:600px" src="img/CSCB30.png">

## Interaction Settings

An interaction’s settings and details will now be accessible via a toolbar and a vertical, 3-dot icon in the upper-right corner of the interaction.

Before: 
<img style="width:600px" src="img/CSCB25.png">

After:
<img style="width:600px" src="img/CSCB26.png">

## New “No Match” option
We will add a new No Match option for use when defining conditions.

<img style="width:700px" src="img/CSCB31.png">

You’ll be able to use the No Match option in a final rule to catch all utterances other than those caught by earlier rules.

There’s also a new option to go to the current interaction as the next action.

Collectively, these two changes will let you easily repeat an interaction when the user’s utterance doesn’t match other defined rules. For example, assume you have a Yes/No multiple choice question. You’ve defined a rule for “Yes,” with a next action that’s appropriate. You’ve also defined a rule for “No,” with a next action that’s appropriate. You can use the new No Match option to define a 3rd and final rule to catch all responses other than “Yes” and “No,” and set the next step to “Current interaction.” This will repeat the question until the user responds with “Yes” or “No.”

## Versions and Releases
Functionally, the process for creating and managing versions and releases will remain the same. However, you will find that we’ve updated the UI so the presentation looks a little different. For example, you will create versions inside a modal dialog, which means you can access and do this easily from any location in the application.

Before:
<img style="width:500px" src="img/CSCB32.png">

After: 
<img style="width:700px" src="img/CSCB33.png">

For more information on the Conversation Builder - [click here](https://knowledge.liveperson.com/ai-bots-automation-conversation-builder-conversation-builder-overview.html)

