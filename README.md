# Introduction

This is a simple Actions on Google project made for Google Assistant on Android and Google Home devices

## Getting Started

I use `yarn` for managing project dependencies, but you're welcome to replace any of my `yarn` commands with the equivalent `npm` commands. They should work just fine!

#### 1) Setting Up

##### 1.1) Yarn, Build, and Start
```bash
$ yarn
$ yarn run build
$ yarn start
```
***We're not ready just yet!*** We've got some other things to do down below...

##### 1.2) Set up and run `ngrok`
[Download](https://ngrok.com/) and install ngrok.

In a **seperate** terminal window, type this (by default, I run on 3030):
```bash
$ ngrok http 3030
```
Leave that running. Take the **HTTPS** url from that command and update that gactions.json file with it:
```json
...
	"conversations": {
		"addressBook": {
			"name": "addressBook",
			"url": "REPLACE_ME_WITH_THE_HTTPS_URL_FROM_THE_NGROK_COMMAND"
		}
	}
...
```

##### 1.3) Update Your Actions on Google Project
With your updated `gactions.json` file, in the command below, change `MY_GACTIONS_PROJECT_ID` to the ID of the project in your Actions on Google console and then execute:
```bash
$ gactions test --action_package gactions.json --project MY_GACTIONS_PROJECT_ID
```



## Entry Fields

```javascript
{
	"name": "John Doe",
	"address": "7100 Corporate Dr, Plano, TX 75024",
	"phone": "9723387700",
	"email": "email@address.com"
}
```

# Actions

The follow actions have been developed and tested to be working (at least somewhat)

### LOOKUP_BY_NAME
```
<USER> talk to my test app
<Assistant> Sure. Let's get the test version of my test app.
<AddressBook> What can I do for you today? I can add, edit, delete, and lookup people from your address book. You currently have one person in your address book.
<USER> What is John's address?
<AddressBook> John Doe's address is 7100 Corporate Dr, Plano, TX 75024
```

## Actions To Come

The development for these actions hasn't been completed yet, but they're in progress.

 * ENTRY_ACTIONS_ADD
 * ENTRY_ACTIONS_REMOVE
 * ENTRY_ACTIONS_EDIT
 * LIST_ALL_NAMES
 * LIST_TOTAL_ENTRIES

# Special Thanks To

**Pizza Hut** for giving me this challenge! It was an awesome challenge to try and tackle. While incredibly frustrating to wrestle with, it's been an awesome learning experience!
