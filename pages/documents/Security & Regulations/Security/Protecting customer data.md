---
pagename: Protecting customer data
categoryName: Security & regulations
subCategoryName: Security
indicator: both
subtitle: Protecting customer data in a multiple-tenant environment
level3: ''
permalink: security-regulations-security-protecting-customer-data.html
isTutorial: false
isNew: false
date: 2020-06-18 

---
As a leading SaaS provider with more than 18 years of experience in the industry, we realize that working in a cloud-based multi-tenant environment may raise concerns related to the confidentiality and protection of sensitive data. 
We decided to turn this key issue into our core security offering in order to enable our customers to trust us with their most confidential data, while leveraging the benefits of our multi-tenant SaaS solution. 
This document outlines the main elements that LivePerson has implemented in each layer of the Conversational Cloud, in order to ensure the appropriate security when utilizing shared resources. 

## Key Elements of Segregation 
### Secure Infrastructure

In order to provide a secure platform and address key issues related to security, LivePerson has implemented robust controls throughout its infrastructure and architecture in multiple layers (defense in depth). The following concepts and elements represent the standard level of security that we believe should be part of any SaaS based solution. These controls are similar for any customer using the Conversational Cloud.

The Conversational Cloud infrastructure was designed to provide best-of-breed security in every layer. 
The service components are protected with several layers of security, for example Firewalls, ACLs, Load Balancers, dedicated DDoS protection technology, etc. The operating systems are hardened, and the infrastructure is regularly tested for potential vulnerabilities, both by an independent third party, and by internal LivePerson scans. 

## Unique Account Identifiers and Settings 
The Conversational Cloud platform is designed with inherent controls that were included in each layer to help prevent cross-account access between different customers. Each customer is provisioned with a unique Coversational Cloud account (site ID), and each request to the LivePerson servers is based on that unique identifier.

The unique customer account provides robust controls for dedicated user management, and dedicated customized security settings to align with each customer’s security policy, as outlined below.
All Consumer (Web visitors, Mobile Messaging) and agent interactions always go through the Copnversational Cloud platform for control and validation, and to help ensure appropriate segregation and security.
LivePerson invests great efforts to ensure that all segregation and security controls are effective, and function according to the security model design. Independent security vulnerability assessments and penetration tests are performed on a regular basis, with specific test cases and scenarios that focus on the effectiveness of customer segregation controls. 

## Dataflow and Platform Diagram 
The diagram below outlines the main components of the Conversational Cloud platform, at a high level, as well as the dataflow process for agents and visitors communicating with the Conversational Cloud. The diagram helps provide a better understanding of how security controls are embedded in each layer.

![](img/protecting-customer-data1.png)

## Network and Web Layer 
In web-based deployments (chat, messaging), the LivePerson web tag is hosted on the Brand website, and loaded by the visitor browser when visiting a tagged page. In an in-app messaging deployment there is no Web Tag involved, only secure web-socket API communication protected with tokens (JWT).
Each inApp messaging session is identified by a unique Conversational Cloud SiteID + unique token/JWT. 

Each web-chat session is identified by 3 unique identifiers: 
- Unique Conversational Cloud SiteID
- Unique Visitor ID 
- Unique Session ID
This ensures all data collected from each session is directed only to the relevant customer account. 

