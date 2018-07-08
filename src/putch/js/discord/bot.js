(function() {
	const logging = require('./scripts/log');
	const command = require('./scripts/commands');
	const token = require('./conf').token;

	const Discord = require('discord.js');
	const client = new Discord.Client();

	client.on('ready', () => {
		console.log('Bot starting.');
		client.user.setActivity('putch.xyz');
	});

	client.on('message', message => {
		if (message.author.bot) return;
		logging(message);
		command(client, message);
	});

	client.login(token);
})();
