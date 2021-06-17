import React, {useCallback} from 'react';
import {MaterialDialog} from 'react-native-material-basic';
import PropTypes from 'prop-types';
import {Text} from './Text';
import {theme, colors} from 'theme';

const GenericDialog = React.memo(function GenericDialog({
  visible,
  closeDialog,
  text,
  title,
}) {
  return (
    <MaterialDialog
      title={title}
      okLabel="OK"
      colorAccent={colors.primary}
      visible={visible}
      onOk={useCallback(() => closeDialog(false), [closeDialog])}>
      <Text style={[theme.body1Dark2nd, theme.lineHeight22]}>{text}</Text>
    </MaterialDialog>
  );
});

GenericDialog.propTypes = {
  visible: PropTypes.bool,
  closeDialog: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export {GenericDialog};
