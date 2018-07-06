const conf = require('../conf');
const store = require('./store');
const fs = require('fs');

module.exports = (message) => {
	const user = message.author, content = [];
	if (message.content) {
		conf.logobj.forEach(item => {
			content.push(eval(item));
		});

		fs.appendFile(`${conf.logdir}${user.username}#${user.discriminator}.txt`, `${content.join(': ')}\n`, err => {
			if (err) throw err;
		});
		store(message);
	}
};
