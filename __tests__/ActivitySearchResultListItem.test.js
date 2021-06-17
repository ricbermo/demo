import React from 'react';
import {render, cleanup, fireEvent} from 'config/test-utils';
import {ActivitySearchResultListItem} from '../ActivitySearchResultListItem';
import {dataActivitySearchitem} from 'config/test-data';

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('ActivitySearchResultListItem', () => {
  afterEach(cleanup);

  it('renders the expected elements', () => {
    const {getByText} = render(
      <ActivitySearchResultListItem item={dataActivitySearchitem} />,
    );
    expect(getByText('In: Adams')).toBeDefined();
    expect(getByText('Chelsea Tan')).toBeDefined();
  });

  it('navigates to the details page', () => {
    const {getByText} = render(
      <ActivitySearchResultListItem item={dataActivitySearchitem} />,
    );
    fireEvent(getByText('In: Adams'), 'press');
    expect(mockedNavigate).toHaveBeenCalled();
  });
});
