import React from 'react';
import {render, fireEvent, cleanup} from 'config/test-utils';
import * as state from 'state/useHearings';
import {CoverFooter} from '../CoverFooter';

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('CoverFooter', () => {
  afterEach(cleanup);

  const mutateH = jest.fn();
  const mutateB = jest.fn();

  beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(state, 'useHearings').mockReturnValue({mutate: mutateH});
    jest.spyOn(state, 'useBundles').mockReturnValue({mutate: mutateB});
  });

  it('renders two buttons', () => {
    const {getByTestId} = render(<CoverFooter id={1} />);
    expect(getByTestId('cover-button')).toBeDefined();
    expect(getByTestId('cover-reject-button')).toBeDefined();
  });

  it('renders the cover confirmation dialog', () => {
    const {getByTestId} = render(<CoverFooter id={1} />);
    fireEvent.press(getByTestId('cover-button'));
    expect(getByTestId('cover-confirmation-text')).toBeDefined();
  });

  it('renders the reject confirmation dialog', () => {
    const {getByText, getByTestId} = render(<CoverFooter id={1} />);
    fireEvent.press(getByTestId('cover-reject-button'));
    expect(getByText('Reason?')).toBeDefined();
  });
});
