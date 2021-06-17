import React from 'react';
import {Text} from 'react-native';
import {render, cleanup} from 'config/test-utils';
import {AppBar} from '../AppBar';

describe('AppBar', () => {
  afterEach(cleanup);

  const navigation = {
    navigate: jest.fn(),
    goBack: jest.fn(),
  };

  it('renders the expected elements', () => {
    const {getByText} = render(
      <AppBar title="The AppBar" navigation={navigation} />,
    );
    expect(getByText('The AppBar')).toBeDefined();
  });

  it('renders the expected children', () => {
    const {getByText} = render(
      <AppBar title="The AppBar" navigation={navigation}>
        <Text>hello</Text>
      </AppBar>,
    );
    expect(getByText('hello')).toBeDefined();
  });
});
