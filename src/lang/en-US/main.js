export const RESPONSE = (num) => `
	What can I do for you today?

	I can add, edit, delete,
	and lookup people from
	your address book.

	You currently have ${num}
	${num === 1 ? 'person' : 'people'}
	in your address book.
`;
