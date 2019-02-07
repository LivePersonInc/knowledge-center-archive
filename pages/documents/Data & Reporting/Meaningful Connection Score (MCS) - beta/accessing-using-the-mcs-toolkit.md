---
pagename: Accessing the MCS toolkit
categoryName: Data & reporting
subCategoryName: Web messaging
indicator: both
subtitle: Knowing what your consumers experience during the service and sales point-of-contact
  provides a unique opportunity to analyze your operations.
level3: ''
permalink: data-reporting-meaningful-connection-score-(MCS)-accessing-the-MCS-toolkit.html
isTutorial: false
date: 2019-01-22 12:28:52 +0000
isNew: false

---
## **Why use the MCS toolkit?**

* Evaluate your overall contact center performance as indicated by consumer experience.
* Benchmark agents and agent groups against each other, using MCS distribution to compare performance, recognizing weaknesses and strengths in the performance of agents or agent groups.
* Leverage data to inform performance reviews and coaching sessions with individual agents or groups, and use examples of the highest and lowest ranked conversations for valuable training cases.
* Drill down to a specific conversation under investigation and jump directly to the point in the conversation where the MCS was negatively affected.
* Perform custom offline analysis by exporting messaging interaction or engagement history API data direct to a CSV file via the the MCS toolkit data tables.

## **How to access the MCS toolkit**

There are three methods to login to the MCS toolkit:

1. Regular login (via LiveEngage username/password)
2. Simultaneous Login (via LiveEngage SSO) (_*available by request_)
3. Agent SSO login (via Agent SSO)

![](/img/LoginMCS1.png)

### **Regular login method**

1\. Any valid LiveEngage user may login at: [https://mcs.liveperson.net/login](https://mcs.liveperson.net/login "https://mcs.liveperson.net/login")

2\. Before login, select the dashboard type: messaging or chat

3\. Login via regular method will terminate any existing LiveEngage sessions

### **Simultaneous Login method**

1\. To enable simultaneous login, please contact your account manager

2\. Once enabled, access the simultaneous login at: [https://mcs.liveperson.net/sso](https://mcs.liveperson.net/sso "https://mcs.liveperson.net/sso")

3\. Enter your account number and select the dashboard mode

4\. You will be redirected to a LiveEngage login page and can continue to login as normal

5\. You may also bypass step 3 by adding your account number and mode to the URL: [https://mcs.liveperson.net/sso?accountId=123&mode=messaging](https://mcs.liveperson.net/sso?accountId=123&mode=messaging "https://mcs.liveperson.net/sso?accountId=123&mode=messaging") (replacing “123” with your account number without quotes, and mode with either “messaging” or “chat” without quotes)

### **Agent SSO method:**

In order to access the MCS toolkit via Agent SSO:

1. Refer to [SSO Guide]()
2. Ensure that the lpservice URL parameter referred to in the “configuration on the customer’s environment” section of the SSO guide is equal to mcs (e.g. lpservice=mcs)