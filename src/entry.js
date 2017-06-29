import { ActionsSdkApp } from 'actions-on-google';
import * as itents from './intents.js';

export default (response, request) => {
	const actionsApp = ActionsSdkApp({ response, request });
	const actions = new Map();

	itents.forEach((a) => actions.set(a.name, a.handler));

	actionsApp.handleRequest(actions);
}
