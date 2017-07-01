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

	"what is $name ' s $fieldName",
	"ask address book for $name ' s $fieldName",
	"tell me what $name ' s $fieldName is",
	"tell me $name ' s $fieldName",
	"lookup what $name ' s $fieldName is",
	"lookup $name ' s $fieldName",
	"find me $name ' s $fieldName",
	"$name ' s $fieldName"
];

export const handler = (args, app) => {
	const { name, fieldname } = args;

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
