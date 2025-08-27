require('dotenv').config({ quiet: true });

const { Client, GatewayIntentBits } = require('discord.js'), path = require('path'), { info, error, debug } = require('./console-log');
const currentFile = path.basename(__filename);

debug(currentFile, 'Starting...');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('clientReady', () => {
    info(currentFile, 'App is ready!');
});

require('./plugins/load')(client);
client.login(process.env.DISCORD_TOKEN).catch(err => (error(currentFile, err.message), process.exit(1)));