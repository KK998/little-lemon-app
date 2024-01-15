import React from 'react';

import { render } from '@testing-library/react';
import App from './App';

test('The app renders with no errors', () => {
  render(<App />);
  // If we get here, no errors were thrown
  expect(true).toBeTruthy();
});
