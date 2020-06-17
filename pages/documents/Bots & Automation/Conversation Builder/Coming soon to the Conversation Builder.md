---
pagename: Coming soon to the Conversation Builder
categoryName: Getting started
subCategoryName: Conversation Builder
indicator: messaging
subtitle: All updates coming soon to the Conversation Builder including the enhanced dialog editor
level3: Getting started
permalink: ai-bots-automation-conversation-builder-coming-soon-to-the-conversation-builder.html
isTutorial: true
isNew: false
date: 2020-04-06

---
<iframe style="max-width: 750px;" src="https://player.vimeo.com/video/404681489?autoplay=1&loop=1&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

LivePerson’s Conversation Builder provides brands with an easy-to-use bot builder that allows non-technical staff, often the people who best understand a brand’s voice, to create, optimize and visualize bots.
Our customers using the Conversation Builder have provided great feedback, specifically around working within the application’s Dialog Editor. Some of the feedback was around managing many dialogs, searching through dialogs & interactions and understanding the sequence of interactions.

LivePerson is redesigning the Dialog Editor within the Conversation Builder based on this feedback. Here’s an overview of the major changes coming soon in an upcoming release. These changes will simplify bot building & drastically increase a bot builder’s efficiency. They bring with them two key benefits:

1. A scalable user interface that lets you easily manage a large number of dialogs
2. A self-guided interface that lets you easily create rules, without the need for coding

## Backwards compatibility

All of the usability changes that we’re about to introduce are backwards compatible with existing functional implementations. When we release the new user interface, you won’t need to make any changes to port your existing implementations. 

## What’s changing? 
With this new Dialog Editor, bot building will become a lot faster, easier and more intuitive.

## Dialogs
Dialogs that are now listed at the bottom of the screen will be listed in a panel on the left side, making it simple to scroll through the list when you have many dialogs in a bot. Each dialog will expand to show the interactions contained within it. When combined with the existing capability to name dialogs and interactions, these changes make finding and accessing what you need much easier. You’ll also be able to search by dialog and interaction name using the Search box.

Before:
![](/img/CSCB1.png)

After:
![](/img/CSCB2.png)

## Response Match & Action 
Response Match & Action sets will be called rules. Rules will be displayed directly on the interaction tile itself, making this information readily understood and enabling users to see what the next steps are.

The new Edit Rule dialog (shown below) includes a self-guided interface that allows you  to create rules without the need for coding. The Edit Rule dialog reads like a script, simplifying the process of defining the rule, and making it error-free.

Before:
![](/img/CSCB3.png)

After:
{: .sidebyside}
![](/img/CSCB4.png)
![](/img/CSCB5.png)

## Menu Bar
The menu bar will be moved from the upper-right side of the screen to the upper-left. You’ll find that additional menu options are now accessible via a vertical, 3-dot menu just beside the menu.

Before:
![](/img/CSCB6.png)

After:
![](/img/CSCB7.png)

## Toolbar
The toolbar that you currently access in the lower-right corner (for things like Preview and Debug) will now be accessible via labeled buttons and a vertical, 3-dot menu in the upper-right corner.

Before:
![](/img/CSCB8.png)

After:
![](/img/CSCB9.png)

## Interaction Toolbar
The interaction toolbar will move from the left side of the screen to the right. You’ll be able to use the right-facing caret on the toolbar to collapse it so that only the interaction icons are displayed. You’ll also be able to filter the icons that are shown.

Before:
![](/img/CSCB10.png)
After:
![](/img/CSCB11.png)

## Interactions
Currently, an interaction’s next step is displayed inside the interaction’s details. Interactions will now show the next step directly on the tile itself, making this information readily understood. 

If you need to move an interaction, you’ll be able to do so using the draggable handle in the upper-middle area of the selected interaction.

Before: 
![](/img/CSCB12.png)

After:
![](/img/CSCB13.png)

## NLU Assist
Please note: The NLU Assist remains right where you’ve always found it (just to the right of the selected interaction). The rest of an interaction’s settings and details will now be accessible via a vertical, 3-dot icon in the upper-right corner of the interaction.

Before: 
![](/img/CSCB14.png)

After:
![](/img/CSCB15.png)

## New “No Match” option
We will add a new No Match option for use when defining conditions.

![](/img/CSCB16.png)

You’ll be able to use the No Match option in a final rule to catch all utterances other than those caught by earlier rules.

There’s also a new option to go to the current interaction as the next step.

Collectively, these two changes will let you easily repeat an interaction when the user’s utterance doesn’t match other defined rules. For example, assume you have a Yes/No multiple choice question. You’ve defined a rule for “Yes,” with a next step that’s appropriate. You’ve also defined a rule for “No,” with a next step that’s appropriate. You can use the new No Match option to define a 3rd and final rule to catch all responses other than “Yes” and “No,” and set the next step to “Current interaction.” This will repeat the question until the user responds with “Yes” or “No.”

For more information on the Conversation Builder - [click here](https://knowledge.liveperson.com/ai-bots-automation-conversation-builder-conversation-builder-overview.html)

