import model from '../model/index.js';
import { determineFieldKey } from '../utils.js';

export const triggers = [
	"what is $firstName $lastName ' s $fieldName",
	"ask address book for $firstName $lastName ' s $fieldName",
	"tell me what $firstName $lastName ' s $fieldName is",
	"tell me $firstName $lastName ' s $fieldName",
	"lookup what $firstName $lastName ' s $fieldName is",
	"lookup $firstName $lastName ' s $fieldName",
	"find me $firstName $lastName ' s $fieldName",
	"$firstName $lastName ' s $fieldName",

	"what is $firstName ' s $fieldName",
	"ask address book for $firstName ' s $fieldName",
	"tell me what $firstName ' s $fieldName is",
	"tell me $firstName ' s $fieldName",
	"lookup what $firstName ' s $fieldName is",
	"lookup $firstName ' s $fieldName",
	"find me $firstName ' s $fieldName",
	"$firstName ' s $fieldName"
];

export const handler = (args, app) => {
	const { firstname, lastname, fieldname } = args;

	const name = `${firstname} ${lastname||''}`.trim();
	const entries = model.lookUpByName(name);

	if (entries.length === 0) {
		app.ask(`Sorry, there's nobody in your address book with that name.`);
		return;
	} else if (entries.length > 1) {
		app.ask(`Can you be more specific? You have ${entries.length} people in your address book with that name.`);
		return;
	} else {
		const entry = entries[0];
		const key = determineFieldKey(fieldname);
		if (key === void 0) {
			app.ask(`I'm not sure what you mean. What about ${entry.name} would you like to know?`);
			return;
		}
		app.ask(`${entry.name}'s ${key} is ${entry[key]}`);
	}
};
