import React from 'react';
import {render, cleanup, fireEvent} from 'config/test-utils';
import * as helpers from 'helpers/general';
import {ActivityListItem} from '../ActivityListItem';

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('ActivityListItem', () => {
  jest.spyOn(helpers, 'getTimeAgo').mockReturnValue('today');

  afterEach(cleanup);

  const item = {
    id: '2c9e811778e269670178f5d99e72028a',
    note: 'Appearance reminder notification sent',
    locator: 'BPARDN',
    date: '2021-04-21T19:13:03.000Z',
    userName: 'Ricardo',
    state: 'IN',
    county: 'Adams',
    hearingId: '2c9e8432788a98550178a3ec99a40261',
  };

  it('renders the expected elements', () => {
    const {getByText} = render(<ActivityListItem item={item} />);
    expect(getByText('In: Adams')).toBeDefined();
    expect(getByText('BPARDN - today')).toBeDefined();
    expect(getByText('Ricardo')).toBeDefined();
  });

  it('navigates to the details page', () => {
    const {getByText} = render(<ActivityListItem item={item} />);
    fireEvent(getByText('In: Adams'), 'press');
    expect(mockedNavigate).toHaveBeenCalled();
  });
});
