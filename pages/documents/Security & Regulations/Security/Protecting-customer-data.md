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
All Consumer (Web visitors, Mobile Messaging) and agent interactions always go through the Conversational Cloud platform for control and validation, and to help ensure appropriate segregation and security.
LivePerson invests great efforts to ensure that all segregation and security controls are effective, and function according to the security model design. Independent security vulnerability assessments and penetration tests are performed on a regular basis, with specific test cases and scenarios that focus on the effectiveness of customer segregation controls. 

## Dataflow and Platform Diagram 
The diagram below outlines the main components of the Conversational Cloud platform, at a high level, as well as the dataflow process for agents and visitors communicating with the Conversational Cloud. The diagram helps provide a better understanding of how security controls are embedded in each layer.

![](img/protecting-customer-data-1.png)

This image shows the DDoS defense layers
![](img/protecting-customer-data-4.jpg)

## Network and Web Layer 
In web-based deployments (chat, messaging), the LivePerson web tag is hosted on the Brand website, and loaded by the visitor browser when visiting a tagged page. In an in-app messaging deployment there is no Web Tag involved, only secure web-socket API communication protected with tokens (JWT).
Each inApp messaging session is identified by a unique Conversational Cloud SiteID + unique token/JWT. 

Each web-chat session is identified by 3 unique identifiers: 
- Unique Conversational Cloud SiteID
- Unique Visitor ID 
- Unique Session ID
This ensures all data collected from each session is directed only to the relevant customer account. 

Messaging communication between the visitor and the agent during the engagement session is established over a secure websocket API.  Chat communication is established over TLS 1.2 encrypted HTTPS communication. 

This image shows the sample segregation between customers
![](img/protecting-customer-data-3.png)

## Cookie Configuration 
Similar to other internet based services, visitor sessions are based on cookies. 
The Conversational Cloud platform was designed to allow Brands define which cookie configuration will be utilized as part of its deployment. While the usage of third party cookies is safe and based on the same unique site ID segregation, the ability to use first party cookies provides an additional layer of security, as the cookies are associated with the Brand’s own domain. For additional details, click [here](https://developers.liveperson.com/guides-cookies.html)

## Customized Dedicated URL 
Brands can use a customized, dedicated (vanity) URL based on their own domain and certificates (for example chat.brand.com). The Conversational Cloud can host the customer issued certificate and associate the customer Site ID as the only Site ID that can be used by this certificate. The combination of Site ID validation with a dedicated URL adds an extra layer of protection that reduces potential risks of cross-account access.

## Data Storage
Consumer session information and interaction transcripts are stored on LivePerson’s storage servers. The data is collected by the Conversational CLoud platform and then transferred to the LivePerson data storage. The data is logically segregated and can be produced for a single customer without accessing another customer data. 

LivePerson collects data such as: chat and messaging transcripts, information related to the visitor browsing and activity on the tagged website. For detailed information please see [LivePerson’s Privacy Policy](https://www.liveperson.com/policies/privacy#_Toc465674440).

## Masking of Data at Rest
Prior to storing data in the storage servers, the Conversational Cloud provides two additional optional layers of protection for data at rest, for customers opting into the capabilities:
* Selective Data Masking for transcripts: The Conversational Cloud platform provides customers with an optional ability to identify specific sensitive data patterns and remove them from the transcripts prior to storing the transcript. The masking is based on a RegEx mechanism that identifies the sensitive pattern as configured by the customer, and replaces them with asterisks (*). 
* Download the data-masking data-sheet by clicking [here](http://base.liveperson.net/hc/s-5296924/cmd/kbresource/kb-96372195744679183/!DOWNLOAD?entryid=346624&attachid=40032) In addition, for messaging transcripts. Common Credit card patterns are masked at rest. Additional server side masking patterns can be added by the customer for messaging transcripts.


## Encryption of Data at Rest
### AES-256 GCM Data Encryption

**Description**  
Conversation transcripts and other [engagement attributes](https://developers.liveperson.com/engagement-attributes-types-of-engagement-attributes.html#visitor-info) can be stored encrypted upon client request on the LivePerson storage servers. Conversational Cloud stores various types of sensitive data in different data storage types for different retention periods. Implementing a strong encryption method is crucial for protecting such data from potential unauthorized access and for complying with laws and regulations dictated to LivePerson directly or indirectly by its customers. The encryption is using a 256-bit AES GCM encryption algorithm and controlled by the application server, not by the storage platforms.

**What’s New?**  
The new data-at-rest encryption solution is using the existing LivePerson in-house encryption library, enhanced to use AES 256 GCM encryption using Java8, and supports FIPS 140-2. Oracle DB was replaced by Hashicorp Vault as the key management service (KMS), providing full key management capabilities. All LivePerson services were updated to use Vault APIs, via the new encryption library, to fetch the keys for encrypt/decrypt operations.

**How do I turn it on?**  
The move to the new encryption is transparent and no actions are needed by customers.

**When will this be available?**  
We will start rolling out to customers in early February 2021(early adopters). Rollout should be finalized by the middle of Q2.

**What’s Next?  
In the next phases we are working on 
* A periodic automatic key rotation (currently done on-demand per site/account)  
* Encryption by default for all LivPerson accounts.  


## Application Layer     
Account data can only be accessed through the web-based console or LivePerson API’s.
In order to improve the security around user access to data, the Conversational Cloud has an extensive user management and access control tool. From a Login Policy through user permissions and IP restriction, all can be managed and fully controlled. Please connect with your account manager to enable that optional control.

The optional IP based restriction access list that is built into the platform ensures that access to data can only originate from trusted IP addresses or ranges, as configured by each customer. This means that even if the data is stored on a shared resource, the access per Site ID can only be established from within the trusted IP ranges. 

Note: As the unique Site ID validation is utilized in each request, the configuration is unique per customer account. One customer’s account policy cannot impact upon another customer’s policy.
These controls are extensively tested by independent third party security experts on a regular basis as part of the LivePerson security vulnerability assessment and penetration testing processes.

## GDPR & Data Privacy Resources
For information on GDPR & Data Privacy Resources, click [here](https://www.liveperson.com/policies/gdpr-data-privacy/).
For The EU General Data Protection Regulation (GDPR) Whitepaper, click [here](https://www.liveperson.com/sites/default/files/pdfs/LP-GDPR-White-Paper.pdf)
