import { fireEvent, render, screen } from '@testing-library/react';
import WhenOffline from '../WhenOffline';
import '@testing-library/jest-dom';

describe('WhenOffline Component', () => {
  test('renders the heading and initial UI elements', () => {
    render(<WhenOffline />);
    
    expect(screen.getByText("You're Offline!")).toBeInTheDocument();
    expect(screen.getByText("MIND MUNCH")).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Restart Game/i })).toBeInTheDocument();
    expect(screen.getByText(/Time Left:/)).toBeInTheDocument();
    expect(screen.getByText(/Score:/)).toBeInTheDocument();
  });

  test('renders a grid of cards and flips a card on click', () => {
    render(<WhenOffline />);
    const allCards = screen.getAllByText((_, el) => el?.tagName?.toLowerCase() === 'div');
    const gameCards = allCards.filter(el => el.style.width === '60px');

    expect(gameCards.length).toBeGreaterThan(0);

    fireEvent.click(gameCards[0]);
    expect(gameCards[0].textContent).not.toBe('');
  });

  test('should change difficulty level', () => {
    render(<WhenOffline />);
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'hard' } });
    expect(select.value).toBe('hard');
  });

  test('should restart game on button click', () => {
    render(<WhenOffline />);
    const restartBtn = screen.getByRole('button', { name: /Restart Game/i });
    fireEvent.click(restartBtn);

    // Just ensure cards are still there after restart
    const allCards = screen.getAllByText((_, el) => el?.tagName?.toLowerCase() === 'div');
    const gameCards = allCards.filter(el => el.style.width === '60px');
    expect(gameCards.length).toBeGreaterThan(0);
  });
});