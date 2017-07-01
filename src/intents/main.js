import { RESPONSE } from '../lang/en-US/main.js';
import model from '../model/index.js';

export const name = 'assistant.intent.action.MAIN';
export const handler = (app) => {
	app.ask(RESPONSE(model.count()));
};
