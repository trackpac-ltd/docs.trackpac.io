# Migrating a Sensor from TTN to ChirpStack

## Introduction

Many LoRaWAN users are moving from **The Things Network (TTN)** to **ChirpStack** for more flexibility, control, and fewer restrictions. TTN’s free plan offers a great entry point, but it has strict limitations, and upgrading to **The Things Industries (TTI)** can become costly.

**Why move from TTN to ChirpStack?**

- **Device limits** – TTN free plan allows only a limited number of devices per application (currently 10). Adding more requires a paid plan.
- **Downlink limits** – Typically capped at 10 downlinks per day per device, which is restrictive for devices requiring frequent acknowledgments or configuration updates.
- **Uplink limits** – TTN enforces ~30 seconds airtime/day/device, limiting high-frequency or multi-sensor devices.
- **High upgrade costs** – TTI paid tiers can be far more expensive than running ChirpStack yourself or using affordable hosting.
- **Full control** – ChirpStack has no arbitrary device or message limits.
- **Flexible integrations** – Supports MQTT, HTTP, and database connections without commercial add-ons.
- **Private/hybrid options** – Run your own network, connect to Helium, or combine both.
- **Feature control** – Upgrade on your schedule and access new LoRaWAN features sooner.

---

## Step-by-Step Migration from TTN to ChirpStack (Hosted)

### 1. Log in to Your ChirpStack Portal

Log in to your Trackpac-hosted ChirpStack portal using the credentials provided by your administrator. Make sure you are operating within your assigned tenant/organization.

### 2. Create a Device Profile

- In the ChirpStack web interface, go to **Device Profiles** in the sidebar.
- Click **Add Device Profile** or **Create**.
- Fill in the required details to match your device:
  - **Name**: A descriptive name for your device profile
  - **LoRaWAN version**: (e.g., 1.0.3 or 1.1.0)
  - **Regional parameters**: (e.g., EU868, US915)
  - **Other settings**: Match your device's requirements
- Save the device profile.

### 3. Create an Application

- Go to **Applications** in the sidebar.
- Click **Add Application** or **Create**.
- Enter a name and (optionally) a description.
- Save the application.

### 4. Remove the Device from TTN

**Important:** Before registering your device in ChirpStack, remove it from TTN to avoid join conflicts. Delete the device from your TTN application.

### 5. Add the Device in ChirpStack

- In your ChirpStack application, click **Add Device**.
- Select the Device Profile you created earlier.
- Enter the device's **DevEUI**, **AppEUI**, and **AppKey** (these should match what was used in TTN).
- Save the device.

### 6. Set up Integrations (Optional)

- In your application, go to the **Integrations** tab.
- Add or configure integrations as needed (e.g., MQTT, HTTP webhook, InfluxDB).
- Enter endpoint details and authentication as required.

### 7. Test the Device

Power on or reset your device so it performs a join request. Use ChirpStack’s live device data/logs to confirm successful uplinks and downlinks.

---

## Quick Comparison: TTN vs ChirpStack

| Feature                | TTN Free Plan                 | ChirpStack                   |
| ---------------------- | ----------------------------- | ---------------------------- |
| Device limit           | 10 per application            | Unlimited\*                  |
| Downlink limit         | ~10/day/device                | No fixed limit\*             |
| Uplink airtime         | ~30 sec/day/device            | No fixed limit\*             |
| Private network option | No                            | Yes                          |
| Hosting cost           | Free (limited) / Paid for TTI | Included in Trackpac hosting |

\*Dependent on hardware, server resources, and fair use policy you define.

---

By migrating to Trackpac's hosted ChirpStack, you gain full ownership, scalability, and integration flexibility—without restrictive free-tier limits or the complexity of self-hosting.
