import model from '../model/index.js';
import { determineFieldKey } from '../utils.js';

export const triggers = [
	"add $firstname $lastname with $fieldname $*fieldvalue",
	"add $firstname with $fieldname $*fieldvalue"
];

export const handler = (args, app) => {
	const {
		firstname, lastname,
		fieldname, fieldvalue
	} = args;

	const success = model.addNew({
		name: `${firstname} ${lastname||''}`.trim(),
		[fieldname]: fieldvalue
	});

	if (!success) {
		app.ask(`
			There was a problem adding your
			friend to your address book.
			Is there anything else you'd like
			me to do for you?
		`);
	} else {
		app.ask(`Done! I just added ${firstname} to your address book.`);
	}
};
