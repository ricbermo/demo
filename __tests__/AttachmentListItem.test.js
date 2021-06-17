import React from 'react';
import {render, fireEvent, cleanup} from 'config/test-utils';
import {AttachmentListItem} from '../AttachmentListItem';

describe('AttachmentListItem', () => {
  afterEach(cleanup);

  const onDelete = jest.fn();

  it('renders the expected elements when loading', () => {
    const item = {
      upload: true,
      file: {
        fileName: 'photo',
      },
    };
    const {getByText, getByTestId} = render(
      <AttachmentListItem item={item} onDelete={onDelete} />,
    );
    expect(getByText('photo')).toBeDefined();
    expect(getByTestId('attachment-loading')).toBeDefined();
  });

  it('renders the delete attachment icon', () => {
    const item = {
      file: {
        fileName: 'photo',
      },
    };
    const {getByText, getByTestId} = render(
      <AttachmentListItem item={item} onDelete={onDelete} />,
    );
    expect(getByText('photo')).toBeDefined();
    expect(getByTestId('delete-attachment-icon')).toBeDefined();
  });

  it('responds to the onPress event to delete an attachment', () => {
    const item = {
      file: {
        fileName: 'photo',
      },
    };
    const {getByTestId, getByText} = render(
      <AttachmentListItem item={item} onDelete={onDelete} />,
    );
    fireEvent.press(getByTestId('delete-attachment-icon'));
    expect(getByText('YES')).toBeDefined();
    fireEvent.press(getByText('YES'));
    expect(onDelete).toHaveBeenCalled();
  });
});
