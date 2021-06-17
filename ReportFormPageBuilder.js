import React from 'react';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PropTypes from 'prop-types';
import {ScaledSheet} from 'react-native-size-matters/extend';
import {compose, map, filter, pathOr, complement, isEmpty} from 'rambdax';
import {theme, colors, width} from 'theme';
import {
  FORM_FIELD_TYPE_INPUT,
  FORM_FIELD_TYPE_SWITCH,
  FORM_FIELD_TYPE_SELECT,
} from 'helpers/forms';
import {TextField} from './report_fields/TextField';
import {SwitchField} from './report_fields/SwitchField';
import {DateTimePickerField} from './report_fields/DateTimePickerField';
import {Select} from './report_fields/Select';
import {Text} from './Text';
import {ReportFormFooter} from './ReportFormFooter';

const ReportFormPageBuilder = React.memo(function ReportFormPageBuilder({
  section,
  ...footerProps
}) {
  return (
    <View style={[styles.pageWrapper, theme.appPadding]}>
      <KeyboardAwareScrollView
        extraScrollHeight={50}
        style={styles.content}
        showsVerticalScrollIndicator={false}>
        <Text style={[theme.titleDark, theme.fontWeight600, styles.title]}>
          {section?.title}
        </Text>
        {compose(
          filter(complement(isEmpty)),
          map(field => {
            if (field?.type === FORM_FIELD_TYPE_INPUT) {
              return <TextField field={field} key={field?.formikKey} />;
            }

            if (field?.type === FORM_FIELD_TYPE_SWITCH) {
              return <SwitchField field={field} key={field?.formikKey} />;
            }

            if (field?.type === FORM_FIELD_TYPE_SELECT) {
              return <Select field={field} key={field?.formikKey} />;
            }

            return <DateTimePickerField field={field} key={field?.formikKey} />;
          }),
          pathOr([], 'questions'),
        )(section)}

        <ReportFormFooter {...footerProps} />
      </KeyboardAwareScrollView>
    </View>
  );
});

const styles = ScaledSheet.create({
  pageWrapper: {
    width,
    backgroundColor: colors.background,
  },
  content: {
    paddingTop: '24@vs',
  },
  title: {
    paddingBottom: '16@s',
  },
});

ReportFormPageBuilder.propTypes = {
  section: PropTypes.shape({
    title: PropTypes.string.isRequired,
    questions: PropTypes.array,
  }),
  ...ReportFormFooter.propTypes,
};

export {ReportFormPageBuilder};
