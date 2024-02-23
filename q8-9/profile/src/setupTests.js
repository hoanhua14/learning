// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// Importing modules using CommonJS syntax
import React from 'react';
import { render } from '@testing-library/react';
import ReverseTool from './ReverseTool';
require('@testing-library/jest-dom');


describe('ReverseTool', () => {
    it('should reverse the input name correctly', () => {
        // Arrange
        const name = 'Hello';

        // Act
        const { getByText } = render(<ReverseTool name={name} />);
        const reversedNameElement = getByText(`Reversed name: olleH`);

        // Assert
        expect(reversedNameElement).toBeInTheDocument();
    });

    it('should handle empty input', () => {
        // Arrange
        const name = '';

        // Act
        const { queryByText } = render(<ReverseTool name={name} />);
        const reversedNameElement = queryByText('Reversed name: ');

        // Assert
        expect(reversedNameElement).toBeNull();
    });
});
