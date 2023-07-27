import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Rockets from './Rockets';
import store from '../../redux/store';

describe('Testing RocketComponent', () => {
  it('Should render Component', () => {
    const rocketsPage = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(rocketsPage).toMatchSnapshot();
  });
});
