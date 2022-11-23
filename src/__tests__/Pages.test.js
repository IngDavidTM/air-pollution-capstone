import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Home from '../pages/Home';
import store from '../redux/configureStore';

describe('test be defined', () => {
  it('should be defined', () => {
    const beDefined = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(beDefined).toBeDefined();
  });
});

describe('test snapshot', () => {
  it('should match snapshot', () => {
    const match = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(match).toMatchSnapshot();
  });
});

describe('test testing-library', () => {
  it('should have OCEANIA', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getByText('OCEANIA')).toBeInTheDocument();
  });
  it('should have AFRICA', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getByText('AFRICA')).toBeInTheDocument();
  });
});
