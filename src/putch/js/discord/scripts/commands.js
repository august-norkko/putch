const conf = require('../conf');
const link = require('./url');

module.exports = (client, message) => {
	if (message.content.indexOf('!') !== 0) return;
	const args = message.content.slice(1).trim().split(/ +/g);
	const cmd = args.shift();
	if (cmd === conf.commands[0]) link(client, message, args);
};
