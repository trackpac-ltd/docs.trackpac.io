# Importing Trackpac API into Postman

This guide will walk you through the process of importing Trackpac's OpenAPI specification into Postman. This allows you to easily test and explore Trackpac's API endpoints.

## Prerequisites

- A working installation of [Postman](https://www.postman.com/downloads/)
- [Your Trackpac API bearer token for authentication](authenticating.md)

## Step-by-Step Guide

### Step 1: Locate the OpenAPI Specification

The OpenAPI spec for Trackpac's API is available at the following URL: [https://v2-api.trackpac.io/openapi.json](https://v2-api.trackpac.io/openapi.json)

### Step 2: Import the OpenAPI Specification into Postman

#### Option 1: Direct URL Import

1. Open Postman and click on the "Import" button located in the top-left corner of the application.
2. Navigate to the "Link" tab.
3. Paste the OpenAPI URL (`https://v2-api.trackpac.io/openapi.json`) in the provided field.
4. Click "Continue" and then "Import" to complete the process.

#### Option 2: File Import

1. Download the OpenAPI JSON file from [https://v2-api.trackpac.io/openapi.json](https://v2-api.trackpac.io/openapi.json).
2. Open Postman and click on "Import" in the top-left corner.
3. Drag and drop the downloaded JSON file or browse to select it.
4. Click "Import."

### Step 3: Configure Authorization with a Bearer Token

1. In Postman, find the collection that has been imported.
2. Right-click on the collection and choose "Edit."
3. Navigate to the "Authorization" tab.
4. In the "Type" dropdown menu, select "Bearer Token."
5. Paste your Trackpac API bearer token in the "Token" field.

### Step 4: Configure the Base URL

1. Still in the "Edit Collection" window, navigate to the "Variables" tab.
2. Find the variable named `baseUrl`.
3. Set the "Initial Value" and "Current Value" to `https://v2-api.trackpac.io`.
4. Save your changes.

---

Congratulations! You have successfully imported Trackpac's API into Postman and configured it for authenticated requests. You can now proceed to test the API endpoints directly from Postman.
