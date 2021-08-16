---
pagename: Conversation Builder Migration to GCP FAQs
permalink: conversation-builder-migration-to-gco-faqs.html
layout: page
---

<div class="card-container">
  <div id="success-stories" class="welcome-card lp-default">
      <p class="success-stories-header">Transforming Conversational Cloud <br> to Public Cloud</p>
  </div>
</div>
  
As LivePerson continues to innovate and provide new capabilities that empower brand-to-consumer conversations, we are migrating Conversational Cloud to a secure public cloud offering from Google -  Google's Cloud Platform (GCP). 

## FAQs
**Note: If you were notified that your account was moving to the GCP Cloud, please carefully review the information below:**

#### Q: What exactly is moving and to where?
LivePerson's Conversation Builder and we are replacing our Identity and Access Management solution with software of an award winning partner called Auth0 (via AWS). Both will be moving to the GCP.  

#### Q: Will I experience any disruptions during the move?
No. We do not expect any change in the experience for your brand. The bot enablement on the new environment will be coordinated via an automation script to ensure no message is lost. Consumers can continue to interact with your brand’s bots, but you may have to momentarily answer questions again from previous interactions.

#### Q: Will there be any downtime or data loss?
No expected downtime, and no data will be lost. During this move, we do not expect any downtime for bots. The bot migration is coordinated via an automation script to ensure a seamless transition of Bots, Intents, Knowledge Bases without any downtime.

#### Q: Can I act as usual during the migration?
We request that you do not update any configuration related to bots, intents, and Knowledge bases during the Migration Window*. If changes are made during the Migration Window they will not be carried over to the new GCP environment. 
* The exact Migration Window timeframe was communicated to your brand via email from LivePerson, or directly from your Account Manager. 

#### Q: How long will the Migration take?
We will move all the reporting data for bots to the new environment, which can take **approximately 8 hours** *.  As a result, you will temporarily not be able to see reporting data for the day before the Migration Window; only the current day's reporting will be available.  Once the data is migrated and verified, we will close the Migration Window (± 2 hours), after which you can see all the reporting data.

* **Note:** While the actual migration of bots and their enablement requires a shorter timeframe, we will dedicate the time to ensuring all reporting data is loaded and validated flawlessley.

#### Q: Do I need to login using a different URL?
No. We will automatically redirect the Brands’ users to the appropriate URL. If you have bookmarked deeplinks, we recommend that you update them.  The main login URL does not need to be changed.

#### Q: Will I see any loss in data from a reporting perspective?
During the Migration Window, you will temporarily not be able to view historical data but all data will be available immediately after the Migration Window closes.

#### Q: Are any user experience changes expected for using Bot Builder tools?
No. There are no software updates and this is mainly an infrastructure change to a new environment.


[For more information on the move to GCP, click here](/conversation-builder-migration-to-gcp.html).

<style>
nav.breadcrumbs {
    display: none;
}
</style>
