import fs from 'fs';
import path from 'path';
import Discord, { Message, VoiceChannel } from 'discord.js';
import text2wav from 'text2wav';

import DiscordConfig from './discordJsConfig';

const client = new Discord.Client();

const { token, prefix } = DiscordConfig;

function messageTemplate({ author, guild }: Message): string {
  return `
    Server name: ${guild?.name}
    Birthday: ${guild?.createdAt}
    Owner: ${guild?.owner?.user.username}
    Total Members: ${guild?.memberCount}
    Hotest Member: ${author.username}
  `;
}

async function play(voiceChannel: VoiceChannel, text: string): Promise<void> {
  const connection = await voiceChannel.join();
  const filePath = path.join(__dirname, '..', 'test.mp3');

  const speech = await text2wav(text, {
    speed: 10,
    wordGap: 1000,
    voice: 'pt',
  });
  await fs.promises.appendFile('test.mp3', Buffer.from(speech));

  connection.play(filePath);

  try {
    await fs.promises.stat(filePath);
  } catch (err) {
    console.log(err);
    return;
  }
  await fs.promises.unlink(filePath);
}

client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', message => {
  const [command, text] = message.content.split(/(?<=^\S+)\s/);

  // Verify if user typed !info and return a info message of server
  if (command === `${prefix}info`) {
    message.channel.send(messageTemplate(message));
  }

  // Take the text with !speech and the bot enter in channel speaking the text
  else if (command === `${prefix}speech`) {
    if (message.member?.voice.channel) {
      play(message.member?.voice.channel, text);
    }
  }
});

client.login(token);
