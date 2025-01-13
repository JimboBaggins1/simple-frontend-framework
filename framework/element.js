const createElement = tagName => (strings, ...args) => ({
    type: tagName,
    template: strings.reduce(
        (acc, currentValue, index) => acc + currentValue + (args[index] || ""), "",
    )
});

const div = createElement('div');
const p = createElement('p');


const firstName = 'James';
const lastName = 'Anderson';

const { template } = div`Hello ${firstName} ${lastName}!`;
console.log(template);