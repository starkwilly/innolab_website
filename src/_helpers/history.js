import { createBrowserHistory } from 'history';

const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });

export { history };