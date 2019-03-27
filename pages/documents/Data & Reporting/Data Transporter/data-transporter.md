---
pagename: Data Transporter user guide
categoryName: Data & reporting
subCategoryName: ''
indicator: both
subtitle: ''
level3: ''
permalink: data-reporting-data-transporter-user-guide.html
isTutorial: false
isNew: false
date: 2019-03-27 13:28:04 +0200
published: false

---
The Data Transporter application connects you with LiveEngage report exports from the suite of LiveEngage Data APIs, enabling users to benefit from the power and agility of the LiveEngage open platform without the need to develop on top of our API based sources. Brands can now integrate with internal systems and reporting tools on recurrent schedules with greater ease and speed.

Data Transporter allows you to:

* Connect to multiple LiveEngage account API data sources
* Choose from a rich catalogue of raw data or formatted report exports
* Schedule exports from each LiveEngage data source
* Securely deliver your exports to: LP Cloud, Amazon S3, Google Cloud, and SFTP

![](/img/data-transporter1.png)

**Notes:**

* Data Transporter is currently a Beta feature - users must agree to our Data Application Beta terms of use upon login
* Login to Data Transporter requires:

1. Feature access by request (see your account manager)
2. A valid LiveEngage username and password (Admins only)
3. Two-factor authentication with an authenticator application

* Amount of scheduled tasks are limited per account
* Single sign-on not currently supported

{: .notice}_  
_Be aware that some elements and usability may change as we finalize this feature. Customers must agree to the terms of use after login.

## How to access Data Transporter

Access to Data Transporter is strictly by request - speak to your account manager to discuss pricing and enablement.

