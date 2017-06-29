import model from '../model/';
import { determineFieldKey } from '../utils.js';

export const name = "com.neuelogic.addr.LOOKUP_BY_NAME";
export const handler = (app) => {
	const name = app.getArgument('name');
	const fieldName = app.getArgument('fieldName');

	const entries = model.lookupByName(name);

	if (entries.length === 0) {
		app.tell(`Sorry, there's nobody in your address book with that name.`);
		return;
	} else if (entries.length > 1) {
		app.tell(`
			Can you be more specific?
			You have ${entries.length} people in your address book with that name.
		`);
		return;
	} else {
		const key = determineFieldKey(args);
		if (key === void 0) {
			app.tell(`I'm not sure what you mean. What about ${entries.name} would you like to know?`);
			return;
		}
		app.tell(`${entries.name}'s ${key} is ${entries[key]}`);
	}
};
