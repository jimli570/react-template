/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'app/store';

import App from 'App';

test('App component exist', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  await waitFor(() => {
    expect(screen.getByTestId('app-testID')).not.toBeEmptyDOMElement();
  });
});
