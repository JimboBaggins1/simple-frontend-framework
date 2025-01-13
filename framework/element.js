const createElement = tagName => (strings, ...args) => ({
    type: tagName,
    template: strings.reduce(
        (acc, currentValue, index) => acc + currentValue + (args[index] || ""), "",
    )
});

export const div = createElement('div');
export const p = createElement('p');
