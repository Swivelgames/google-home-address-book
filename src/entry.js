import { ActionsSdkApp } from 'actions-on-google';
import * as itents from './intents/';

export default (request, response) => {
	const actionsApp = new ActionsSdkApp({ response, request });
	const actions = new Map();

	Object.keys(itents).forEach((k) => {
		const { name, handler } = itents[k];
		if (name instanceof Array) {
			name.forEach((n) => actions.set(n, handler));
		} else actions.set(name, handler);
	});

	actionsApp.handleRequest(actions);
}
