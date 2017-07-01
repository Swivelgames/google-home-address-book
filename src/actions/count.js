import store from '../model/store.js';
import { determineFieldKey } from '../utils.js';

export const triggers = [
	"how many people do I have in my address book",
	"how many people are in my address book"
];

export const handler = (args, app) => {
	const num = store.length;
	app.ask(`There ${
		num === 1 ? 'is' : 'are'
	} ${num} ${
		num === 1 ? 'person' : 'people'
	} in your address book. Anything else?`);
};
