import React from 'react';
import {KeyboardAvoidingView, View, Platform} from 'react-native';
import config from '../config';

const SafeSimpleView = ({
  children,
  style,
  FooterComponent,
  HeaderComponent,
}) => (
  <KeyboardAvoidingView
    behavior={Platform.OS == 'ios' ? 'padding' : null}
    style={{flex: 1, backgroundColor: config.white}}>
    {HeaderComponent}
    <View
      style={{
        flex: 1,
        alignSelf: 'center',
        width: '95%',
        alignItems: 'center',
        ...style,
      }}>
      {children}
    </View>
    {FooterComponent}
  </KeyboardAvoidingView>
);
export default SafeSimpleView;
