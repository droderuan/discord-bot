# Simple Discord bot

This discord bot was made just for studies purposes and it have two commands

* !info - return a info message from server

* !speech - bot enter in channel and speak the message

```!speech Hi guys!```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

First you need node in your machine and you can download it [here](https://github.com/nvm-sh/nvm) with NVM which I think
is the bets way to install node.

You will need a token provided by Discord to register your bot. [Here](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot) the Discord.JS have a tutorial for that

### Installing

To install you will just need the packages in package.json installed. For this you can use npm (comes with node) or yarn.

The link to install yarn [here](https://yarnpkg.com/getting-started/install)

Now go to your folder where you download the project and type in terminal:

```
npm install
```
To yarn
```
yarn
```

## Built With

* [Discord.JS](https://discordjs.guide/) - The api for create a bot
* [Text2wav](https://github.com/abbr/text2wav.node.js) - Module that do text to speech
