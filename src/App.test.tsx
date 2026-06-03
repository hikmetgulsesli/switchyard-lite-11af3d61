import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders an application root', () => {
    render(<App />);
    const appRoot = screen.getByTestId('setfarm-app-root');
    expect(appRoot).toBeInTheDocument();
    expect(appRoot).toHaveClass('min-h-screen');
  });
});
