const dir = require('../conf').infodir;
const fs = require('fs');

module.exports = (message) => {
	const user = message.author, current = `${user.username}#${user.discriminator}`;
	let bool = false;
	if (message.content) {
		let array = [];
		fs.readFile(dir, (err, f) => {
			array = f.toString().split('\n');
			for (let i = 0; i < array.length + 1; i++) {
				if (array[i] == current) {
					bool = true;
					break;
				} else bool = false;
			}

			if (!bool) fs.appendFile(`${dir}`, `${current}\n`, err => { if (err) throw err; });
		});
	}
};
