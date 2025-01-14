import { createComponent } from '../framework';
import { div } from '../framework/element';
import { onClick } from '../framework/event';

// initial state of User component
const initialState = { firstName: 'James', lastName: 'Anderson' };

// state mutating actions
const methods = {
    changeName: (state, firstName) => ({...state, firstName })
};

// component template
const template = ({ firstName, lastName, methods }) =>
    div`${onClick(() => methods.changeName('Amy'))} Hello ${firstName} ${lastName}`;


// create real world component
export const User = createComponent({ template, methods, initialState }); 