---
sidebar_position: 4
---

# Add an Action

Use this guide to set up a new action that triggers alerts or forwards data based on various conditions.

## Step-by-Step Guide

1. **Navigate to Actions**: Locate and click the "Actions" option in the menu to access the actions section.

2. **Click the + Arrow**: In the actions section, click the "+" arrow, generally at the top right, to create a new action.

3. **Enter Action Name**: Type a unique name for your action for easy identification.

4. **Select Action Type**: Choose between "Alert" and "Forward Data to External System."

### If Forwarding Data

4.1 **Enter URL**: Provide the URL to which the data will be forwarded.

4.2 **Enter Header Tags**: Add any necessary HTTP header tags for the external endpoint in JSON format

### If Alert

5. **Choose Alert Condition**: Select the condition that will trigger the alert (Temperature, Humidity, Distance, Battery Level, Motion, CO2, Button Pressed/Alarm Triggered, Door/Window Open).

   - **For Temperature, Humidity, Distance, CO2**:

     - **Set Threshold**: Input the value that will trigger the alert.
     - **Above/Below**: Choose whether the alert triggers when the condition goes above or below the threshold.

   - **For Motion**:
     - **Out of Hours**: Optionally, set the alert to trigger only outside of specified hours.

6. **Select Contacts**: Choose which of your saved contacts will receive this alert.

7. **Choose Applicable Device**: Select the device from your account that this action applies to.

8. **Click Save**: After setting all parameters, click "Save" to finalize the action.
