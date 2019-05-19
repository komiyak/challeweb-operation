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

Or, if you run the function with environment variables.

```
./restart_emulator.rb
```

## To CloudFunctions

```
gcloud functions deploy <FUNCTION NAME> --env-vars-file .env.yaml --runtime nodejs8 --trigger-http

# Run
curl https://<REGION>-<PROJECT_NAME>.cloudfunctions.net/<FUNCTION_NAME>
```

# Where is a log file?

You can know where is the log.
```
functions-emulator status
> Log file <where-is-the-log>
```

And then, you can show the log with tail command.
```
tail -f <log-file>
```

# Environment variables

The environment variables are on the `.env.yaml` file.
The `.env.yaml` does not share anyone.

| Name | Summary |
| --- | --- |
| SAMPLE | a sample variable |
| API_ENDPOINT | The endpoint of the challeweb-api. |