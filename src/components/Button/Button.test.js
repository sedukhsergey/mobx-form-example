import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('Button looks props', () => {
    const { container } = render(<Button looks={['default']} />);
    const button = container.querySelector('button');
  });
});
