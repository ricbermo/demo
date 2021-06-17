jest.mock('helpers/api', () => ({
  userFetcher: jest.fn(() => Promise.resolve()),
  logout: jest.fn(),
}));
import React from 'react';
import {render, act, fireEvent, cleanup} from 'config/test-utils';
import {Drawer} from '../Drawer';

describe('Drawer', () => {
  jest.useFakeTimers();
  afterEach(cleanup);

  it('renders the expected elements', () => {
    const {getByText, getByTestId} = render(<Drawer />);
    const calendarElement = getByTestId('subscribeToCalendar');
    expect(getByText('Hearing Activities')).toBeDefined();
    expect(calendarElement).toBeDefined();
    expect(getByText('Visit Our Website')).toBeDefined();
    expect(getByText('Chat Us')).toBeDefined();
    expect(getByText('Call Us')).toBeDefined();
    expect(getByText('Email Us')).toBeDefined();
    expect(getByText('Create Ticket')).toBeDefined();
    expect(getByText('Logout')).toBeDefined();
  });

  it('dislays the dialog', () => {
    const {getByText, getByTestId} = render(<Drawer />);
    const calendarElement = getByTestId('subscribeToCalendar');

    act(() => {
      fireEvent.press(calendarElement);
    });

    const dialogTxt =
      'Do you what to Sync your hearings with your personal calendar?';
    expect(getByText(dialogTxt)).toBeDefined();
  });
});
