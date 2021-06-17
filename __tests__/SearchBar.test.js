import React from 'react';
import {render, fireEvent, cleanup} from 'config/test-utils';
import {SearchBar} from '../SearchBar';

describe('SearchBar', () => {
  afterEach(cleanup);

  const onChange = jest.fn();

  it('renders the expected elements', () => {
    const {getByPlaceholderText} = render(
      <SearchBar label="Search" onChangeText={onChange} />,
    );
    expect(getByPlaceholderText('Search')).toBeDefined();
  });

  it('fires the change event', () => {
    const {getByPlaceholderText} = render(
      <SearchBar label="Search" onChangeText={onChange} />,
    );
    fireEvent(getByPlaceholderText('Search'), 'onChangeText', 'ab');
    expect(onChange).toHaveBeenCalledWith('ab');
  });
});
