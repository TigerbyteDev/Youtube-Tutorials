const {
    Client,
    Intents
} = require('discord.js');

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.on('ready', () => {
    console.log('hi')

    const commands = [{
            name: 'piep',
            description: 'sagt piep',
            options: null
        },
        {
            name: 'blub',
            description: 'sagt blub',
            options: null
        }
    ]
    // Global, erst nach bis zu einer Stunde registriert
    client.application?.commands.set(data);
    
    // Lokal, sofort Registriert
    client.guilds.cache.get('707558933010841711').commands.set(commands);
});

client.on('interactionCreate', interaction => {
    if (interaction.isCommand()) {
        if (interaction.commandName == 'piep') {
            interaction.reply(interaction.user.username);
        }

        if (interaction.commandName == 'blub') {
            interaction.channel.send('blub');
        }
    }
})

 client.on('messageCreate', message => {
     if (message.author.bot) return;
     console.log(message.content)
     console.log(message.author.id)
     message.reply('hi')
     message.channel.send('hiv2')
 })

client.login('freshes bot token')
