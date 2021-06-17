import React, {useRef, useCallback, useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {keys, compose, mapIndexed, prop, length} from 'rambdax';
import {useRecoilState} from 'recoil';
import {width} from 'theme';
import {reportAttachmentsListState} from 'state/atoms';
import {ReportFormPageBuilder} from './ReportFormPageBuilder';
import {DiscardChangesDialog} from './DiscardChangesDialog';
import {ConfirmationDialog} from './ConfirmationDialog';

const ReportForm = React.memo(function ReportForm({
  pages,
  dirty,
  isValid,
  isSubmitting,
  submitReport,
  values,
  resetForm,
}) {
  const scrollRef = useRef();
  const [discardVisible, setDiscardVisible] = useState(false);
  const [promptSubmitVisible, setPromptVisible] = useState(false);
  const navigation = useNavigation();
  const [attachments, setAttachments] = useRecoilState(
    reportAttachmentsListState,
  );

  useEffect(() => {
    const hasAttachments = attachments?.length > 0;
    return navigation.addListener('beforeRemove', e => {
      if (!dirty && !hasAttachments) {
        return;
      }
      e.preventDefault();

      setDiscardVisible(true);
    });
  }, [navigation, dirty, attachments]);

  const onNavPress = useCallback(
    page => scrollRef?.current?.scrollTo({x: page * width, animated: true}),
    [scrollRef],
  );

  const onConfirmDiscard = useCallback(() => {
    setAttachments([]);
    resetForm();
    setDiscardVisible(false);
    setTimeout(() => {
      navigation?.dispatch(CommonActions.goBack());
    }, 500);
  }, [setDiscardVisible, navigation, resetForm, setAttachments]);

  const promptSubmit = useCallback(() => {
    setPromptVisible(true);
  }, [setPromptVisible]);

  const onSubmit = useCallback(() => {
    setPromptVisible(false);
    submitReport({values, resetForm});
  }, [values, resetForm, submitReport, setPromptVisible]);

  return (
    <>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        ref={ref => {
          scrollRef.current = ref;
        }}>
        {compose(
          mapIndexed((key, index) => (
            <ReportFormPageBuilder
              key={key}
              section={prop(key, pages)}
              isFirstPage={index === 0}
              isLastPage={index + 1 === compose(length, keys)(pages)}
              onNextPress={() => onNavPress(index + 1)}
              onBackPress={() => onNavPress(index - 1)}
              onSubmit={promptSubmit}
              hasErrors={!isValid}
              submitDisabled={!isValid || !dirty || isSubmitting}
            />
          )),
          keys,
        )(pages)}
      </ScrollView>

      <DiscardChangesDialog
        visible={discardVisible}
        onConfirm={onConfirmDiscard}
        closeDialog={() => setDiscardVisible(false)}
      />

      <ConfirmationDialog
        visible={promptSubmitVisible}
        closeDialog={setPromptVisible}
        onConfirm={onSubmit}
        title="Submit Report"
        message="Are sure you want to submit this?"
      />
    </>
  );
});

export {ReportForm};
