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
With photo sharing in Messaging channels, consumers can send a photo to an agent. This helps the consumer and agent communicate more clearly and effectively. .

## Messaging Connectors 

Photo sharing is available for the following messaging connectors: Google RCS Business Messaging, WhatsApp Business, Apple Business Chat and Twilio SMS (for Twilio, only available in the US and Canada). 

# **Configurations**

1. To enable the feature for any channel, please contact you LivePerson representative.
2. To configure In-App (as part of the SDK): [Android ](https://developers.liveperson.com/android-photo-sharing.html#enable-photo-sharing)| [iOS](https://developers.liveperson.com/consumer-experience-ios-sdk-photosharing.html#enable-photo-sharing)
3. For messaging connectors: - no additional configuration is required
4. Web: 
   1. In the window studio, click on the “+” sign inside the window to show the list of menu items.
   2. Enable the “Send image” option.

# ![](https://lh3.googleusercontent.com/kOQL6nxeNDxySlCDDm9pFQQM76LNXf4I71hPLlJ5mnXSsig7djrZ_kPb-uNtj34vpishDfc0DO94XUeQMPrfoacE-yk9JbSafcppKmiQ63RrMrB08P0jlifp26ZqbQnEvRrQtmAr =452x467)

1. Click save 
2. Publish the campaign

# **Solution**

## Consumer-Side: Share a photo

Consumers can share photos from two sources :

1. Take a photo using the device’s camera and share it
2. Share a photo from their device’s Photo Library

Consumer can then add more information to the image by adding a caption. They can also see photos that they have shared in the messaging history on other devices.

Once a photo was uploaded, it will be flattened as to remove any potential malware from it.

## Agent-Side: Receive a photo

The Agent has the following capabilities :

1. View a shared photo in the conversation as a thumbnail or full page.
2. View a shared photo in the engagement history and also for closed conversations.

# 

# **Photo Sharing Flows** (In-App experience screenshots)

Initiation

From the conversation window, consumer clicks on the camera icon to open the Photo Sharing capability:

**![](https://lh4.googleusercontent.com/Dgk-ussKKyEdWBfnkWUXN3jzauPjPHyUWVx4G-gOIkwQqK0Pu2HRqJzoP4CsvEa_WqrOf8_s0ozO4I6xFScY7LFJeAgYiD8sLFp5TSy6Y0EPMXZJfbKJLDv5gkJ_OSf7VaQB81dy =278x495)**



Two sharing options are presented to the consumer:

1. Take a photo using the device’s camera and share it
2. Share a photo from the Photo Library

**![](https://lh5.googleusercontent.com/V0Akb98ik5U2G4-9jY_mmwfV1rZm90RBSCFdy5V22e0T3YGGaZPD8Y0lYBmG7xRjTP3TI8KnDpPRBtPXRqM0VhOjKIjh1u8ltcssGXIISg6IA3m_JqIti8NlApWTfKTD_W7piF2B =278x495)**

Device Permissions

When choosing to share a photo from the device’s camera, the SDK will ask for access permissions to the device’s camera.

![](https://lh6.googleusercontent.com/Z7zUNaMxUp0Lb0l3CQf34qOYqVSokxVbkQ1Zp9Hxk7g4l1jBGCKipUj8rXa0jZ1VQKTbEsZukHIEcjDgq47wfXYsCkdeea4ipJXQVNjyh36etYG5rE68WU7bWnE-mruYc6k_jRzV =292x520)



When choosing to share a photo from the Photo Library, the SDK will ask for access permissions to the device’s photos.

![](https://lh4.googleusercontent.com/ta1xc8Qkf3_r6YVUmivA5Qbv9nd6PaxL29lLMxydztApkyzbyhWVTigLFNC1V5nYIYu90v8xNQEntBZ4X_Z0h6lK_6ODh-hklRJmPA8qmkjGwD1bY5VKJBndH3n0lLmXKgAvqt33 =292x520)

#### 

Sharing

### Take Photo

Choosing “Take Photo” will open the device’s camera. The consumer can then take a photo and share it or retake it if needed.

![IMG_0034.PNG](https://lh5.googleusercontent.com/Kfrh3DAlZa31IDFtlCZw-jJ0u_d_VMwITloNm9CIHJi03PnCYLF1_E6BqBJsULMPYtIK_B7Bc7huRgVnIIO9edI7zW3Ltu3Og-iDhrpoE7CMTS9gRhNF_3Wt_W0v7uiFhQuY2fwA =260x463)



The consumer can add a caption to the photo before sharing it.

![IMG_0035.PNG](https://lh3.googleusercontent.com/q7R3iq3HdmhjDbozHGkmdsHwnPJ9zFePYl54zqccP8a4rXN1yn-1jrhJ1kVtbwN0TCjccW0Q63Yzww_magnUUhog-92IDC7DQw2GasVA3CxcvhPag6QRY8Ybkihul6VNDRtKV6N5 =260x463)



When ready to share, the consumer can press on “send”.

![IMG_0033.PNG](https://lh4.googleusercontent.com/n8amtiIO9FSOcrn85T_kkZY0V3bwXFkqP72DHgLLH4BlT3mTgDhflM0V82W_YnpPp0dc5Lxcl6ZwwV0IPU-A6487-_HKgFyN7FUdJNNL8T2z0n2Phh8aXibZF1AVPJcIX-BCUz0m =260x463)



### Photo Library

Sharing a photo from the device storage will open the device’s Photo Library from which the consumer can choose a single photo and share it with the agent.

![](https://lh3.googleusercontent.com/A5STxZckEF0rqhOrcowDDho2p_U2Ov2cI5nhJO91UK2O8t00GS9-Fb21WkX92r6m-_zWd_V3AQiIMC2A5waT3UD8rLIrNCHLvXBmNrDysVJdIYjGVVZHBQqeYDhZfQIRd-mygLZl =292x520)



The consumer can add a caption to the photo before sharing it.

![](https://lh3.googleusercontent.com/_UdTAc-oGqQJA6BJa2_tTE_8YHfkhTvS_LhKpcLaE1bz5Q5t8-UjmWGCjJGNcZ0uNIFe9dNgfNf_4VtmuAfbgTSrcyk8-7RbF1osCF8_OX-uf9JkqjN6s58Hgxwe0N-ltQObvF0m =293x521)



When ready to share, consumer should press “Send”.

![](https://lh5.googleusercontent.com/RK-BbJwPaw-eLiqEvQBWCmIbvP1Xp0FSweWSlnsdU9TkqZXBdxzQJY_0KKx3o2jfI48_jnIRpuDQC5mqXCJGTPOejS3Zl3ZU0x5jr4nD8vO3PRh6eDfxUZ4QDMczndlG393lJNtp =294x522)

#### 

### Error and Retry

In case sharing failed, an error indication in the conversation will call their attention to the failure. 

![](https://lh5.googleusercontent.com/uOcb0VVGPbyCc6zZEAxwgvfGgNNeBgGRX6hlHA42tVO-IuP49b3m5duw83xpzTWGW4HSjVsTwEGV56ZVp5FDW-lmu3dpZ5DgA5f3or-lPkoFihwU_-vmH-IK-I8gB83MzgQ_KV7g =256x456)



When clicking on the message, a retry option is set available for the consumer to press to resend the photo to the agent.

![](https://lh6.googleusercontent.com/m2NqbZWtcweDTMIWopSVPuI2DQfLkx_j3tXKMaVSv7tJAfxRTb81A3_KI-QWymYNNeZzWtGVcafM6mjATLiJuUzjlRnMlSIfe36DEDdeQfBsCla9UMfDE5VVoEkA7n7S__ncmhP5 =256x456)

## Web experience screenshots

### Initiation

From the conversation window, consumer clicks on the ״+״ icon to open the actions menu:

![](https://lh3.googleusercontent.com/H7m2gsZrT5wyr6PIcfzu6SCLCyLCOZE_gJEU-jVo5tOxS81_im8QWOiwLMxarv4_JtE5hUTpSs1zg8bViYyWbxNGbqYixRDNBHeM9IQanR_EO2uBEUTw9xbg_juW1dbWJGoP9eR9 =285x401)

On the menu, choose “Send image”, to open the options for sending an image.

### Desktop

On desktops, after clicking on “Send image”, the user will be presented with the file system window, to select the image to send. The file system will only allow the user to select supported file types.



On Mac:

![](https://lh3.googleusercontent.com/urz2L0RcwOc3spWfxiGk7MdTcTcSwPjJH1T9L2zPa5qtcIVPifS2IvfC-xWq94Be9B9dHF8LMzCuzIzkQap_EhFBOdhwHQgB8qKNPhsdrlb3iMN1B028ViOTx9YNai3w7qGUpxhl =493x354)

On Windows:

![](https://lh4.googleusercontent.com/NikW17Oup_54dPL-jFI36fz9w3DRrwvoYCiLWiHdRJrMd1H9KayV7cmd1N1AnEtRmbqO48Z0nRaw6YeC9XWOw1arwmDrOeVVnZzoJpuZ8kvmkYnCRxKCjxqqar8YmMsMfCnzGVjD =473x341)

After choosing the image, it will be shown as a thumbnail in the transcript:

![](https://lh5.googleusercontent.com/W3EJ7pPm09V_Gnfli39fHZfxhBAfM2i_mb3IECDDdCTw-UGiUxwxoQxjYY6D_4vK5aqVgtr5ESjn4VqxM1UFJnF1P0D6ZmiDt6spIPDOoLZAFX9DNkLh8k5i4hmPZJYsLuUt8la_ =486x345)

Clicking on the image, will open the image on full screen:

![](https://lh3.googleusercontent.com/Xg6Rm_1f2lqmbylrAgUm-11__xWjUoSaku1mrdrZcHL5IZYcfXBLM7gvka9lW49ZGFdHsddRwFAq_SpbUJqDgDvJ_bLSYKKGUGWhg3TdqGwiJsRBkf64iYROSZeVXJdhDyMIa6oZ =495x353)

### Mobile (Web)

On mobile, after clicking on “Send image”, the user will be presented with the options to either take a photo with the device camera or choose from the photo library on the device.

On iOS:						On Android:

![](https://lh5.googleusercontent.com/suKSf7r4gSM7xP50eRzXamWodLIboTfqDFZIRjGF4Ai4J7uWoEzljIuXaKzD3CLX0F-QjB8OZUd9uVDF6WlGt0T57GacrFqBF2L7BGb1zuZt48n8phzaabPYwcCvi8tEPpKgHfCt =280x499)![](https://lh4.googleusercontent.com/-W5VjABtwxLak58m1CToyrAPzf2AUjp86wq-rk4d8jczDr66wRFEKxPQVdFbBtTBns7Nx04pV7hCnH3kwpHRybXoDEYTHvOJbnEWKdyzqkB-yCS7gtdkvETu2eZyWKppjtpZUMWR =281x499)

After choosing the image, it will be shown as a thumbnail in the transcript:

![](https://lh4.googleusercontent.com/u9K-dPfu7IdlK00ZVXhoQmScTj1duDy6OGINJ9LSj98qsKPzQ2O3Ip4a2qOBac3pj5yu5Tpjrgg5wgl_8jkkMRfPEcAMFapTiOGt-30h3nnftaAOR9NH8OGDqNG3Zi-6qlA-kQLh =216x348)

Clicking on the image, will open the image on full screen:

![](https://lh3.googleusercontent.com/YOo_RMg5fbphlFytdho2dpCleUq0rrTIs7SPLAj9wS6NAhdvaEY_kzFa7NU3Uhm0XYDCY3zH1SAImAnIRUg9VUmblAIA2RjFFiA7Pcta_90OW7vFJEmU8qlTeLiBeBlCP4ld3Dc7 =215x348)

### Error and Retry

In case sharing failed, an error indication in the conversation will call their attention to the failure. 

### ![](https://lh4.googleusercontent.com/7u3Vtg5AMMgV_g4bZSLYP3z0douhLOzLpSJQ841si6lX7PE7bVqHwgCtAPvpRLh8cyzFFw6XsGjM0RyyHm81BTEZcwEicyVGQw9xhEKgeW0GXndmvnxvjOEp0FsvZG_Zc2FVI6h6 =208x304)

### Agent Flow

When the agent receives the shared photo, it appears as a thumbnail in the conversation window.

![](https://lh4.googleusercontent.com/fjDMu4I4ZjOSxpk2b-diNmXw4JVbIs79u98yjWEw9kf_f-GeP-VrMrpnNjU14SeK0qBHqbdsq0Ergn1aXCNCpBWpgtylstuthV05INrAJUUfohfOyzOCNCn6-0euK6W3rHUoxt5l =511x515)



The Agent can preview the image by pressing the image thumbnail.

![](https://lh5.googleusercontent.com/5slKTHZCFHTp_xR9nd0fDTbmhtoqTBOk7YeOP2U4IYlSq7zghSdh6az0kDDcnMi8hFYa0pD6Ia-IeodNb_zFeTgfp_h6tawg_55dWtLW5XgMr3vt5nMzhq4QgRzwiYY0hoidWsL3 =624x313)

# Messaging Connectors - experience screenshots

## Initiation

### Apple Business Chat 

![](https://lh5.googleusercontent.com/_JQJGX8DfFv9WtRUMttsyIimvUTkjDUUW4pshuMJAn6E4d7dnQdKRlkBEEkq3NK85BM2GdGoHHcs8RoS_ohJNQiPEI3Aaa77MSfackr8ZMuOLVAGoXx6pRnZb3PwmqKzXrwo15IC =230x409)

### Facebook Messenger 

![](https://lh5.googleusercontent.com/V7ywFHtaa84zZ4nU1kfpN7dsx4otVUfCOCIoJa0jHsEPJgjPHh6ljS4YcPWk1MmNNzXHYYCdYb4QdJTU4fX6B3n33nC-43n1JBhTG-14zqQYi7-_HGKDxaV15IkidNZaNaouIC55 =277x492)

### Twilio SMS

![](https://lh5.googleusercontent.com/D5h6mztF7GYk7qP43JTmQW5f0HvQ-n2Yiwnu9Lcq_SWRVts145508R_oZeAOycDQsDr1VPi_LjcEhpG9A3huNONAbXTqyyDGbl62cCaS58rnOuE3bjHolDcRDEWD9YV6sgcHZRqv =264x471)

### WhatsApp Business

![](https://lh3.googleusercontent.com/3hHxG_jHW5GlD2FuDy4DINDwd5k6YWY89gU_fsyV0j3PQzw0Tm0yfzh2yWvHubATC4vVqxjHiCDpJaoVmT1hGfEAIJMDczhzQyLRcHQZP3tsfoQi1k2biHainBHMLVrnjpfRxTTM =267x474)

### Agent Flow for Messaging Connectors 

When the agent receives the shared photo, it appears as a thumbnail in the conversation window.

![](https://lh4.googleusercontent.com/othGXUw7mNoTKGPX2Pt-NbfAu6iP9zYMAV-UjKM5he9w559iSBjuojCNrIf4OFFARbjbQGSx3OQoSJDZvLiXtsb8OaFA9CXzaswrUw-KxxNlgbyP95aK56saXIHobqprZ211sEEz =624x292)

The Agent can preview the image by pressing the image thumbnail.

![](https://lh6.googleusercontent.com/Ko_0jzvdKzCtuuu3_JZix0HH3GStvP7b-HDY4MfLr2GRwJCZuo2pEr9hjzxeVkmgE7eRDxmpC-77ZHZ7-nGU8vb6QQdxWMVY1Rh7ClGC07GLhcz_4cAr1b7vg4zobh_2Oj1X0HbB =624x300)

# **Limitations**

* Only assigned agents can view shared images in a conversation, for both open and closed conversations. 
* Storage: In-App storage is up to 20 images (configurable).
* Actions on Photos:
  * User cannot remove a single image that they have shared (clear history will clear local device image only).
  * Send button from photo preview is always enabled.
  * No actions on photo (copy/ delete etc.).
* Supported image formats: png, jpg, jpeg and gif (non-animated).
* Behavior:
  * Photo size reduction:
    * Thumbnail: 30KB
    * Preview: 3MB
  * Photo preview screen is basic.
  * Square thumbnail for both landscape and portrait modes.