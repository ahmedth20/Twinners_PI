import { render, screen } from '@testing-library/react';
import React from 'react';

function Hello() {
  return <h1>Hello World</h1>;
}

describe('Hello component', () => {
  it('renders correctly', () => {
    render(<Hello />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
