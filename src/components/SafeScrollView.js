import React from 'react';
import {
  View,
  ScrollView,
  RefreshControl,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import config from '../config';
const SafeScrollView = ({
  children,
  HeaderComponent,
  refreshing,
  scrollEnabled,
  onRefresh,
  navigation,
  style,
  contentContainerStyle,
  FooterComponent,
  wholeStyle,
  disableRefresh,
}) => (
  <KeyboardAvoidingView
    behavior={Platform.OS == 'ios' ? 'padding' : null}
    style={[styles.mainStyle, wholeStyle]}>
    {/* {HeaderComponent} */}

    <ScrollView
      scrollEnabled={scrollEnabled}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={'handled'}
      style={style}
      contentContainerStyle={[
        styles.contentContainerStyle,
        contentContainerStyle,
      ]}
      refreshControl={
        disableRefresh || (
          <RefreshControl
            colors={[
              config.primaryColor,
              config.textPrimaryColor,
              config.activeColor,
            ]}
            refreshing={refreshing || false}
            onRefresh={onRefresh}
          />
        )
      }>
      {children}
    </ScrollView>
    {FooterComponent}
  </KeyboardAvoidingView>
);
const styles = StyleSheet.create({
  contentContainerStyle: {
    width: '95%',
    alignSelf: 'center',
    alignItems: 'center',
    paddingBottom: 12,
  },
  mainStyle: {flex: 1, backgroundColor: config.white},
});
export default SafeScrollView;
