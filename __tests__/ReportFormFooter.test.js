import React from 'react';
import {render, fireEvent, cleanup} from 'config/test-utils';
import {ReportFormFooter} from '../ReportFormFooter';

describe('ReportFormFooter', () => {
  afterEach(cleanup);

  const onBackPress = jest.fn();
  const onNextPress = jest.fn();
  const onSubmit = jest.fn();

  it('works as expected on the first page', () => {
    const {getByTestId, queryByTestId} = render(
      <ReportFormFooter
        onBackPress={onBackPress}
        onNextPress={onNextPress}
        onSubmit={onSubmit}
        isFirstPage
      />,
    );
    const next = getByTestId('report-form-next');
    expect(next).toBeDefined();
    expect(queryByTestId('report-form-back')).toBeNull();
    fireEvent.press(next);
    expect(onNextPress).toHaveBeenCalled();
  });

  it('works as expected after the first page', () => {
    const {getByTestId} = render(
      <ReportFormFooter
        onBackPress={onBackPress}
        onNextPress={onNextPress}
        onSubmit={onSubmit}
      />,
    );
    const next = getByTestId('report-form-next');
    const back = getByTestId('report-form-back');
    expect(next).toBeDefined();
    expect(back).toBeDefined();
    fireEvent.press(next);
    expect(onNextPress).toHaveBeenCalled();
    fireEvent.press(back);
    expect(onBackPress).toHaveBeenCalled();
  });

  it('works as expected on the last page', () => {
    const {getByTestId, queryByTestId} = render(
      <ReportFormFooter
        onBackPress={onBackPress}
        onNextPress={onNextPress}
        onSubmit={onSubmit}
        isLastPage
      />,
    );
    const back = getByTestId('report-form-back');
    expect(back).toBeDefined();
    fireEvent.press(back);
    expect(onBackPress).toHaveBeenCalled();
    const next = queryByTestId('report-form-next');
    expect(next).toBeNull();

    const submit = getByTestId('report-form-submit');
    expect(submit).toBeDefined();
    fireEvent.press(submit);
    expect(onSubmit).toHaveBeenCalled();
  });
});
