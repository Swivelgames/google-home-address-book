import { doesRawMatchQuery } from '../utils.js';
import * as actions from '../actions/index.js';
import { getRandomUnsure } from '../lang/en-US/unsure.js';

export const name = [
	'actions.intent.TEXT',
	'assistant.intent.action.TEXT'
];

export const handler = (app) => {
	const actKeys = Object.keys(actions).filter(v => v !== 'default');

	const rawInput = app.getRawInput();

	const action = actKeys.reduce((v,cV) => {
		if (v) return v;

		const { triggers, handler } = actions[cV];

		for(let t of triggers) {
			const args = doesRawMatchQuery(rawInput, t);
			if (args) return { args, handler, trigger: t };
		}
	}, null);

	if (!action) {
		app.ask(getRandomUnsure());
		return;
	} else {
		const { args, handler } = action;
		handler(args, app);
	}
};
