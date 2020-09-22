---
pagename: Week of September 28th
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-september-week-of-september-28th.html
isTutorial: false
isNew: false
date: '2020-09-22'

---

These release notes include new features arriving September 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

##  Dialog templates
### Type: Enhancement [Conversation Builder]

**Channel**
This feature is available for all channels supported by the Conversational Cloud platform.

In this release, Conversation Builder introduces dialog templates. A dialog template is a dialog that a bot developer has intentionally made available as a “template” that can be imported by others.

To make a dialog available as a template, you define a manifest file that identifies all the items required by the dialog: other dialogs, domains, environment variables, and global functions. The manifest file determines the items that the system must include whenever the dialog template is imported.

Once you import a dialog template into a destination bot, it becomes a normal dialog within the bot, and the dialog functions as if you had created it from scratch.

Dialog templates are a great way to:

Formalize the import process for a dialog
Ensure that other bot developers import all required components supporting a dialog

