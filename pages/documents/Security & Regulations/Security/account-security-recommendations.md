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

The password policy settings provide more flexibility to define policies that match your corporate security requirements. Password policies enhance your system security by forcing users to create more complex passwords, or to change their passwords at regular intervals. See details below for [password policies.](security-regulations-security-account-security-recommendations.html#password-policies)

## Step 2: Restrict your login options

LivePerson offers the following settings for restricting login options:

| Setting | Description | LivePerson recommendation | How to enable |
| --- | --- | --- | --- |
| Failed login policy | Number of consecutive failed login attempts after which the system will automatically and immediately disable that user's account. The account will remain disabled until either an administrator manually enables the account, or the specified number of minutes has passed from when the account was initially disabled. | Set the number of failed logins value to 10, and the number of minutes before enabling value to 30. | Contact LivePerson. |

## Step 3: Mask your sensitive data

| Setting | Description | LivePerson recommendation | How to enable |
| --- | --- | --- | --- |
| Dating masking | Identifies specific sensitive data patterns and removes them from the chat transcripts, prior to storing the transcript in the database. The masking is based on a RegEx mechanism that identifies the sensitive pattern and replaces it with asterisks (*). By using the data masking capability, sensitive data is not stored on LivePerson’s database servers. | Enable - Mask at least credit card data information. | Contact LivePerson. |

LivePerson offers a number of security-related policies for the LiveEngage platform. This includes the ability to control each user’s password, and to enable restriction of user access to the system due to instances such as account inactivity, failed login attempts, IP address, and idle time.

{: .notice}  
Settings for security-related policies can be accessed and set by LivePerson employees only.

## Password policies

The password policy settings provide more flexibility to define policies that match your corporate security requirements. Your Account Manager can help you set policy rules for passwords that apply to all users on LiveEngage. Password policies enhance your system security by forcing users to create more complex passwords, or to change their passwords at regular intervals.

The following password policy options are available:

### Password length and formation

* **Minimum number of characters**: The minimum number of characters allowed for a password. LiveEngage enforces a minimum number of 8 characters for each password.
* **Maximum sequential characters**: The maximum number of characters with numerically or alphabetically ascending or descending character codes that can be used in consecutive order in the password. This restricts users from entering easily-guessed character sequences such as "abcd1234" in a password, even if it might satisfy other password policies. The range is from Unlimited to 9. If the Unlimited option is selected, the system will not validate the password for sequential character codes. LivePerson recommends setting the value of this option to 2.
* **Maximum occurrences of same character**: The maximum number of times that the same character can be used in a password. The range is from Unlimited to 9. If the Unlimited option is selected, the system will _not_ validate the password for how many times any specific character is used. LivePerson recommends setting the value of this option to 2.
* **Alpha character required:** Defines whether the password must contain an alphabetic character.
* **Number character required:** Defines whether the password must contain a number character.
* **Special character required:** Defines whether the password must contain at least one character that is commonly referred to as a special character. Any of the following characters can be used as a special character: 
'! " # $ % & ' ( ) * + , - . / : ; < = > ? @  \\ ^ _ \` { | } \~\'

{: .notice}  
LivePerson recommends setting a policy that enforces the use of at least two out of the three options mentioned above (e.g., Alpha character required + Number character required, or Alpha character required + Special character, etc.)

* **Allow username in password:** Enables users to enter passwords that are the same as or include the username. By default, this check box is selected, but LivePerson recommends that this check box should be cleared so that the system will not allow users to include the username in the password.
* **Restrict commonly used password phrases:** Restricts passwords that include commonly used password phrases. LivePerson recommends that this option should be enabled.

### Password duration

* **Expires after number of days:** This forces users to change their passwords at regular intervals. The range is from Never to 120. If the Never option is selected, user passwords will never expire. By default, this value is set to 90 days. LivePerson recommends to change users’ passwords at least every 60 days.
* **Notify users prior to expiration:** Notifies users via email that their password will expire in a specific number of days. You must select a number in the **Expires after number of days** parameter_._ The range is from Never to 14. If the Never option is selected, users will not be notified before their passwords expire.

{: .notice}  
Email notifications will be sent to users when their passwords are approaching the selected expiration dates. You can send notifications to the user’s registered email address as well as to a specific email address.

* **Prevent using previous number of passwords:** The number of previous passwords which the system will prohibit the user from reusing as a new password. The range is from never to 20. If the Never option is selected, then previous passwords can be reused. LivePerson recommends setting the value of this option to a minimum of 12.
* **Maximum changes per day:** The number of times the password can be changed within a single 24-hour period. If the Unlimited option is selected, then there is no limit for the number of password changes per day. LivePerson recommends setting the value of this option to a maximum of 3.
* **Apply policy to current passwords:** An option to apply these rules to existing passwords. If this option is not selected, the password rules will only apply when a user changes the password, or a new user is added to the system.

## IP policy

The IP policy restricts login access to LiveEngage, providing enhanced security and control. Login access is restricted to a specified list of IP addresses. If the user’s IP address does not belong to the IP address list, then the user will not be able to log in, and a message is displayed. You can request for your LivePerson Account Manager to enable or disable the IP policy.

Please note:

* When the IP policy is enabled, LivePerson's internal IP addresses maintain access to the account for maintenance and troubleshooting purposes only.
* The system allows access from any IP address if the IP Policy is not enabled, or if the IP Policy is enabled but the IP addresses list is empty.
* You can add or delete IP addresses even if the IP Policy is not enabled, but the system will only verify IP addresses when the IP Policy is enabled.

## Failed login policy

This policy specifies the number of consecutive failed login attempts after which the system will automatically and immediately disable that user's account. The next time the user attempts to log in, the system will display a message indicating that the login is not valid.

The account will continue to be disabled until either an administrator manually enables the account, or the specified number of minutes passes after the account is initially disabled. In the latter case, the system will re-enable the account after the specified time passes, and the user can then attempt to log in again up until the maximum number of consecutive login attempts occurs again. If the number of minutes to re-enable the account has not been set, the system will not re-enable the user’s account automatically, and you must contact your administrator to re-enable the account.

By default, the number of consecutive failed login attempts before the user’s account is disabled is set to 10. This can be set to any number between 1 and 20.

{: .notice}  
If a user’s account is already disabled for any reason other than failed logins, the system will not automatically re-enable the user.

## Reset password policy

When a password is reset through the Secure Password Reset feature, a notification email is sent indicating the login name of the user and the date and time that the password was changed. This notification will be sent to the default email address.

{: .notice}  
To modify the default email address, contact your Account Manager or LivePerson Technical Support.

## Auto-disable agent policy

Any agent that has not logged into LiveEngage within the number of days specified by the account's auto-disable operator policy will be automatically disabled. If an account is disabled, all the agent's access privileges are revoked, but the agent is not removed from system, and the administrator can manually enable the account when required.

This policy is enabled by default, with the number of inactive days after which the agent will be disabled set to 180. This can be changed to any number between 1 and 365. LivePerson recommends setting the value of this option to 60.

## Idle user policy

The idle user policy monitors user activity in the agent workspace and will, after a predetermined period of inactivity, log the user out of LiveEngage. If this policy is enabled, it will prevent an unauthorized user from using the Agent Workspace of an absent agent.

User activity is any mouse movement, mouse click or any keyboard activity in LiveEngage. Agent activity is limited to agent interaction with the computer only, and does not extend to the status of active chats. Any consumer-related actions are not considered as agent activity, for example if a consumer sends a message to the agent.

{: .notice}  
The idle user policy is not related in any way to the agent's current online state. Regardless of the user’s status, they will still be logged out after the specified period of user inactivity.

To set the period of inactivity before a user is logged out.

1. In LiveEngage, open the Users area. The following footnote is displayed.
2. Select the third dropdown menu.
3. Select the required period of inactivity before a user is logged out.

   ![](/img/Security-recconmendatations1-1.png)

   {: .notice}  
   This can be set by an administrator only.

## Administrator policies

There are currently 2 administrator policies available within an account:

* Exclusive LivePerson Administrator Policy
* LivePerson Local Administrator Policy

Each of these policies is described below.

## Exclusive LivePerson administrator policy

To assist you with support issues, a LivePerson technical support or account management representative may need to access your account. Login access enables LivePerson to view your account settings and data, and assist you with troubleshooting and account optimization.

The exclusive LivePerson administrator policy enables limited access to the account only for specific LivePerson administrators.

Only the administrators that are approved by you will be able to log into your account.

The following applies when the exclusive LivePerson administrator policy is:

* **Disabled:** All LPA users defined in the system will have access to the account.
* **Enabled:** Only LPA users that have been personally selected, qualified and approved will have access to your account.

{: .notice}  
This is an optional feature that is available on request and can be set by your Account Manager or LivePerson Technical Support.

## LivePerson local administrator policy

This policy enables a LivePerson administrator to have the same access permissions as a local site administrator. This means that the LivePerson administrator will have full access to the account with the ability to add new users and view chat transcripts for the account.

Only approved LivePerson administrators can gain local administrator access to your account.

{: .notice}  
Please be advised that by granting administrator permissions to the listed LivePerson employees, full access to your account will be granted. To set this feature please contact your account Manager.