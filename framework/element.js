import { h } from 'snabbdom';

// initial state for reduce
const initialState = {
    template: ''
};

// custom reducer function to be used with reduce method
const createReducer = args => (acc, currentString, index) => ({
    ...acc,
    template: acc.template + currentString + (args[index] || '')
});

const createElement = tagName => (strings, ...args) => {
    const { template } = strings.reduce(createReducer(args), initialState);
    
    return {
        type: 'element',
        template: h(tagName, {}, template)
    };
};

export const div = createElement('div');
export const p = createElement('p');
