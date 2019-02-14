---
pagename: Account security recommendations
categoryName: Security & regulations
subCategoryName: Security
indicator: both
subtitle: Recommended three steps for baseline account security
level3: ''
permalink: security-regulations-security-account-security-recommendations.html
isTutorial: false
isNew: false
date: 2019-01-23 13:50:43 +0000

---
When it comes to doing business on the web, security is always a top priority. In order for the online marketplace to thrive, businesses and consumers alike need to be assured that their sensitive data is well protected. LivePerson offers a secure, reliable and trusted service and platform through which online businesses can safely communicate with their customers.

We recommend a baseline level of protection on your account to ensure the utmost security of your data. For information on the full range of security features offered by LivePerson, please contact your LP account team.

{: .notice}  
To implement these settings, or to receive further information on LivePerson security options, please contact your account manager or LivePerson technical support.

The recommended three steps for baseline account security are as follows:

## Step 1: Set your password policy

The password policy settings provide more flexibility to define policies that match your corporate security requirements. Password policies enhance your system security by forcing users to create more complex passwords, or to change their passwords at regular intervals.

| Setting | Description | LivePerson recommendation | How to enable |
| --- | --- | --- | --- |
| Minimum number of characters | The minimum number of characters allowed for a password. | LiveEngage enforces a minimum number of 8 characters. | Contact LivePerson. |
| Maximum sequential characters | The maximum number of characters with numerically or alphabetically ascending or descending character codes that can be used in consecutive order in the password. | Set the value to 4. | Contact LivePerson. |
| Maximum occurrences of same character | The maximum number of times that the same character can be used in a password. | Set the value to 4. | Contact LivePerson. |
| Character type | Alpha character required: Defines whether the password must contain an alphabetic character.Number character required: Defines whether the password must contain a number character.Special character required: Defines whether the password must contain at least one character that is commonly referred to as a special character. Any of the following characters can be used as a special character: ! " # $ % & ' ( ) * + , - . / : ; < = > ? @ \[ \\ \] ^ _ \` { | } \~. | Enforce the use of at least two out of the three options mentioned above, for example, Alpha character required + Number character required, or Alpha character required + Special character, etc. |
| Allow username in password | Enables users to enter passwords that are the same as or include the username. | Disable. | Contact LivePerson. |
| Restrict commonly used password phrases | Restricts passwords that include commonly used password phrases. | Enable. | Contact LivePerson. |
| Expire after number of days | Forces users to change their passwords at regular intervals. | Change users’ passwords at least  once every 90 days. | Contact LivePerson. |
| Prevent using previous number of passwords | The number of previous passwords which the system will prohibit the user from reusing as a new password. | Set the value to a minimum of 12. | Contact LivePerson. |
| Maximum changes per day | The number of times the password can be changed within a single 24-hour period. | Set the value to a maximum of 3. | Contact LivePerson. |
| Apply policy to current passwords | Applies these rules to existing passwords. If this option is not selected, the password rules will only apply when a user changes the password, or a new user is added to the system. | Enable. | Contact LivePerson. |

For further information on LivePerson’s password policy, see [Login policy]().

## Step 2: Restrict your login options

LivePerson offers the following settings for restricting login options:

| Setting | Description | LivePerson recommendation | How to enable |
| --- | --- | --- | --- |
| Failed login policy | Number of consecutive failed login attempts after which the system will automatically and immediately disable that user's account. The account will remain disabled until either an administrator manually enables the account, or the specified number of minutes has passed from when the account was initially disabled. | Set the number of failed logins value to 10, and the number of minutes before enabling value to 30. | Contact LivePerson. |

For further information on LivePerson’s login options, refer to [Login policy.]()

## Step 3: Mask your sensitive data

| Setting | Description | LivePerson recommendation | How to enable |
| --- | --- | --- | --- |
| Dating masking | Identifies specific sensitive data patterns and removes them from the chat transcripts, prior to storing the transcript in the database. The masking is based on a RegEx mechanism that identifies the sensitive pattern and replaces it with asterisks (*). By using the data masking capability, sensitive data is not stored on LivePerson’s database servers. | Enable - Mask at least credit card data information. | Contact LivePerson. |
