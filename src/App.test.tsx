import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders an application root', () => {
    render(<App />);
    expect(screen.getByTestId('setfarm-app-root')).toBeInTheDocument();
  });

  it('exercises a gameplay control and updates visible runtime state', async () => {
    const user = userEvent.setup();

    render(<App />);

    expect(screen.getAllByText('12,450').length).toBeGreaterThan(0);

    await user.click(screen.getByRole('button', { name: /sync alt/i }));

    expect(await screen.findAllByText('12,500')).toHaveLength(2);
  });
});
