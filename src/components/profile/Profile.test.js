import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Profile from './Profile';
import '@testing-library/jest-dom';

describe('Profile component', () => {
  test('render component', () => {
    const profileComponent = render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );
    expect(profileComponent).toMatchSnapshot();
  });
});
