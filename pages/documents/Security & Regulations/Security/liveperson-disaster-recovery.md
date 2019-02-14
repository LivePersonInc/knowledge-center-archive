---
pagename: LivePerson disaster recovery
categoryName: Security & regulations
subCategoryName: Security
indicator: both
subtitle: ''
level3: ''
permalink: Security-regulations-security-LivePerson-disaster-recovery.html
isTutorial: false
isNew: false
date: 2019-01-31 10:38:33 +0200

---
LivePerson maintains a full-scale, one-to-one ratio, disaster recovery facility, which guarantees a consistent service performance and minimal data loss in the event of a regional disaster.

## **Data center resiliency & redundancy**

### **Geo-Resiliency**

LivePerson operates out of two data centers in the US, serving mainly US-based customers: one in Virginia, and one in California. Within Europe, it operates out of two data centers, one in the UK, and one in the Netherlands, serving its European-based customers. LivePerson additionally has two servers in Australia for its APAC customers: one in Sydney and one in Melbourne. All data centers provide N+1 or greater UPS and cooling power. Every component at the LivePerson infrastructure is redundant, including the facilities used to operate the data centers.

![](/img/DR1.png)

## **Disaster recovery site synchronization**

All disaster recovery site resources are continuously updated by data synchronization

processes. In addition, all configuration changes of applications, databases, network and servers, according to the main sites, are also continuously synchronized. Data stores in an Active - Passive configuration replicate their data continuously.

## **Threat analysis and categorization**

### **Threat Analysis**

There are two scenarios based on different threats that are considered a disaster situation:

* Total farm failure
* Total LOB (Line of Business) failure

For each scenario, LivePerson identifies the critical components and dependencies that allow for the fastest recovery time.

## **Failover decision and recovery window**

LivePerson’s escalation policy determines that after a data center becomes non-operational, a senior management decision is required in order to failover to the disaster recovery site. Once a decision is made, it can take up to 30 2 hours minutes for the disaster recovery site to be fully operational and start serving customers.

## **Disaster recovery process**

Once one of the disaster scenarios above is identified, the situation is mitigated by executing the following steps:

* Dormant services at the disaster recovery locations are activated.
* After one hour (at most) where the issue is not mitigated in the main site we start a move to DR.
* Global DNS settings are updated to reflect the change of the primary data center role.
* The readiness of the disaster recovery site is verified.

## **Disaster recovery tests**

LivePerson’s disaster recovery plan is validated continuously and is tested at least once a year.

### **Test goals**

* Ability to have a process to move to DR that can be run by one production person and complete within one hour (at most).
* Verify the ability to start and operate all services and tools in DR without connectivity to the primary site.
* Determine if applications can support the expected workload in the disaster recovery data centers.
* Validate the operation of all system recovery assets.
* Find and resolve any bottlenecks, delays or failures during the failover activity to the disaster recovery site.
* Update and train applicable LivePerson personnel regarding failover procedures. Identify activities during the failover process that can be optimized or automated to improve SLA.
* Ensure that all internal technology teams which regularly use the data center facilities have access to the disaster recovery site.

## **Test strategy**

The disaster recovery test strategy consists of detailed evaluation, planning and documentation. The main objectives of the tests are:

* Define target time frame, scope and goals of each disaster recovery test.
* Perform dry runs and live tests, communicate the results, and keep track of historical tests. Dry run tests are executed using automatic tools based on standard procedures and templates.

## **Monitoring**

Beyond the ongoing system monitoring done in the DR sites, we implemented an end to end mechanism that constantly tests our services. The tests are based on our end to end scenarios running on our active sites. This monitoring mechanism gives us a high confidence level that all is ready to go when the time arrives and that nothing was broken between our scheduled DR tests above.

### **Additional information**

Further data center wide failure scenarios and mitigation procedures are discussed in LivePerson Business Continuity Plan (BCP) documentation.
