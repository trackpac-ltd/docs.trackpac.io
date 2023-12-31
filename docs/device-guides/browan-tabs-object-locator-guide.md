# Browan Tabs TBOL100

Getting started with a Browan tabs object locator couldnt be easier. Follow our step-by-step guide below to get started.

## Create or Log in to Your Trackpac Account

- **First-time User**: Login to our portal at: [https://v2.trackpac.io](https://v2.trackpac.io). You can use Social logins to login or sign up with a username and password.

---

## Add Your Device

If you purchased a Trackpac enabled Tab, you will be able to add the device via QR code. otherwise you can either add the keys manually, or self host and forward us the devices data.

**Click Add Device'**: Go to the "Devices" tab and click on + Icon top right.

![Add Device Button](../assets/add-device.png)

You will then be presented with options as shown below

![Add Device Dialog](../assets/add-device-dialog.png)

**_Scan QR Code_**

Scan the QR code on the back of your Browan Tab Object Locator. The dialog will let you know when the QR code has been scanned successfully

**_Claim Code_**

Use this option if you dont have a camera handy to scan the qr, enter the code manually. In the designated field, type the claim code that came with your device.

**_Enter Keys Manually_**

This option hosts the device on Trackpac's LNS. you will need the dev_eui, app_eui and app_key to choose this option. Manually enter the device's keys and then select which device type.

**_Self Host_**

If you wish to host the device yourself and forward the data to us, this is the option to pick. Choose the option to self-host and follow the guidelines to set up the device on your own LoRaWAN server.

Ingest routes for devices can be found here: https://v2-api.trackpac.io/docs

**Congratulations**! You've now successfully signed up and added a device. You're ready to activate your device.

---

## Activate your device

When shipped, the Tab will arrive in flight mode. To wake it up hold the button down for 15 seconds, the LED will flash rapidly.

When waking it up for the first time, we reccomend making sure it has a good view of the sky to get its first GPS lock, when doing this in future its much quicker, the first lock can take some time.

If you ever need to check if the device is on, push the button and the LED will flash. If it doesnt wake it up by holding it down for 15 seconds.

If you ever have issue with the tab, the first thing to do is put it into flight mode by holding it down for 15 seconds, releasing when the LED flashes, and then repeating the process to wake it up.

---

## Monitor your device

Once a GPS lock has been found on your device, it'll start checking in.

The tabs update every 30 seconds when moving, and every 3 hours when static. If you ever want to take a reading, you can quickly press the button to initiate an uplink.

---

## Next Steps

- **[Add a Contact](../getting-started/add-a-contact)** - Setup contacts to get notifications
- **[Add a Geofence](../getting-started/add-a-base)** - Get notifications when your tab enters or exits an area
