import express from 'express';
import bodyparser from 'body-parser';

import entry from './entry.js';

const app = express();
app.on('*', (...args) => entry(...args));
app.listen(3030);

console.log('Listening on port 3030...');
