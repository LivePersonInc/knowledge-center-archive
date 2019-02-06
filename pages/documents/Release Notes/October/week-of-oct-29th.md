---
pagename: 'Week of October 29th '
categoryName: Release notes
subCategoryName: 2018
indicator: both
subtitle: LiveEngage Release Notes
level3: October
permalink: Release-notes-2018-october-week-of-October-29th.html
isTutorial: false
isNew: false
date: 2019-02-06 14:15:16 +0200
published: false

---
These release notes include new features arriving to LiveEngage during October 2018. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

***Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important} _The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change._

## New Functionality

### Methods for Messaging Skill Segments (messaging operations API)

| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Web Messaging | Mobile App Messaging | SMS | Facebook | ABC | Line | Google My Business | WhatsApp Business | Chat |
| Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | No |

The Messaging Operations API is being enhanced to include operational data on the state of the queue and agent performance at the Skill level.

Essentially, segmenting messaging conversations by the skill assigned to a conversation allows you to measure both consumer experience and contact center operational targets, separately, for bots and agents, and the relationships between them while the consumer is navigated through the conversational flow.

  
![](https://lh4.googleusercontent.com/hTxFwdN46D-GkAyaL-GzYyQ7nfLD0JYDrLO7qaWAO5_2O87D5wQr7PK5ng8IFk4Qnta4k_YwsSaHoXkAOP9bZhNelqjjryV448P6AqGp2d59c8ECHJkQX6ps6jsJPSESOZZI3KXr =486x274)

The API will facilitate the retrieval of information on the queue state, consumer experience and agent performance at the skill or account level, including the number of skill segments assigned during a specific or cumulated time frame, the number of abandonments or non responsive agents and more.

This data will be reported in two ways:

1. Accumulated in intervals over the last 24 hours. The interval size is in minutes and can be configured, for example in buckets of 5 or 10 minutes.
2. The current state - the state of the operational KPIs at the moment that the API is called. The API exposes information about interactivity during conversations and wait times of current open conversations (unassigned / in-queue).

Full documentation, including a list of the newly exposed metrics, can be found in the [LivePerson Developers Community](https://developers.liveperson.com/messaging-operations-api-overview.html) and the [user guide.](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/User+guides/User+Guide_+Skill-based+messaging+operations+efficiency.pdf)

**How to enable**

Added to the existing Messaging Operations API. No additional enablement needed.

## Messaging Connectors

### WhatsApp Business - Multiple number support per LiveEngage account (LE-95291)

| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Web Messaging | Mobile App Messaging | SMS | Facebook | ABC | Line | RCS Business Messaging | WhatsApp Business | Google My Business | Chat |
| No | No | No | No | No | No | No | Yes | No | No |

This functionality enables brands to route multiple WhatsApp Business numbers into one LiveEngage account, and enables multiple Lines of Business to be facilitated and managed within the LiveEngage account, using LE's operational tools.

The WhatsApp Business connector is currently in Beta mode. Only brands that meet the requirements and have been approved by WhatsApp may participate.

**Please note:**

Busy Message - since LiveEngage does not support multiple consumer conversations in real time, if a consumer starts a second conversation with a WhatsApp business number connected to the same account, they will receive a configurable busy message to the WhatsApp conversation thread.

This document, materials or presentation, whether offered online or presented in hard copy ("LivePerson Informational Tools") is for informational purposes only. LIVEPERSON, INC. PROVIDES THESE LIVEPERSON INFORMATIONAL TOOLS "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.

The LivePerson Informational Tools contain LivePerson proprietary and confidential materials. No part of the LivePerson Informational Tools may be modified, altered, reproduced, stored in or introduced into a retrieval system, or transmitted in any form or by any means (electronic, mechanical, photocopying, recording, or otherwise), without the prior written permission of LivePerson, Inc., except as otherwise permitted by law. Prior to publication, reasonable effort was made to validate this information. The LivePerson Information Tools may include technical inaccuracies or typographical errors. Actual savings or results achieved may be different from those outlined in the LivePerson Informational Tools. The recipient shall not alter or remove any part of this statement.

Trademarks or service marks of LivePerson may not be used in any manner without LivePerson's express written consent. All other company and product names mentioned are used only for identification purposes and may be trademarks or registered trademarks of their respective companies.

LivePerson shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses resulting from the use or the inability to use the LivePerson Information Tools, including any information contained herein.

© 2018 LivePerson, Inc. All rights reserved.