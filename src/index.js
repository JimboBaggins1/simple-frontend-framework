import { init } from '../framework'
import { User } from './user';

const firstName = 'James';
const lastName = 'Anderson';

init('#app', User({ firstName, lastName }));