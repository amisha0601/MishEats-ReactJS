import { render, screen, fireEvent } from '@testing-library/react';
import Body from '../Body';
import MOCK_DATA from '../mocks/mockResListData.json';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react';
import '@testing-library/jest-dom';

// ✅ Mock API response
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

// ✅ Extracting restaurant data from mock
const allRestaurants =
  MOCK_DATA?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

const totalCount = allRestaurants.length;

const cakeCount = allRestaurants.filter((res) =>
  res.info.name.toLowerCase().includes('cake')
).length;

const topRatedCount = allRestaurants.filter((res) => res.info.avgRating >= 4.4).length;

// ✅ TESTS
describe('Body Component Integration Tests', () => {
  beforeEach(async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });

    await screen.findAllByTestId('resCard');
  });

  test('should render all restaurants initially', async () => {
    const cards = await screen.findAllByTestId('resCard');
    expect(cards.length).toBe(totalCount);
  });

  test('should filter restaurants by "cake" search', async () => {
    const searchInput = screen.getByPlaceholderText(/search restaurants/i);
    const searchButton = screen.getByRole('button', { name: /search/i });

    fireEvent.change(searchInput, { target: { value: 'cake' } });
    fireEvent.click(searchButton);

    const filteredCards = await screen.findAllByTestId('resCard');
    expect(filteredCards.length).toBe(cakeCount);
  });

  test('⭐ should filter top rated restaurants', async () => {
    const topRatedBtn = screen.getByRole('button', {
      name: /top rated restaurants/i,
    });

    fireEvent.click(topRatedBtn);

    const filteredCards = await screen.findAllByTestId('resCard');
    expect(filteredCards.length).toBe(topRatedCount);
  });
});