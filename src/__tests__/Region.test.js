import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Region from '../pages/Region';

describe('test be defined', () => {
  it('should be defined', () => {
    const beDefined = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Region />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(beDefined).toBeDefined();
  });
});
