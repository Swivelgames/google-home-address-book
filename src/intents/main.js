import { RESPONSE } from '../lang/en-US/main.js';

export const name = 'assistant.intent.action.MAIN';
export const handler = (app) => {
	app.ask(RESPONSE('zero'));
};
