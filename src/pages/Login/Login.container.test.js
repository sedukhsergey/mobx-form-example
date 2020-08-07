import React from 'react';
import Login from './Login.container';
import {
  render, screen, fireEvent,
} from '@testing-library/react';

describe('LoginView', () => {
  it('header testing', () => {
    render(<Login />);
    const email = screen.getByPlaceholderText('Insert Email');
    fireEvent
      .change(
        screen.getByPlaceholderText('Insert Email'), { target: { value: 'wrongEmail' } }
      );
    expect(email.value).toBe('wrongEmail');
  });
});
