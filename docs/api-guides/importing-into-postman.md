# Importing Trackpac API into Postman

This guide will walk you through the process of importing Trackpac's OpenAPI specification into Postman. This allows you to easily test and explore Trackpac's API endpoints.

## Prerequisites

- A working installation of [Postman](https://www.postman.com/downloads/)
- [A Trackpac API key](authenticating.md)

## Step-by-Step Guide

### Step 1: Locate the OpenAPI Specification

The OpenAPI spec for Trackpac's API is available at: [https://api.trackpac.io/openapi.json](https://api.trackpac.io/openapi.json)

### Step 2: Import the OpenAPI Specification into Postman

#### Option 1: Direct URL Import

1. Open Postman and click on the "Import" button located in the top-left corner of the application.
2. Navigate to the "Link" tab.
3. Paste the OpenAPI URL (`https://api.trackpac.io/openapi.json`) in the provided field.
4. Click "Continue" and then "Import" to complete the process.

#### Option 2: File Import

1. Download the OpenAPI JSON file from [https://api.trackpac.io/openapi.json](https://api.trackpac.io/openapi.json).
2. Open Postman and click on "Import" in the top-left corner.
3. Drag and drop the downloaded JSON file or browse to select it.
4. Click "Import."

### Step 3: Configure Authorization with an API Key

1. In Postman, find the collection that has been imported.
2. Right-click on the collection and choose "Edit."
3. Navigate to the "Authorization" tab.
4. Leave collection-level authorization unset unless a specific request requires bearer auth.
5. Add an `X-API-Key` header to the requests you want to run and set the value to your Trackpac API key.

### Step 4: Configure the Base URL

1. Still in the "Edit Collection" window, navigate to the "Variables" tab.
2. Find the variable named `baseUrl`.
3. Set the "Initial Value" and "Current Value" to `https://api.trackpac.io`.
4. Save your changes.

---

You can now test Trackpac API endpoints in Postman using your `X-API-Key` header. Bearer-token auth is still available for older integrations, but API keys are the preferred option for new setups.
