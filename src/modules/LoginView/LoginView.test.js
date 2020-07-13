import React from 'react';
import LoginView from './LoginView';
import { render, screen, fireEvent } from '@testing-library/react';

describe('LoginView', () => {
  it('header testing', () => {
    const { container } = render(<LoginView />);
    console.log('screen', screen);
    const email = screen.getByPlaceholderText('Insert Email');
    fireEvent.change(screen.getByPlaceholderText('Insert Email'), {
      target: { value: 'wrongEmail' },
    });
    expect(email.value).toBe('wrongEmail');
  });
});
