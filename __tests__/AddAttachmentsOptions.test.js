import React from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {render, fireEvent, cleanup} from 'config/test-utils';
import {AddAttachmentsOptions} from '../AddAttachmentsOptions';

describe('AddAttachmentsOptions', () => {
  afterEach(cleanup);

  it('renders the expected elements', () => {
    const {getByText} = render(<AddAttachmentsOptions />);
    expect(getByText('From Camera')).toBeDefined();
    expect(getByText('From Camera Roll')).toBeDefined();
  });

  it('handles selecting photos from the gallery', () => {
    const {getByText} = render(<AddAttachmentsOptions />);
    fireEvent.press(getByText('From Camera Roll'));
    expect(launchImageLibrary).toHaveBeenCalled();
  });

  it('handles taking pictures with the camera', () => {
    const {getByText} = render(<AddAttachmentsOptions />);
    fireEvent.press(getByText('From Camera'));
    expect(launchCamera).toHaveBeenCalled();
  });
});
