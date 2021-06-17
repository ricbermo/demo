import React from 'react';
import {render, cleanup} from 'config/test-utils';
import {ElementContent} from '../ElementContent';
import {element} from 'config/test-data';
import * as helpers from 'helpers/calendar';

describe('ElementContent', () => {
  afterEach(cleanup);

  it('renders the expected base content', () => {
    const {getByText} = render(<ElementContent content={element} />);
    expect(getByText('Apr')).toBeDefined();
    expect(getByText('28')).toBeDefined();
    expect(getByText('Element:')).toBeDefined();
    expect(getByText('KBG1Z2')).toBeDefined();
    expect(
      getByText('Ricardo Create Element With Client Demo 1'),
    ).toBeDefined();
  });

  it('renders the expected bundle content', () => {
    const {getByText} = render(<ElementContent content={element} isBundle />);
    expect(getByText('Apr')).toBeDefined();
    expect(getByText('28')).toBeDefined();
    expect(getByText('Bundle')).toBeDefined();
    expect(getByText('KBG1Z2')).toBeDefined();
  });

  it('renders the overlapping warning', () => {
    jest.spyOn(helpers, 'findEventOvelap').mockReturnValue(true);
    const {getByText} = render(<ElementContent content={element} />);
    expect(getByText('Review your availability')).toBeDefined();
  });
});
