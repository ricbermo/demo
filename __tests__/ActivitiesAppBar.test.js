import React from 'react';
import {render, cleanup} from 'config/test-utils';
import {ActivitiesAppBar} from '../ActivitiesAppBar';

describe('ActivitiesAppBar', () => {
  afterEach(cleanup);

  it('renders the expected elements', () => {
    const {getByText} = render(<ActivitiesAppBar />);
    expect(getByText('Hearing Activities')).toBeDefined();
  });
});
