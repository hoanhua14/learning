// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// Importing modules using CommonJS syntax
const React = require('react');
const ReactTestRenderer = require('react-test-renderer');
const {Profile} = require('./q8');
test('Reverse name', async () => {
    const component = ReactTestRenderer.create(<Profile name="hello" age="30" />);
    const instance = component.root;
    const h1 = await instance.findByProps({children: 'olleh'});
    expect(h1).toBeDefined();
});
