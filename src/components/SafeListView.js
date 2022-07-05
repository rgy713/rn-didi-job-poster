import React from 'react';
import {
  View,
  FlatList,
  RefreshControl,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import EmptyData from './emptyData';
import config from '../config';

const SafeListView = ({
  ListHeaderComponent,
  refreshing,
  scrollEnabled,
  onRefresh,
  renderItem,
  FlatListFooterComponent,
  style,
  contentContainerStyle,
  data,
  inverted,
  mainStyle,
  stickyHeaderIndices,
  ListFooterComponent,
  numColumns,
  listEmptyComponent,
  CustomHeaderComponent,
}) => (
  <KeyboardAvoidingView
    behavior={Platform.OS == 'ios' ? 'padding' : null}
    style={{flex: 1, backgroundColor: config.white}}>
    {CustomHeaderComponent}
    <FlatList
      data={data}
      numColumns={numColumns}
      inverted={inverted}
      keyExtractor={(item, index) => index.toString()}
      scrollEnabled={scrollEnabled}
      stickyHeaderIndices={!stickyHeaderIndices ? null : [0]}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={'handled'}
      style={{
        width: '100%',
        backgroundColor: config.white,
        ...style,
      }}
      refreshControl={
        <RefreshControl
          colors={[
            config.primaryColor,
            config.textPrimaryColor,
            config.primaryColor,
          ]}
          refreshing={refreshing || false}
          onRefresh={onRefresh}
        />
      }
      ListFooterComponent={FlatListFooterComponent}
      ListHeaderComponent={ListHeaderComponent}
      ListEmptyComponent={
        <EmptyData value={listEmptyComponent || 'No Data Found'} />
      }
      renderItem={renderItem}
    />
    <View
      style={{
        ...mainStyle,
      }}>
      {ListFooterComponent}
    </View>
  </KeyboardAvoidingView>
);
export default SafeListView;
