import React from 'react';
import {render, fireEvent, cleanup} from 'config/test-utils';
import {GenericDialog} from '../GenericDialog';

describe('GenericDialog', () => {
  afterEach(cleanup);

  it('renders the expected elements', () => {
    const close = jest.fn();
    const {getByText} = render(
      <GenericDialog
        visible
        title="Dialog Title"
        text="Dialog message"
        closeDialog={close}
      />,
    );
    expect(getByText('Dialog Title')).toBeDefined();
    expect(getByText('Dialog message')).toBeDefined();
    expect(getByText('OK')).toBeDefined();
  });

  it('calls the closeDialog callback', () => {
    const close = jest.fn();
    const {getByText} = render(
      <GenericDialog
        visible
        title="Dialog Title"
        text="Dialog message"
        closeDialog={close}
      />,
    );
    fireEvent.press(getByText('OK'));
    expect(close).toHaveBeenCalled();
  });
});
