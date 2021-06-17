import React from "react";
import { useConnectionState } from "state/useConnectionState";
import { View } from "react-native";
import { isEmpty } from "rambdax";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { theme } from "theme";
import { useSearch } from "state/useSearch";
import {
  ActivitiesList,
  ActivitiesSearchResults,
  ActivitiesSkeleton,
  NoInternetEmptyState,
} from "components";
import { useActivities } from "state/useActivities";
import { activitiesSearchState } from "state/atoms";

const Example = React.memo(function Example() {
  const isConnected = useConnectionState();
  const navigation = useNavigation();
  const { loading } = useActivities();
  const {
    debouncedSearch,
    setSearch,
    loading: sLoading,
  } = useSearch({
    atom: activitiesSearchState,
    entity: "activity",
  });

  useFocusEffect(() =>
    navigation.addListener("beforeRemove", () => {
      setSearch("");
    })
  );

  if (!isConnected) {
    return <NoInternetEmptyState />;
  }

  if (loading || sLoading) {
    return <ActivitiesSkeleton />;
  }

  return (
    <View style={theme.appWrapper}>
      {isEmpty(debouncedSearch) ? (
        <ActivitiesList />
      ) : (
        <ActivitiesSearchResults />
      )}
    </View>
  );
});

export { Example };
