import { render, screen } from '@testing-library/react';
import RestaurantCard from '../RestaurantCard';
import MOCK_DATA from '../mocks/resCardMock.json';
import '@testing-library/jest-dom';

describe('RestaurantCard Component Test by Amisha', () => {
  test('renders restaurant name', () => {
    render(<RestaurantCard resData={MOCK_DATA} />);
    expect(screen.getByText('Theobroma')).toBeInTheDocument();
  });

  test('renders cuisines', () => {
    render(<RestaurantCard resData={MOCK_DATA} />);
    expect(screen.getByText(/Bakery, Desserts/i)).toBeInTheDocument();
  });

  test('renders rating and cost for two', () => {
    render(<RestaurantCard resData={MOCK_DATA} />);
    expect(screen.getByText(/⭐ 4.6 • ₹400 for two/i)).toBeInTheDocument();
  });

  test('renders delivery time', () => {
    render(<RestaurantCard resData={MOCK_DATA} />);
    expect(screen.getByText(/20-25 mins/i)).toBeInTheDocument();
  });
});