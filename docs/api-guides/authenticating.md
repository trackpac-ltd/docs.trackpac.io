# Authenticating with the Trackpac API

Trackpac supports two authentication methods:

- `X-API-Key` header, which is the preferred option for all API integrations
- Bearer tokens, which remain available for legacy workflows

## Recommended: Use an API Key

API keys are easier to manage than login-based bearer tokens and work across the full API.

### Generate an API key

1. Sign in to the Trackpac app at [https://app.trackpac.io](https://app.trackpac.io).
2. Open your account page at [https://app.trackpac.io/account](https://app.trackpac.io/account).
3. Create a new API key and give it a friendly name of at least 3 characters.
4. Copy and store the API key immediately. For security, it is only shown once and is stored hashed on our side.

Use the account menu to open your account page:

![Account Menu](../assets/header-my-account.png)

![My Account Menu Item](../assets/my-account-menu.png)

Then follow the API key creation flow:

![Generate API Key](../assets/generate-api-key-new.png)

![Set API Key Name](../assets/set-api-key-name.png)

![Copy API Key](../assets/copy-api-key.png)

You can also revoke existing API keys from the same account page at any time.

### Use the API key in requests

Send your API key in the `X-API-Key` header on every request:

```bash
curl --request GET \
  --url https://api.trackpac.io/devices \
  --header 'X-API-Key: YOUR_API_KEY'
```

## Legacy: Use a Bearer Token

Bearer-token authentication is still available for existing integrations, but new integrations should use API keys instead.

```bash
curl --request POST \
  --url https://api.trackpac.io/user/login \
  --header 'content-type: application/json' \
  --data '{
    "email": "YOUR_EMAIL",
    "password": "YOUR_PASSWORD"
  }'
```

Example response:

```json
{
  "access_token": "ACCESS_TOKEN",
  "expires_in": 86400,
  "token_type": "Bearer"
}
```

Use the returned token in the `Authorization` header:

```bash
curl --request GET \
  --url https://api.trackpac.io/devices \
  --header 'Authorization: Bearer ACCESS_TOKEN'
```

## Security Notes

- Treat API keys and bearer tokens like passwords.
- Store credentials in a secret manager or environment variable, not in source control.
- Revoke and replace an API key immediately if it is exposed.
