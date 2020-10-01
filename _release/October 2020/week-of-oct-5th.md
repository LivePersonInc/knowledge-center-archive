---
pagename: Week of October 5th
categoryName: Release notes
subCategoryName: Web messaging
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-2020-october-week-of-october-5th.html
isTutorial: false
isNew: false
date: '2020-10-01'

---

These release notes include new features arriving October 2020. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

Please contact your LivePerson account team for the exact dates on which you will have access to the features.

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Fix SDE fetching logic [Third Party Bot Connectors Version 2.24.6] 
### Type: Bug fix 

The process to fetch SDE by the third Party bot platform experienced some recurring failures  due to a race condition. As the SDEs are not always present the moment the Bot platform gets the conversation creation event, it was experienced that during the fetching process it received  errors due to missing SDEs. In addition it was established that the platform unnecessarily retrieves SDEs after a bot restarted. 
The fix fetches the SDEs retrieval after the first message the bot receives/send. At this time the SDEs are already set. We also now check if the SDEs are already retrieved to prevent unnecessary calls.

## Fix faas Hooks [Third Party Bot Connectors Version 2.24.6]
### Type: Bug fix

Due to some changes made on calling Functions, the hooks functionality was broken. We updated the hook handling to fix the issue and additionally added tests to ensure the implementation of the hooks is always functioning properly.
The integration tests are simulating real faas functions calls which makes them more reliable.


