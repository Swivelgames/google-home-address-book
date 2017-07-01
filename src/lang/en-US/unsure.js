const unsureResponses = [
	`What would you like me to do?`,
	`Would you like me to lookup, edit, add, or delete someone from your address book?`,
	`Do you need to go? We can always continue this later.`,
	`I'm sorry, I didn't quite catch that.`
];

export default unsureResponses;

export const getRandomUnsure = () => unsureResponses[Math.floor(Math.random() * (unsureResponses.length - 1))];
