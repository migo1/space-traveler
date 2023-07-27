import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Mission from './Mission';
import '@testing-library/jest-dom';

describe('Mission component', () => {
  test('render component', () => {
    const missionComponent = render(
      <Provider store={store}>
        <Mission />
      </Provider>,
    );
    expect(missionComponent).toMatchSnapshot();
  });
});
