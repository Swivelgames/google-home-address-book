import fs from 'fs';
import path from 'path';

const dirLoc = path.join(__dirname, './intents/');
const readdir = fs.readdirSync(dirLoc);

for(let file of readdir) {
	if (file.indexOf('.js') < 0) continue;
	module.exports[
		file.replace(/^.+\/([^/]+)\.js/, '$1')
	] = require(path.join(dirLoc, file));
}

module.exports.default = module.exports;
