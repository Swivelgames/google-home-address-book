# Introduction

This is a simple Actions on Google project made for Google Assistant on Android and Google Home devices

## Getting Started

I use `yarn` for managing project dependencies, but you're welcome to replace any of my `yarn` commands with the equivalent `npm` commands. They should work just fine!

### 1) Setting Up

#### 1.0) Prerequisites
 * **ngrok** -- [Download and install `ngrok`](https://ngrok.com/). I put mine in the `/usr/local/bin/` directory and then ran `chmod +x ngrok` on it so that I could start it up whenever I wanted, but you can also run it from whatever directory you download it to.
 * **gactions-cli** -- [Download and install `gactions-cli`](https://developers.google.com/actions/tools/gactions-cli). Just like ngrok, I put mind in the `/usr/local/bin/` directory and then ran `chmod +x ngrok` on it.
 * **Actions on Google Project** -- [Go create one and then jump back over here](https://console.actions.google.com/)
 * **node** -- I'm running the latest and greatest, even though Google complains about anything over version Node 6
 * **yarn** (optional) -- A pretty cool alternative to `npm`. I didn't like it at first, but it has certainly grown on me! (As a side note: npm has come out with a newer version to compete with the extra features that yarn has.)

#### 1.1) Yarn, Build, and Start
```bash
$ yarn
$ yarn run build
$ yarn start
```
***We're not ready just yet!*** We've got some other things to do down below...

#### 1.2) Run `ngrok`
In a **seperate** terminal window than the one running our node app on `3030`, type this (by default, I run on 3030):
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

#### 1.3) Update Your Actions on Google Project
In a **third** terminal window, with your updated `gactions.json` file, in the command below, change `MY_GACTIONS_PROJECT_ID` to the ID of the project in your Actions on Google console and then execute:
```bash
$ gactions test --action_package gactions.json --project MY_GACTIONS_PROJECT_ID
```

### 2) Testing

Head over to the [Actions on Google Console](https://console.actions.google.com/) and go to the Simulator. Say "talk to my test app", and then shoot it commands based on the ones below, or the ones you've created yourself!

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

The follow actions have been developed and tested to be working (at least somewhat). Many of these work with edge-case scenarios not just happy-path, like trying to ask for an address of someone who isn't in your address, or trying to look up information that doesn't exist for someone who is in your address book.

### LOOKUP_BY_NAME
```
<USER> talk to my test app
<Assistant> Sure. Let's get the test version of my test app.
<AddressBook> What can I do for you today? I can add, edit, delete, and lookup people from your address book. You currently have one person in your address book.
<USER> What is John's address
<AddressBook> John Doe's address is 7100 Corporate Dr, Plano, TX 75024
<USER> What is John's phone number
<AddressBook> John Doe's phone is 9723387700
```

### ENTRY_ACTIONS_ADD
```
<USER> talk to my test app
<Assistant> Sure. Let's get the test version of my test app.
<AddressBook> What can I do for you today? I can add, edit, delete, and lookup people from your address book. You currently have one person in your address book.
<USER> Add Carl with address 1239 Johnson Drive New York New York 75068
<AddressBook> Done! I just added carl to your address book.
<USER> What is Carl's address
<AddressBook> Carl's address is 1239 Johnson Drive New York New York 75068
```

### ENTRY_ACTIONS_EDIT
```
<USER> Change John's address to 7100 Corporate Dr, Plano, TX 75024
<AddressBook> Alright, I just changed john doe's address.
```

### ENTRY_ACTIONS_REMOVE
```
<USER> Delete John
<AddressBook> Alright, I just deleted John Doe. Anything else?
```

### LIST_TOTAL_ENTRIES
```
<USER> How many people are in my address book?
<AddressBook> There is 1 person in your address book. Anything else?
```

### LIST_ALL_NAMES
```
<USER> Who's in my address book?
<AddressBook> You have contact info for John Doe.
```

### BYE
```
<USER> Good bye
<AddressBook> Bye!
```


# Side Comments

I understand that this isn't the most beautiful project out there. This was created from scratch in a matter of a few days, with no prior understanding or knowledge of Google's ActionsSDK or API.AI -- It's been an interesting (and frustrating) journey to try and explore and get started with all this in such a short amount of time.

In hindsight, I'm seeing now that it might have been *slightly* (no sarcasm) easier to go with Google's `functions` to have it up and running on Google Cloud. For a simple project, I was perfectly OK with just running this on express. However, given what I know now, *I would absolutely recommend using `functions` since it ties in to Google Cloud, making your app incredibly scalable*. Just a thought.

# Special Thanks To

**Pizza Hut** for giving me this challenge! It was an awesome challenge to try and tackle. While incredibly frustrating to wrestle with, it's been an awesome learning experience!
