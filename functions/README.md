# Preparing your local environment.

Using the Google Cloud Functions Emulator.
https://github.com/googlearchive/cloud-functions-emulator

# How to deploy and run
## On your local

```
functions-emulator start
functions-emulator deploy helloWorld --trigger-http
functions-emulator call helloWorld
```

## To CloudFunctions

```
gcloud functions deploy <FUNCTION NAME> --runtime nodejs8 --trigger-http

# Run
curl https://<REGION>-<PROJECT_NAME>.cloudfunctions.net/<FUNCTION_NAME>
```

# Environment variables

The environment variables are on the `.env.yaml` file.
The `.env.yaml` does not share anyone.

| Name | Summary |
| --- | --- |
| SAMPLE | a sample variable |
