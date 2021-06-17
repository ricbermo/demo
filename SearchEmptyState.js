import React from 'react';
import {EmptyState} from './EmptyState';

const SearchEmptyState = React.memo(function SearchEmptyState() {
  return (
    <EmptyState
      icon="magnify"
      title="No Results Found"
      subtitle={
        'There are no results for your\nsearch request. Please try again.'
      }
    />
  );
});

export {SearchEmptyState};