Once your account is enabled, you can begin by logging into the Alpha environment via [https://transporter.liveperson.net](https://transporter.liveperson.net "https://transporter.liveperson.net")

### Login Page

1\. Enter your Account Number (click Sign in)

2\. Then enter your LE User credentials

* LiveEngage Username
* LiveEngage Password

Note that logging into Data Transporter will terminate any existing LiveEngage sessions - however, you can login to LiveEngage after logging into Transporter without disrupting your Transporter session.

### Two-factor Authentication

For security reasons and to protect your data privacy, Data Transporter also requires mandatory login verification via Two-factor Authentication

![](/img/data-transporter2.png)

If this is the first time you are logging in, you will need to enroll - simply download an Authenticator application, such as:

\- Google Authenticator

* Authy
* 1Password
* LastPass Authenticator
* Okta

Once you have scanned your unique QR code with your device, enter the 6 digit verification code to continue. On subsequent logins, you will be prompted to enter a new 6 digit code as shown on your devices Authenticator Application - _do not lose your 2FA token._

## Getting Started in Data Transporter

![](/img/data-transporter3.png)

## Task Manager

The TASKS page will show each task you have configured in Transporter - if this is your first time logging in, no tasks will have yet been configured.

On the left-hand side is the navigation and alerts menu.

### Navigation

TASKS: see and manage all your scheduled tasks here

HISTORY: view or download completed reports from your destinations

REPORTS: view and select available business or integration type reports

LIVEENGAGE: setup your LiveEngage source authorisation

SFTP/AMAZON/GOOGLE: setup your report destination authorisation

ACCOUNT: configure your timezone and set your encryption keys

### Initial Configuration

Upon first use, please use the ALERTS notifications to navigate to each relevant section and follow the appropriate instructions.

1. Choose a timezone - this setting will ensure all scheduled reports and times will appear relative to your selected timezone
2. Setup encryption - for security reasons, Data Transporter encrypts all reports before transmission to your selected destination - as such, encryption must be activated by generating a Public/Private key-pair (or bring your own) - see encryption section
3. Setup LiveEngage - to get started, make sure you have authorised at least 1 LiveEngage account source - you can retrieve an API key from the LiveEngage console (speak to your account manager, or visit the connection panel if you’re not sure how)

## Encryption

For security and data protection, all reports shall be encrypted - Data Transporter supports PGP/GPG based encryption which conforms to the OpenPGP standard.

To get started with Encryption, you must first generate a Public and Private key-pair (PGP based) via the ACCOUNT section in Transporter - alternatively, if you have your own Public and Private keys (PGP based), you can provide these instead.

Once your keys are generated, your Public Key will be saved to your account, and you will be prompted to securely store your Private Key and Passphrase (these will not be saved)

{: .notice}  
**_Important:_** _if you do not save your Private Key and/or Passphrase offline, you will not be able to decrypt your completed reports - use GPG Suite or GPG4Win_

**Notes about Encryption:**

* Keys will be generated with an RSA key size of 2,048 bits (alternatively, if you bring your own, they must also be 2,048 bits)
* A secure Passphrase is required to generate a new set of keys - if you bring your own keys, enter the Passphrase you previously used to verify your keys are valid
* There are a variety of free and paid tools you may used to store your Public/Private key offline, and allow for 1-click encryption/decryption of GPG/PGP-based files
  * GPG Tools / GPG Suite (Mac OSX) (free)
  * GPG4Win (Windows) (free)

![](/img/data-transporter4.png)

## Connecting to LiveEngage

### API Key Setup

To extract report data from LiveEngage, Transporter requires that you configure a set of API keys from the LiveEngage console and enter them into Transporter in the LIVEENGAGE section.

When configuring API keys from the LiveEngage Console, ensure the following APIs are checked after key creation:

* Data: Data Access API, Engagement History / Messaging Interactions, Operational Realtime / Messaging Operations
* Administration: Users, Skills, Agent Groups

### Data Transporter Authorization

Once you have created your keys, enter them into Transporter via the LIVEENGAGE section and click create. Your API keys will be encrypted and stored securely.

After verifying your keys are valid, you will see the LiveEngage setting appear in the table below - it is now ready for use as your source when you configure your first report.

![](/img/data-transporter5.png)

## Report Tasks

### Available Reports

From the REPORTS section, select a report from the available catalogue. You can choose from:

1. Messaging Reports
2. Chat Reports
3. Admin Reports

Messaging and Chat reports are broken down into the following categories:

1. **Business Reports**: these are reports that have been formatted in some way to be more immediately useful for business use-cases, such as for import into Excel or other reporting tools that accept flat-file structures
2. **Historical Data Integration**: these are reports based on Engagement History / Messaging Interactions and provide a raw feed of the source data (in JSON format)
3. **Real-time Data Integration**: these are reports based on the Operational Realtime / Messaging Operations APIs and provide a raw feed of the source data (in JSON format)

Admin type reports can provide a recurrent list of Skills, Agents and Agent Groups.

In the future, additional reports will be added - have an idea for a report? [Let us know](http://goo.gl/forms/KA8TzlnEktOuhH372)

![](https://lh5.googleusercontent.com/PcNFCSB0xor7i7scILNhpDC2_2sqHZBUt9Z0RpczdG86uHGNoDD2dz1jdpN_ke_x9AG3z-XDFOiI8xxFIxYR9dxKqPvTLSBnO4SaQgAXwx41otFvFQoVbyO2tmM067BCsIE6rlnc =464x209)

### Report Catalogue

For detailed information about the report data sources, visitor our [Developer Community](https://developers.liveperson.com) - the following reports are available via Data Transporter out of the box:

![](https://lh4.googleusercontent.com/XJagRC0rT_MAErUTvaQFxgGEwXE3S19cYs8QB8-wyXL_KJ-UXc7em5K3i8a8L2EDL05cvUVmsWoknRFrI0OjR0b6bPsebKbFkXlJGgxOQ14cpkHXPB9H-vfwdjL09ai_v158evAq =624x123)

### Create Report Options![](https://lh6.googleusercontent.com/3F8jAjDvnhpEyNxM9hb_7MaGrXpR4x64lMKUZGhfLQyS7L6jqNhzgomDN-L0gNq89iMILXNshW_Gp3m7UMz5mKOy2CNZBtLcNd5R2JkZ_um1h3p-fyGVxlwKyycPhIxFsxh4IGlk =624x216)

After selecting a report, you will need to configure the following report options and then click Create Task.

* Description: a 2-3 word description about the report / task
* Format: the output file format (from a list of available options)
* Frequency: Weekly, Daily or Interval
  * For weekly, also choose the day and time to run _(timeframe = last 7 days)_


  * For daily, also choose the time of day to run _(timeframe = last 24 hours)_
  * For interval, also choose the time frequency to run _(timeframe will include the same amount of time as the time frequency selected)_
* Delay: in some cases, API source data may be delayed in its completeness - where data completeness is strictly important, choose an option to delay the report from executing. For example, you may select:
  * Daily at 12:00am with a delay of 6 hours: In this case, your report will run at 6am each day and include the data from 12:00am to 11:59pm of the previous day
* LiveEngage: the LiveEngage data source
* Destination: See below

For some reports, you may also have the option to select additional report parameters - if this option exists, it will be presented to you on the report creation screen.

After all options are completed, you can click Create task to save the task - it will begin running at the next scheduled time.

### Task Destinations

1. **LP Cloud** - secure storage on LP servers (provided for you)
2. **SFTP** - securely deliver to your own SFTP server (you provide restricted user/pass)
3. **Amazon** - AWS S3 bucket storage (you provide IAM keys)
4. **Google** - Google Cloud Storage (you provide IAM keys)

### SFTP

This option allows you to securely save files to your own SFTP server having provided restricted user credentials in the form of a username/password along with the server details.

### LP Cloud

This option allows you to securely save files to our existing LP servers - to retrieve files saved here, you must login to Transporter and download the completed reports from the HISTORY section - files saved to this destination will automatically be removed after 15 days.

### Amazon / Google

Securely upload files to your AWS S3 or Google Cloud Storage bucket -

**_Important:_** _for these destinations, when providing your authorisation credentials in the relevant section of Transporter, LivePerson strongly recommends to use IAM (Identity & Access Management) based authorisation keys._

### Editing Report Tasks

After you have selected your options, your report will be created and will run at the next scheduled time according to the frequency you selected.

To edit an existing report, from either the TASKS section, or from where you created the report, find the task you’d like to edit and click the pencil icon.

The interface will show that you are currently editing the task - update any of the available options and click Update task. In addition to editing the task, you may also:

* Disable the task using the toggle switch
* Select many tasks and disable or delete them
* Find that tasks history via the history icon

![](https://lh5.googleusercontent.com/IMCfrlEoYes8zf2FtKmFlylOleV2Dpiubt9553hC6gQ91TbwgiRLyExRwNcFbxnPIrSWAUoSgPkRkDYeuT4gDiIydA1mTuQ7Ygvm857uS9Vre_l5TwPcMl4_s4HtrG8TUnGlcayF =428x249)

## Task History

### Downloading tasks from Data Transporter

After a report task has completed, you can view the history from the HISTORY section via the Navigation menu.

To download the report to your browser, just click the download icon.

The HISTORY is also the location where you can find and retrieve reports delivered to LP Cloud - note that files saved to LP Cloud will automatically be removed within 28 days.

{: .notice}**_  
_**If you see a lock next to the download icon, this means you have not entered and verified your Private Key during this browsing session. Whilst your Private Key is not needed to download the encrypted file, if it is not provided, then after download, the file will not be decrypted and you will need to decrypt it yourself.

![](https://lh4.googleusercontent.com/EQzRFrnzjyimuRCiRrnTQTilro1g7HEtuQEPHSlpoJYn65gAIXyYtJIH7LYLXRCNKdgrAiD61d4O5cGEK127j9k00fSM3RUMRH3sEkLcK4bX1Qg4c77oILOEhRGtTTFg-GReksDp =524x132)

## Limitations

1. Files sent to Amazon, Google, or SFTP will be encrypted - it is up to the user to decrypt these files with their Private Key (there are many options to decrypt using PGP/GPG software)
2. Each account is limited by a maximum number of tasks - speak to your account manager to discuss task limitation options