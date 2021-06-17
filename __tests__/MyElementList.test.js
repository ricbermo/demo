import React from 'react';
import {render, cleanup, fireEvent} from 'config/test-utils';
import {Component} from '../Component';
import {data, bundles} from 'config/test-data';
import {mergeData} from 'helpers/general';
import {NAVIGATION_ROUTES} from 'config/constants';

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('Component', () => {
  afterEach(cleanup);

  it('renders the emtpty state', () => {
    const {getByText} = render(<Component onRefresh={jest.fn()} />);
    expect(getByText('No data Found')).toBeDefined();
  });

  it('navigates to the avilable data tab', () => {
    const {getByText, getByTestId} = render(
      <Component onRefresh={jest.fn()} />,
    );
    expect(getByText('No data Found')).toBeDefined();
    fireEvent.press(getByTestId('no-data-cover-button'));
    expect(mockedNavigate).toHaveBeenCalledWith(
      NAVIGATION_ROUTES.availableHearings,
    );
  });

  it('renders a list of data', () => {
    const d = mergeData({data, bundles});
    const {getByTestId} = render(
      <Component onRefresh={jest.fn()} data={d} />,
    );
    expect(getByTestId('d-0')).toBeDefined();
    expect(getByTestId('d-1')).toBeDefined();
    expect(getByTestId('b-2')).toBeDefined();
  });
});
