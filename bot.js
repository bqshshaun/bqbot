const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const lazychannel =('1009635986315157525');
const ye = (1)
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
	console.log('Ready!');
	client.user.setStatus('online');
  client.user.setActivity(String('nothing, because i\'m just too fucking lazy'));
});


client.on('messageCreate', (message) => {
    if (message.author.bot) return;
           if (message.content === 'ping') {
  console.log('pongy');
	  
message.channel.send('pong!');

} else {

if (((message.channel || {}).id) === lazychannel){ 
				message.channel.send('i\'d reply, but i\'m just too fucking lazy');
				

}}}
		   );



 
  
client.login(token);




        