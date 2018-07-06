module.exports = (client, message, args) => {
	if (args[0] !== undefined) message.reply(`https://putch.xyz/logs/${message.mentions.members.first().user.username}%23${message.mentions.members.first().user.discriminator}.txt`);
	else message.reply(`https://putch.xyz/logs/${message.author.username}%23${message.author.discriminator}.txt`);
};