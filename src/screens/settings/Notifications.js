import React, {useState} from 'react';
import {CheckBox, MyText, SafeScrollView} from '../../components';
import {Fonts} from '../../config';
import {PersonalCard} from '../../containers';
import {addCheckFunction, CheckRecordFunc} from '../../helpers/checkBoxHandler';
import ScreenWrapper from 'library/wrapper/ScreenWrapper';
import strings from '../../strings';
const options = [
  strings.messages,
  strings.Deniedtoajob,
  strings.Newjobsinyourarea,
];
const HelpSupport = ({navigation, route}) => {
  const [selected, setSelected] = useState([...options]);
  const useAvatar = item => (
    <CheckBox
      remember={CheckRecordFunc(item, selected)}
      setRemember={() => addCheckFunction(item, selected, setSelected)}
    />
  );
  return (
    <ScreenWrapper>
      <SafeScrollView>
        <MyText
          style={{
            fontSize: 22,
            marginTop: 12,
            fontFamily: Fonts.Medium,
          }}
          text={route.name}
        />
        {options.map((item, index) => (
          <PersonalCard
            key={index.toString()}
            style={{marginTop: index == 0 ? 24 : 0}}
            title={item}
            avatar={useAvatar(item)}
          />
        ))}
      </SafeScrollView>
    </ScreenWrapper>
  );
};

export default HelpSupport;
