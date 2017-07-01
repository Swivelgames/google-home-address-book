import fs from 'fs';
import path from 'path';

const dirLoc = __dirname;
const readdir = fs.readdirSync(dirLoc);

for(let file of readdir) {
	if (file.indexOf('index') > -1) continue;
	if (file.indexOf('.js') < 0) continue;
	module.exports[
		file.replace(/^(?:.+\/)?([^/]+)\.js/, '$1')
	] = require(path.join(dirLoc, file));
}
