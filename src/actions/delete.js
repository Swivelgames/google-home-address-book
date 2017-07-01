import model from '../model/index.js';
import { determineFieldKey } from '../utils.js';

export const triggers = [
	"delete $firstname $lastname",
	"delete $firstname"
];

export const handler = (args, app) => {
	const {
		firstname, lastname
	} = args;

	const name = `${firstname} ${lastname||''}`.trim();
	const entries = model.lookUpByName(name);

	if (entries.length === 0) {
		app.ask(`Sorry, there's nobody in your address book with that name.`);
		return;
	} else if (entries.length > 1) {
		app.ask(`
			Can you be more specific? You have ${entries.length}
			people in your address book with that name.
			I wouldn't want to delete all of them.
		`);
		return;
	}

	const entry = entries[0];
	const success = model.remove(entry.name);

	if (!success) {
		app.ask(`
			For some reason, I was not able
			to delete ${entry.name}.
			Is there something else you
			would like me to do instead?
		`);
	} else {
		app.ask(`Alright, I just deleted ${entry.name}. Anything else?`);
	}
};
