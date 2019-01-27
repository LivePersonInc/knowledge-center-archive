---
pagename: Photo sharing user guide
categoryName: Messaging channels
subCategoryName: Rich messaging
indicator: messaging
subtitle: With photo sharing, consumers can send a photo to an agent to help the consumer
  and agent communicate more clearly and effectively.
level3: ''
permalink: messaging-channels-rich-messaging-photo-sharing-user-guide.html
isTutorial: false
isNew: false
date: 2019-01-27 09:47:02 +0200
published: false

---
Photo sharing is available for the following messaging connectors: Google RCS Business Messaging, WhatsApp Business, Apple Business Chat and Twilio SMS (for Twilio, only available in the US and Canada).

# **Configurations**

1. To enable the feature for any channel, please contact you LivePerson representative.
2. To configure In-App (as part of the SDK): [Android ](https://developers.liveperson.com/android-photo-sharing.html#enable-photo-sharing)| [iOS](https://developers.liveperson.com/consumer-experience-ios-sdk-photosharing.html#enable-photo-sharing)
3. For messaging connectors: - no additional configuration is required
4. Web:
   * In the window studio, click on the “+” sign inside the window to show the list of menu items.
   * Enable the “Send image” option.
5. Click save
6. Publish the campaign

   ![](/img/photosharing1.png)

## Consumer side: sending a photo

Consumers can share photos from two sources :

1. Take a photo using the device’s camera and share it
2. Share a photo from their device’s Photo Library

Consumer can then add more information to the image by adding a caption. They can also see photos that they have shared in the messaging history on other devices.

Once a photo was uploaded, it will be flattened as to remove any potential malware from it.

## Agent side: receiving a photo

The agent has the following capabilities:

1. View a shared photo in the conversation as a thumbnail or full page.
2. View a shared photo in the engagement history and also for closed conversations.

## Photo sharing flows (mobile-app)

### Initiation

From the conversation window, consumer clicks on the camera icon to open the Photo Sharing capability:

![](/img/photosharing2.png)

Two sharing options are presented to the consumer:

1. Take a photo using the device’s camera and share it
2. Share a photo from the Photo Library

![](/img/photosharing3.png)

### Device permissions

When choosing to share a photo from the device’s camera, the SDK will ask for access permissions to the device’s camera.

![](/img/photosharing4.png)

When choosing to share a photo from the Photo Library, the SDK will ask for access permissions to the device’s photos.

![](/img/photosharin5.png)

### Take photo

Choosing “take photo” will open the device’s camera. The consumer can then take a photo and share it or retake it if needed.

![](/img/photosharing6.png)

The consumer can add a caption to the photo before sharing it.

![](/img/photosharing7.png)

When ready to share, the consumer can press on “send”.

![](/img/photosharing8.png)

### Photo library

Sharing a photo from the device storage will open the device’s Photo Library from which the consumer can choose a single photo and share it with the agent. The consumer can then send a picture with a caption as per the instructions above.

![](/img/photosharing9.png)

### Error and retry

In case sharing failed, an error indication in the conversation will call their attention to the failure. When clicking on the message, a retry option is set available for the consumer to press to resend the photo to the agent.

![](/img/photosharing13.png)

## Web experience screenshots

### Initiation

From the conversation window, consumer clicks on the ״+״ icon to open the actions menu:

![](/img/photosharing15.png)

On the menu, choose “Send image”, to open the options for sending an image.

### Desktop

On desktops, after clicking on “Send image”, the user will be presented with the file system window, to select the image to send. The file system will only allow the user to select supported file types.

On Mac:

![](/img/photosharinf16.png)On Windows:

![](/img/photosharing17.png)

After choosing the image, it will be shown as a thumbnail in the transcript and clicking on the image, will open the image on full screen.

![](/img/photosharing18.png)

## Mobile (web)

On mobile, after clicking on “Send image”, the user will be presented with the options to either take a photo with the device camera or choose from the photo library on the device.

On iOS:	

![](/img/photos20.png)					

On Android:

![](/img/photos21.png)

After choosing the image, it will be shown as a thumbnail in the transcript:

![](/img/photos22.png)

Clicking on the image, will open the image on full screen.

### Error and retry

In case sharing failed, an error indication in the conversation will call their attention to the failure.

![](/img/photos23.png)

### Agent flow

When the agent receives the shared photo, it appears as a thumbnail in the conversation window.

![](/img/photo24.png)

The Agent can preview the image by pressing the image thumbnail.

## Messaging connectors - screenshots

### Initiation

#### Apple Business Chat

![](https://lh5.googleusercontent.com/_JQJGX8DfFv9WtRUMttsyIimvUTkjDUUW4pshuMJAn6E4d7dnQdKRlkBEEkq3NK85BM2GdGoHHcs8RoS_ohJNQiPEI3Aaa77MSfackr8ZMuOLVAGoXx6pRnZb3PwmqKzXrwo15IC =230x409)

### Facebook Messenger

![](https://lh5.googleusercontent.com/V7ywFHtaa84zZ4nU1kfpN7dsx4otVUfCOCIoJa0jHsEPJgjPHh6ljS4YcPWk1MmNNzXHYYCdYb4QdJTU4fX6B3n33nC-43n1JBhTG-14zqQYi7-_HGKDxaV15IkidNZaNaouIC55 =277x492)

### Twilio SMS

![](https://lh5.googleusercontent.com/D5h6mztF7GYk7qP43JTmQW5f0HvQ-n2Yiwnu9Lcq_SWRVts145508R_oZeAOycDQsDr1VPi_LjcEhpG9A3huNONAbXTqyyDGbl62cCaS58rnOuE3bjHolDcRDEWD9YV6sgcHZRqv =264x471)

### WhatsApp Business

![](https://lh3.googleusercontent.com/3hHxG_jHW5GlD2FuDy4DINDwd5k6YWY89gU_fsyV0j3PQzw0Tm0yfzh2yWvHubATC4vVqxjHiCDpJaoVmT1hGfEAIJMDczhzQyLRcHQZP3tsfoQi1k2biHainBHMLVrnjpfRxTTM =267x474)

### Agent flow for messaging connectors

When the agent receives the shared photo, it appears as a thumbnail in the conversation window. The agent can preview the image by pressing the image thumbnail.

### ![](https://lh4.googleusercontent.com/othGXUw7mNoTKGPX2Pt-NbfAu6iP9zYMAV-UjKM5he9w559iSBjuojCNrIf4OFFARbjbQGSx3OQoSJDZvLiXtsb8OaFA9CXzaswrUw-KxxNlgbyP95aK56saXIHobqprZ211sEEz =624x292)**Limitations**

* Only assigned agents can view shared images in a conversation, for both open and closed conversations.
* **Storage:** In-App storage is up to 20 images (configurable).
* User cannot remove a single image that they have shared (clear history will clear local device image only).
* Send button from photo preview is always enabled.
* No actions on photo (copy/ delete etc.).
* **Supported image formats:** png, jpg, jpeg and gif (non-animated).

  **Behavior**
  * Photo size reduction:
    * Thumbnail: 30KB
    * Preview: 3MB
    * Photo preview screen is basic.
    * Square thumbnail for both landscape and portrait modes.