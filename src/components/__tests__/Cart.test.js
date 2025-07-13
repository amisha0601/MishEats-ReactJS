import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cart from '../Cart';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
import { addItem, clearCart } from '../../utils/cartSlice';

// Mock item matching the real Cart structure
const mockItem = {
  card: {
    info: {
      id: '1',
      name: 'Chocolate Cake',
      imageId: 'cake-img',
      price: 15000,
    },
  },
  quantity: 1,
};

// Render helper
const customRender = (component) => {
  return render(
    <BrowserRouter>
      <Provider store={appStore}>{component}</Provider>
    </BrowserRouter>
  );
};

describe('Cart Component Tests', () => {
  beforeEach(() => {
    appStore.dispatch(clearCart());
    appStore.dispatch(addItem(mockItem));
  });

  test('renders item in cart', () => {
    customRender(<Cart />);
    expect(screen.getByText('Chocolate Cake')).toBeInTheDocument();
  });

  test('increases quantity when + is clicked', () => {
    customRender(<Cart />);
    const plusBtn = screen.getByText('+');
    fireEvent.click(plusBtn);
    expect(screen.getByText((text) => text.trim() === '2')).toBeInTheDocument();
  });

  test('decreases quantity when - is clicked', () => {
    customRender(<Cart />);
    const plusBtn = screen.getByText('+');
    fireEvent.click(plusBtn); // now quantity = 2
    const minusBtn = screen.getByText('-');
    fireEvent.click(minusBtn); // now back to 1
    expect(screen.getByText((text) => text.trim() === '1')).toBeInTheDocument();
  });

  test('shows total amount', () => {
    customRender(<Cart />);
    expect(screen.getByText(/Total: ₹/)).toBeInTheDocument();
  });

  test('clears cart on Clear Cart button click', () => {
    customRender(<Cart />);
    fireEvent.click(screen.getByText('Clear Cart'));
    expect(screen.getByText('Your Cart is Empty.')).toBeInTheDocument();
  });
});