# Authenticating with the Trackpac API

This guide outlines two methods to authenticate your API requests with Trackpac: retrieving the Auth0 bearer token from local storage or obtaining the token via a `curl` request.

## Prerequisites

- A Trackpac account
- Google Chrome browser for local storage retrieval (if using that method)
- Terminal access for making API calls (if using `curl`)

## Retrieve Auth0 Bearer Token from Local Storage

1. **Navigate to Trackpac**: Open Google Chrome and go to the Trackpac web application.

2. **Open Developer Tools**: Right-click and select "Inspect" or use `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Opt+I` (Mac).

3. **Go to the Application Tab**: Select the "Application" tab in Developer Tools.

4. **Expand Local Storage**: Find "Local Storage" on the left sidebar and expand it.

5. **Select Your Domain**: Click on the Trackpac domain to display key-value pairs.

6. **Find `access_token`**: Locate the `access_token` key.

7. **Copy Token**: Double-click to select the `access_token` value and copy it.

## Obtain Token via Curl Request

1. **Open Terminal**: Access your terminal.

2. **Use Curl to Login**: Run the following sample `curl` command to obtain the Auth0 token. Replace the placeholders with your actual credentials.

   ```bash
   curl --request POST \
     --url https://v2-api.trackpac.io/user/login \
     --header 'content-type: application/json' \
     --data '{
       "email": "YOUR_EMAIL",
       "password": "YOUR_PASSWORD"
     }'
   ```

3. **Retrieve Token**: You'll receive a JSON response containing the `access_token`. Copy and store it securely.

```json
{
  "access_token": "ACCESS_TOKEN",
  "expires_in": 86400,
  "token_type": "Bearer"
}
```

---

**Important**: Tokens are sensitive information. Do not share or publish them publicly.

---

You can use either of these methods to obtain your Auth0 bearer token for authenticating your API requests with Trackpac.
