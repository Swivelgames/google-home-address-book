import model from '../model/index.js';
import { determineFieldKey } from '../utils.js';

export const triggers = [
	"change $firstname $lastname's $fieldname to $*fieldvalue",
	"change $firstname's $fieldname to $*fieldvalue"
];

export const handler = (args, app) => {
	const {
		firstname, lastname,
		fieldname, fieldvalue
	} = args;

	const name = `${firstname} ${lastname||''}`;
	const entries = model.lookUpByName(name);

	if (entries.length === 0) {
		app.ask(`Sorry, there's nobody in your address book with that name.`);
		return;
	} else if (entries.length > 1) {
		app.ask(`
			Can you be more specific? You have ${entries.length}
			people in your address book with that name.
		`);
		return;
	}

	const entry = entries[0];
	const key = determineFieldKey(fieldname);
	const success = model.set(entry.name, {
		[key]: fieldvalue
	});

	if (!success) {
		app.ask(`
			For some reason, I was not able to
			change ${entry.name}'s ${fieldname}.
			Is there something else you
			would like me to do instead?
		`);
	} else {
		app.ask(`Alright, I just changed ${entry.name}'s ${fieldname}.`);
	}
};
