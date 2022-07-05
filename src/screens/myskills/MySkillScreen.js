import React, {useState} from 'react';
import {View} from 'react-native';
import {AntDesign} from '../../assets';
import {CheckBox, MyBtn, MyText, SafeScrollView} from '../../components';
import config, {Fonts} from '../../config';
import {PersonalCard} from '../../containers';
import {addCheckFunction, CheckRecordFunc} from '../../helpers/checkBoxHandler';
import strings from '../../strings';
import styles from './styles';
import ScreenWrapper from 'library/wrapper/ScreenWrapper';

const variants = [
  strings.houseBuilding,
  strings.Mechanic,
  strings.Transportation,
  strings.TechnologyHardware,
];
const houseBuilding = [
  'Carpenter',
  'Carpet installer',
  'Electrician',
  'Floor Installer',
];
const transportation = ['Mover', 'Loader', 'Unloader', 'Taxi'];
const mechanic = ['Car', 'Truck', 'Motorcycle', 'Small plane'];
const technologyHardware = ['Phones ', 'Computers ', 'TVs ', 'Cameras '];
const MySkillScreen = ({navigation}) => {
  const [activeVariant, setActiveVariant] = useState(null);
  const [activeNested, setActiveNested] = useState([]);
  const [remember, setRemember] = useState(null);
  const useCheckBox = item2 => (
    <CheckBox
      remember={CheckRecordFunc(item2, activeNested)}
      setRemember={() => addCheckFunction(item2, activeNested, setActiveNested)}
    />
  );
  const useAvatar = item => (
    <AntDesign
      name={activeVariant == item ? 'caretdown' : 'caretright'}
      size={15}
      color={config.black}
    />
  );
  const renderByIndex = index => {
    return index == 0
      ? houseBuilding
      : index == 1
      ? mechanic
      : index == 2
      ? transportation
      : technologyHardware;
  };
  const findLength = index => {
    let lengthOF = [];
    renderByIndex(index).map((x, i) => {
      let filtered = activeNested.find(v => v == x);
      if (filtered) {
        lengthOF.push(filtered);
      }
    });
    return lengthOF.length;
  };
  return (
    <ScreenWrapper>
      <SafeScrollView>
        <MyText style={styles.heading} text={strings.mySkills} />
        <MyText
          style={styles.whatAreYouGoodAt}
          text={strings.whatAreYouGoodAt}
        />
        {variants.map((item, index) => (
          <View
            style={{
              width: '100%',
            }}>
            <PersonalCard
              onPress={() =>
                setActiveVariant(activeVariant == index ? null : index)
              }
              style={{marginTop: index == 0 ? 24 : 0}}
              title={item}
              headingStyle={{
                fontFamily: Fonts.Semi_Bold,
              }}
              avatar={useAvatar(index)}
            />
            {activeVariant == index
              ? renderByIndex(index).map((item2, index2) => (
                  <PersonalCard
                    onPress={() =>
                      addCheckFunction(item2, activeNested, setActiveNested)
                    }
                    title={item2}
                    headingStyle={{
                      fontSize: 13,
                      fontFamily: Fonts.Medium,
                    }}
                    avatar={useCheckBox(item2)}
                  />
                ))
              : null}
            {activeVariant == null ? (
              <View
                style={{
                  backgroundColor: config.activeColor,
                  width: 140,
                  height: 30,
                  borderRadius: 25,
                  marginLeft: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MyText
                  style={{
                    color: config.white,
                    fontFamily: Fonts.Semi_Bold,
                  }}
                  text={strings.itemsSelected(findLength(index))}
                />
              </View>
            ) : null}
          </View>
        ))}
        <View style={styles.footerCont}>
          <View style={styles.row}>
            <MyText style={styles.bySaving} text={strings.BySaving} />
            <MyText style={styles.terms} text={' ' + strings.termsofSerivice} />
          </View>
          <MyBtn
            onPress={() => navigation.goBack()}
            style={styles.save}
            text={strings.save}
          />
        </View>
      </SafeScrollView>
    </ScreenWrapper>
  );
};

export default MySkillScreen;
