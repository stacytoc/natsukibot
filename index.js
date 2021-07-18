const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
commandPrefix: 'Nat',
owner: '605593216267583500',
invite: 'https://discord.gg/2KrFdrb3'
});

client.registry
    .registerDefaultTypes()
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerGroup('natsukibot', 'NatsukiBOT')
    .registerCommandsIn(path.join(__dirname, 'commands')); 


    client.once('ready' , () => {
        console.log(`Connecté en tant que ${client.user.tag} - (${client.user.id})`);
    })

    client.on('error', (error) => console.error(error));

    client.login(process.env.TOKEN);