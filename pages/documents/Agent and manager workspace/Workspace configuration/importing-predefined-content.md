---
pagename: 'Importing Predefined Content '
categoryName: Agent & manager workspace
subCategoryName: Workspace configuration
indicator: both
subtitle: ''
level3: ''
permalink: agent-manager-workspace-workspace-configuration-importing-predefined-content.html
isTutorial: false
isNew: false
date: 2019-01-31 08:52:22 +0000
---
In order to import content successfully and avoid import errors, simply follow the best practice steps below.

{: .notice}
**Note:** Supported file type is .CSV file, UTF 8 encoding only

## Exporting and editing the file

1. Go to the **Predefined content library**
2. **Export your current .CSV file from LiveEngage and work on this file      as your template**
3. Edit content and translations to the CSV file. We recommend Google Spreadsheet, Numbers, or OpenOffice for this purpose. **UTF 8 encoding** only is supported
4. While editing the document, keep the following guidelines in mind:
   * **If you wish to modify an existing entry:** Do not change the item ID if you wish to keep any of the existing content, as if the ID is changed it will be added it as a new line.
   * **If you wish to delete an entry:** Delete the entire line from the file, including the item ID.
   * **If you wish to add a new entry:**
     * **Item ID column:**
       * The value shall contain a new positive integer and should not remain empty.
       * Simply add any non-existing (new) positive integer item number that not exist.
       * In order to avoid mistakes, it’s recommended to sort the existing item numbers and proceed with the same sequences.
     * **Language column:** To add a new translation row (to existing predefined content), duplicate the row, keep the existing item ID but change the language code as needed.
     * **Hot Keys column:** The Hot keys combinations are unique, you cannot use the same hot key in 2 different item numbers. You may leave this cell empty if hot key is not needed.

**For example:**

| Item ID | Language | Title | Text | Categories |
| --- | --- | --- | --- | --- |
| 11 | en-US | Welcome | Welcome to our messaging service.    What can we help you with today? | Greeting |
| 11 | en-UK | Welcome | Welcome to our messaging service.    How may I assist you today? | Greeting |
| 12 | en-US | Chat again | Please feel free to contact us at any time. | Closing |
| 22 | en-UK | Chat again | Thank you for your time.    Please do contact us again whenever you need assistance. | Closing |

{:start="5"}
2\. Save the edited file. Make sure to save it with a **UTF 8 encoding** only. Other encoding files are not supported.

{: .important}
**Note**: Using the ';' character in the file is not supported - ';' is considered as a new line in the import process and may create undesired behavior. In order to prevent this, avoid using this character in any of the cell values.

## Importing the file

1. Go back to the Predefined content page, and click the **Choose File**      button.
2. Locate your CSV file, and then click the **Open/Choose** button.
3. Click the **Import** button at the bottom of the page.  
   The import process will only perform actions on rows that have been      changed, as follows:
   * In case the item ID cell was left empty or an unsupported format was entered -> **ERROR** will display on LiveEngage system.
   * In case the item ID already existed in the file and an additional attribute in the row is changed -> This Predefined Content will be **UPDATED** on LiveEngage.
   * In case the item ID already existed in the file and no other attribute in this row is changed -> This Predefined Content will remain as it is on LiveEngage (**no operation** will be carried out).
   * In case of a new item ID (non-existing positive integer) -> The item will be **ADDED** as a new Predefined Content on LiveEngage.
   * In case one item ID is deleted from the file -> The item will be **DELETED** from LiveEngage as well.
4. While in progress, you can click the **Run in Background** button to continue working in the system. An icon will be added to the top bar and will notify you when the upload is complete. Pressing the notification will take you back to the import related page.
5. A CSV file with your current items will be automatically downloaded as a      backup.
6. If your CSV file was successfully uploaded, you will get a notification that      the process was successful and the Predefined content list will display      the updated content.
7. If the upload failed, relevant messages will be displayed.

{: .important}
**Note**_:_
Newly imported categories will not be visible (active) to the agent by default. To activate them, go to the Manage Categories page. In addition, newly imported languages will not be added to the Selected Languages by default. To add them, go to the Engagement languages.

### The Predefined Content CSV file

A CSV (comma-separated values) file stores tabular data (numbers and text) in plain-text form. The CSV file is the only accepted form for importing and exporting predefined content.

#### **Predefined content CSV file format**

The first line of your CSV has to include the field headers described below, in the same order, with each separated by a comma. Subsequent lines in the file should contain data for your content using those same fields in that exact same order. Here's a description of each field:

* **Item ID** (mandatory) – the Predefined Content      identifier. If you have different translations for the same predefined      content, it will be presented in different lines with the same Item ID.
* **Language ID** (mandatory) – a language into which the      Predefined Content is translated. The expected value is a language code,      for example: en-UK for British English.
* **Title ID** (mandatory) – the Predefined content      name/title. This string is limited to 75 characters.
* **Text ID** (mandatory) – the Predefined Content in the      language noted in the “Language” field. This string is limited to 8000      characters.
* **Categories** (an optional value) – a categorization of the      predefined content, for example, all welcome messages will be grouped      under the “Greetings” category. This field can contain multiple categories      separated by semicolons.
* **Status ID** (mandatory) – The predefined status indicates      whether the Predefined Content is available for use. The expected values      are:
  * Active
  * Inactive
* **Hot Key Letter** (an optional value) – a letter (a-z) that, combined      with the “Hot Key Number”, is a shortcut to the predefined content.
* **Hot Key Number** (an optional value) – a number (0-9) that, combined      with the “Hot Key Letter”, is a shortcut to the predefined content.
* **Skills** (mandatory) – the list of skills that are associated      with the Predefined Content item. Only Predefined Content that is      associated with the current engagement's skill will be displayed in the      Agent Workspace. This field can contain multiple skills separated by semicolons.
* **LOBs** (Lines of Business - an      optional value) – the list of Lines of Business that were associated with the      Predefined Content item. This field can contain multiple LOBs separated by      semicolons.

![](/img/importing-predefined-content-1b.png)

{: .notice}
**Note**: If you have different translations for the same predefined content, you will need to have one line per language. Besides the “Language” and “Title” and “Text” all values should be the same.
