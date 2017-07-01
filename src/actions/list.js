import store from '../model/store.js';
import { determineFieldKey } from '../utils.js';

export const triggers = [
	"Who is in my address book",
	"List everyone",
	"List everyone in my address book",
	"List the people in my address book",
	"Who do I have contact info for"
];

export const handler = (args, app) => {
	app.ask(`You have contact info for ${
		store.reduce((v,cV,cI,a) => {
			const len = a.length;
			if (len > 1 && cI === len - 1) {
				v += ', and ';
			} else if(cI > 0) v += ', ';
			v += cV.name;
			return v;
		}, '')
	}.`);
};
