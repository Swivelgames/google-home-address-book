import store from '../model/store.js';
import { determineFieldKey } from '../utils.js';

export const triggers = [
	"good bye",
	"goodbye",
	"bye",
	"see ya",
	"see you later",
	"later",
	"peace",
	"toodles",
	"nevermind",
	"shut up",
	"I don't need you anymore",
	"We're done here",
	"Thank you",
	"Thanks",
	"that is all",
	"nothing else",
	"no"
];

export const handler = (args, app) => app.tell(`Bye!`);
