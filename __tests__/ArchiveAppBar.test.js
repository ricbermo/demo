import React from 'react';
import {render, cleanup, navigation} from 'config/test-utils';
import {ArchiveAppBar} from '../ArchiveAppBar';

describe('ArchiveAppBar', () => {
  afterEach(cleanup);

  it('renders the expected elements', () => {
    const {getByText} = render(<ArchiveAppBar navigation={navigation} />);
    expect(getByText('Hearings Archive')).toBeDefined();
  });
});
