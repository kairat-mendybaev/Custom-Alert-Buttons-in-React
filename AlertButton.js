import React from 'react';

function AlertButton({ message, children }) {
    const handleClick = () => alert(message);

    return (
        <button onClick={handleClick}>
            {children}
        </button>
    );
}

export default AlertButton;

// In AlertButton.test.js (TEST)
// import { render, screen, fireEvent } from '@testing-library/react';
// import AlertButton from './AlertButton';

// test('displays the correct alert message when clicked', () => {
// window.alert = jest.fn();
// render(<AlertButton message="Test message">Test Button</AlertButton>);
// fireEvent.click(screen.getByText('Test Button'));
// expect(window.alert).toHaveBeenCalledWith('Test message');
});
