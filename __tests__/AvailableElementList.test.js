import React from 'react';
import {render, cleanup} from 'config/test-utils';
import {AvailableElementsList} from '../AvailableElementsList';
import {elements, bundles} from 'config/test-data';
import {mergeElements} from 'helpers/general';

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('AvailableElementsList', () => {
  afterEach(cleanup);

  it('renders the emtpty state', () => {
    const {getByText} = render(<AvailableElementsList onRefresh={jest.fn()} />);
    expect(getByText('No Elements Found')).toBeDefined();
  });

  it('renders a list of elements', () => {
    const data = mergeElements({elements, bundles});
    const {getByTestId} = render(
      <AvailableElementsList onRefresh={jest.fn()} data={data} />,
    );
    expect(getByTestId('element-0')).toBeDefined();
    expect(getByTestId('element-1')).toBeDefined();
    expect(getByTestId('bundle-2')).toBeDefined();
  });
});
