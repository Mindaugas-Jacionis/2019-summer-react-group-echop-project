import React from 'react';
import { advanceTo } from 'jest-date-mock';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Footer from './Footer';

describe('UI Footer', () => {
  beforeAll(() => {
    advanceTo(new Date('2020-01-01'));
  });

  it('has text "© Copyright by React Wizards Guild | 2020"', () => {
    const { getByText } = render(<Footer />);

    expect(getByText('© Copyright by React Wizards Guild | 2020')).toBeInTheDocument();
  });
});
